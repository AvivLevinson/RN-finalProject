import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Map from '../../components/Map.js';
import GooglePlacesInput from '../../components/GooglePlacesInput.js';

export default function LocationScreen({ navigation, route }) {
  const { userDetails } = route.params;

  const [location, setLocation] = useState({
    latitude: 31.771959,
    longitude: 35.217018,
  });

  const handleSubmit = () => {
    console.log(location);
    navigation.navigate('Picture');
  };
  return (
    <View> 
      <View>
        <GooglePlacesInput setLocation={setLocation} />
      </View>
      <View>
        <Map setLocation={setLocation} location={location} />
      </View>
      <View>
        <Button title="submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  container:{
    flex:1,


  },
  googleSearch:{
    flex:1,

  },
  mpaContainer:{
    flex:1,
  },
  btnContainer:{
    flex:1,
    
  }
});