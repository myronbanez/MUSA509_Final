library(tidyverse)
library(sf)
library(tidycensus)

census_api_key("3c9540be1434ac4b38e6e55d60e8ee95909f2254", overwrite = TRUE)

# Data and geography imports #

##Exports from AppOutputScrips.R, which combines the 3 geojsons from the model
propertylvl_round <- read_csv("../Data/predictions_full_round.csv")%>%
  st_as_sf(coords = c("lat", "lon"), crs = "EPSG:4326")

##Azavea Nhoods
nhoods_sf <- st_read("../Data/Neighborhoods_Philadelphia.geojson")%>%
  st_transform(crs = "EPSG:4326")

##ACS for Block Groups

acs_variable_list.2020 <- load_variables(2020, #year
                                         "acs5", #five year ACS estimates
                                         cache = TRUE)

acs_vars <- c("B01001_001E")

acsBGPHL.2020 <- get_acs(geography = "block group",
                             year = 2020, 
                             variables = acs_vars, 
                             geometry = TRUE, 
                             state = "PA", 
                             county = "Philadelphia", 
                             output = "wide")%>%
  dplyr::select(-B01001_001E, -B01001_001M, -GEOID)%>%
  st_transform("EPSG:4326")

# Testing #

ggplot()+
  geom_sf(data=acsBGPHL.2020, color="black")+
  geom_sf(data=propertylvl_round, color="black", size=0.1)

# Spatial join for nhoods #

##Joining nhoods to a dropped geo propertylvl dataset, then grouping by fire and averaging each prediction column
pred_nhoods <- nhoods_sf%>%
  dplyr::select(mapname)%>%
  st_join(dplyr::select(propertylvl_round, -neighborhood))

pred_nhoods_avg <- pred_nhoods%>%
  st_drop_geometry()%>%
  group_by(mapname)%>%
  summarize(across(where(is.numeric), mean, na.rm=FALSE))%>%
  left_join(dplyr::select(nhoods_sf, mapname, geometry), by="mapname")

#Spatial join for block groups
pred_blockgroups <- acsBGPHL.2020%>%
  st_join(dplyr::select(propertylvl_round, -neighborhood))

pred_blockgroups_avg <- pred_blockgroups%>%
  st_drop_geometry()%>%
  group_by(NAME)%>%
  summarize(across(where(is.numeric), mean, na.rm=FALSE))%>%
  left_join(dplyr::select(acsBGPHL.2020, NAME, geometry), by="NAME")

pred_nhoods_avg <- pred_nhoods_avg %>%
  rename(neighborhood = mapname)

pred_blockgroups_avg <- pred_blockgroups_avg%>%
  rename(block_group = NAME)

#Export 3x geojson

st_write(pred_blockgroups_avg, "C:/Users/Beeel/Documents/cloudcompC/Data/prediction_blockgroup.geojson")
st_write(pred_nhoods_avg, "C:/Users/Beeel/Documents/cloudcompC/Data/prediction_nhoods.geojson")
st_write(propertylvl_round, "C:/Users/Beeel/Documents/cloudcompC/Data/prediction_address.geojson")
