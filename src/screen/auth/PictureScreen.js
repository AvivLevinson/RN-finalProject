import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';

//import TakePicture from '../../components/TakePicture.js';

import useImgPicker from '../../components/useImgPicker.js'

import snapImage from '../../../assets/img/snapImage.png';


export default function PictureScreen({ navigation, route }) {

  const { imgPicker , takeImagePicker} = useImgPicker();

  const [ imgTest, setImgTest] = useState('');

  const [hasTakePicture, setHasTakePicture] = useState(false);

  const [urlList, setUrlList] = useState(null);



  useEffect(()=>{
    setImgTest((prev)=>{
      prev:imgPicker})
      console.log("bla - ",imgPicker)
    
  },[]);


  const displayImg = async ()=>{

    console.log('display img on screen');
    const success = await takeImagePicker();
    console.log('after take img picker');
    if(!success){
      Alert.alert('Error',
      'cant show picture',
      [{text: 'Okay'}]
     );
      return;
    }


    setHasTakePicture(true);



  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>take a picture of your face</Text>
        <Text>totle picture: (1/3)</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Image source={snapImage} style={styles.img} resizeMode="contain" />
      </View>
      {hasTakePicture ? (


      <View style={styles.imgContainer}>
    
        <View>
        <Image style={styles.image} source={{uri: imgPicker }} resizeMode='contain'/>
        <Text>{imgPicker}</Text>
        
        </View>
        </View>

        ) :
        (
          <View></View>
        )
        }
      
      
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={ displayImg }
            activeOpacity={0.5}>
            <Text style={styles.textInsideButton}> take a picture </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    flex: 0.5,
    borderWidth: 1,
  },

  imgContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    flex: 0.3,
    borderWidth: 1,
  },

  img: {
    width: '100%',
    height: '100%',
  },

  btnContainer: {
    flex: 0.2,
    borderWidth: 5,
    borderColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#4756DF',
    borderRadius: 50,
    width: 150,
    height: 50,
    elevation: 6,
  },
  textInsideButton: {
    color: 'white',
    fontSize: 20,
    paddingTop: 5,
  },
});
