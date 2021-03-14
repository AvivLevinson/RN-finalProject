import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import TakePicture from '../../components/TakePicture.js';



export default function PictureScreen({ navigation, route }) {
  return (
    <View> 
        <TakePicture/>
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