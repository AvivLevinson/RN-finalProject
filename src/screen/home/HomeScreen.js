import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import menWithMasck from '../../../assets/img/men-with-masck.png';

import Timer from '../../components/Timer';
import Title from '../../components/Title';
import SliderHealth from '../../components/SilderHealth';


export default function HomeScreen() {

  const days = 5;
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Title title={'Hi Aviv'} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={menWithMasck}
          style={{
            resizeMode: 'contain',
            height: 180,
            width: 150,
          }}
        />
      </View>
      <View style={styles.timerContainer}>
      <Timer days={days} />
      </View>
      <SliderHealth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  top: {
    flex:0.2,
    width:'100%',
    //borderWidth:5,
    //borderColor:'green',
    alignItems:'center',
  },
  imageContainer:{
   // borderWidth:5,
   // borderColor:'black',
    width:'100%',
    alignItems:'center',
  },
  timerContainer:{
    flex:0.5,
    //borderWidth:5,
    //borderColor:'green',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },


});
