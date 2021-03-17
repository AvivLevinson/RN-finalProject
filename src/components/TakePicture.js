/*

import React, {useState} from 'react';

import {View,  Text, StyleSheet, Image, Alert,TouchableOpacity} from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import * as Promissions from 'expo-permissions';


export default function TakePicture(props){

    const [imagePicker, setImagePicker] = useState();

    const verifyPermissions = async ()=>{
        const {status} = await Promissions.askAsync(Promissions.CAMERA, Promissions.CAMERA_ROLL);
        if(status !== 'granted'){
            console.log(result);
            Alert.alert('Error',
             'You need to grant camera permissions',
             [{text: 'Okay'}]
            );
            return false;
        }

        return true;


    }

    const takeImagePicker = async ()=>{
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return;
        }
        const image = await ImagePicker.launchCameraAsync();
        console.log(image );
        setImagePicker(image.uri);
    }

    return(
        <View style={styles.imagePicker}>



        </View>
    );
}




const styles = StyleSheet.create({
    imagePicker:{
        flex:1,
    },
    imagePreview:{
        width:'100%',
        flex:0.5,
        borderWidth:10,
        borderColor:'black',
        alignItems:'center',
        marginTop:10,

    },
    image:{
        width:"30%",
        height:30,
        marginBottom:5,

    },
    imageContainer:{
        borderColor:'black',
        borderWidth:10,
        justifyContent:'space-around',
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1,
        width:"100%",


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
  bottomContainer: {
    flex: 2,
  },
});
*/

/**
 * return(
        <View style={styles.imagePicker}>


            <View style={styles.imagePreview}>
                <Text>NO image picked yet. </Text>
            </View>


            <View style={styles.imageContainer}>

            <Image style={styles.image} source={{uri: imagePicker }} resizeMode='contain'/>
            <Image style={styles.image} source={{uri: imagePicker }} resizeMode='contain'/>
            <Image style={styles.image} source={{uri: imagePicker }} resizeMode='contain'/>
            <Image style={styles.image} source={{uri: imagePicker }} resizeMode='contain'/>
            <Image style={styles.image} source={{uri: imagePicker }} resizeMode='contain'/>
            </View>
 


        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log('press ');
              takeImagePicker();
            }}
            activeOpacity={0.5}>
            <Text style={styles.textInsideButton}> Take image </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePicker:{
        flex:1,
    },
    imagePreview:{
        width:'100%',
        flex:0.5,
        borderWidth:10,
        borderColor:'black',
        alignItems:'center',
        marginTop:10,

    },
    image:{
        width:"30%",
        height:30,
        marginBottom:5,

    },
    imageContainer:{
        borderColor:'black',
        borderWidth:10,
        justifyContent:'space-around',
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1,
        width:"100%",


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
  bottomContainer: {
    flex: 2,
  },
});
 * 
 * 
 * 
 * 
 */