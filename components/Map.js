import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import tw from "twrnc";

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin.location.lat);
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title = "Origin"
          description={origin.description}
          identifier= "origin"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
