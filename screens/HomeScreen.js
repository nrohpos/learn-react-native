import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import {setOrigin , setDestination} from "../slices/navSlice"

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlaceSearch"
          placeholder="Where From?"
          debounce={400}
          fou
          styles = {{
            container:{
              flex : 0,
            },
            textInput :{
              fontSize: 20
            }
          }}
          enablePoweredByContainer={false}
          query={{
            key:GOOGLE_MAPS_APIKEY,
            language:'en'
          }}
          onPress= {(data , details= null)=>{
           dispatch(setOrigin({
            location: details.geometry.location,description:data.description
           }));
           dispatch(setDestination(null))
          }}
          fetchDetails={true}
          onFail= { error => console.error(error)}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
 