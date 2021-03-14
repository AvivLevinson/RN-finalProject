import React, {useState} from 'react';

import {View, Button, Text, StyleSheet, Image, Alert} from 'react-native';

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
            <View style={styles.imagePreview}>
                <Text>NO image picked yet. </Text>
                </View>
            <Image style={styles.image} source={{uri: imagePicker }}/>
            <Button title="Take image" onPress = {takeImagePicker } />
        </View>
    );
}

const styles = StyleSheet.create({
    imagePicker:{
        alignItems:'center',
    },
    imagePreview:{},
    image:{
        width:"100%",
        height:200,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:'#ccc',
        borderWidth:1,


    }
});