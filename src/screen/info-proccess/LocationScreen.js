import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';


// UI Components 
import MyButton from '../../components/MyButton';



// Logic Component
import Map from '../../components/Map';
import GooglePlacesInput from '../../components/GooglePlacesInput';

import {useUserInfo} from '../../reducer/user-reducer'
import {TYPES} from '../../reducer/user-reducer/types'


export default function LocationScreen({ navigation }) {

  const [location, setLocation] = useState({
    latitude: 31.771959,
    longitude: 35.217018,
  });

  const context = useUserInfo();

  const handleSubmit = async () => {
    console.log(location);
    
    await context.dispatch({
      type:TYPES.SET_LOCATION,
      payload:{
          location
        
      }
    });

    navigation.navigate('Picture');
  };
  return (
    <View style={styles.container}> 
    <GooglePlacesInput setLocation={setLocation} />
      <View style={styles.mpaContainer}>
        <Map setLocation={setLocation} location={location} />
      </View>
      
      <View style={styles.btnContainer}>
        <MyButton
        handleClick = {handleSubmit}
        title={'next'}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  googleSearch:{
    flex:1,

  },
  mpaContainer:{
    flex:2,
  
  },
  btnContainer:{
    flex:0.2,
    alignItems:'center',
    marginBottom:7,
  }
});

/**    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    
    
    
            <GooglePlacesInput setLocation={setLocation} />

    */