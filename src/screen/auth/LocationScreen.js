import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";


import MapView from 'react-native-maps';




export default function LocationScreen({navigation, route}){
    const { userDetails } = route.params;
    console.dir(JSON.stringify(userDetails));


    return(
        <View>
              <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
        </View>
    );





}