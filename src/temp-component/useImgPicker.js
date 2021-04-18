/**
import {useState} from 'react';
import {Alert} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Promissions from 'expo-permissions';


const useImgPicker = ()=>{

    const [imgPicker, setImagPicker] = useState("test");

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
        console.log('inside take img picker');
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return false;
        }
        const image = await ImagePicker.launchCameraAsync();
        console.log('this is image.uri');
        console.log(image.uri);
        setImagPicker(image.uri);
        return true;
    }



    return{
        imgPicker,
         takeImagePicker };

};

export default useImgPicker;
 */

