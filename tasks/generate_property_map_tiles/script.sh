#!/usr/bin/env bash
set -ex

## Neighborhoods ##

# Download the property_tile_info.geojson file from the temp bucket.
gcloud storage cp \
  gs://fire_recovery_data_lake/prediction_nhoods.geojson \
  ./prediction_nhoods.geojson

# Convert the geojson file to a vector tileset in a folder named "properties".
# The tile set will be in the range of zoom levels 12-18. See the ogr2ogr docs
# at https://gdal.org/drivers/vector/mvt.html for more information.
ogr2ogr \
  -f MVT \
  -dsco MINZOOM=9 \
  -dsco MAXZOOM=13 \
  -dsco COMPRESS=NO \
  ./neighborhoods \
  ./prediction_nhoods.geojson

# Upload the vector tileset to the public bucket.
gcloud storage cp \
  --recursive \
  ./neighborhoods \
  gs://fire_recovery_data_lake/tiles

## Block Groups ##

# Download the property_tile_info.geojson file from the temp bucket.
gcloud storage cp \
  gs://fire_recovery_data_lake/prediction_blockgroup.geojson \
  ./prediction_blockgroup.geojson

# Convert the geojson file to a vector tileset in a folder named "properties".
# The tile set will be in the range of zoom levels 12-18. See the ogr2ogr docs
# at https://gdal.org/drivers/vector/mvt.html for more information.
ogr2ogr \
  -f MVT \
  -dsco MINZOOM=11 \
  -dsco MAXZOOM=15 \
  -dsco COMPRESS=NO \
  ./blockgroups \
  ./prediction_blockgroup.geojson

# Upload the vector tileset to the public bucket.
gcloud storage cp \
  --recursive \
  ./blockgroups \
  gs://fire_recovery_data_lake/tiles

## Addresses ##

# Download the property_tile_info.geojson file from the temp bucket.
gcloud storage cp \
  gs://fire_recovery_data_lake/prediction_address.geojson \
  ./prediction_address.geojson

# Convert the geojson file to a vector tileset in a folder named "properties".
# The tile set will be in the range of zoom levels 12-18. See the ogr2ogr docs
# at https://gdal.org/drivers/vector/mvt.html for more information.
ogr2ogr \
  -f MVT \
  -dsco MINZOOM=14 \
  -dsco MAXZOOM=18 \
  -dsco COMPRESS=NO \
  ./properties \
  ./prediction_address.geojson

# Upload the vector tileset to the public bucket.
gcloud storage cp \
  --recursive \
  ./properties \
  gs://fire_recovery_data_lake/tiles