#!/usr/bin/env bash
set -ex

# Download the property_tile_info.geojson file from the temp bucket.
gcloud storage cp \
  gs://fire_recovery_data_lake/predictions_parcels.geojson \
  ./predictions_parcels.geojson

# Convert the geojson file to a vector tileset in a folder named "properties".
# The tile set will be in the range of zoom levels 12-18. See the ogr2ogr docs
# at https://gdal.org/drivers/vector/mvt.html for more information.
ogr2ogr \
  -f MVT \
  -dsco MINZOOM=14 \
  -dsco MAXZOOM=19 \
  -dsco COMPRESS=NO \
  ./parcels \
  ./predictions_parcels.geojson

# Upload the vector tileset to the public bucket.
gcloud storage cp \
  --recursive \
  ./parcels \
  gs://fire_recovery_data_lake/tiles