/**

import React,{useEffect, useState} from 'react';
import { Alert,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Promissions from 'expo-permissions';
/// create component use the function and send them 

const ImgPicker = ()=>{

    const [imgUrl,setImgUrl] = useState(null);


    useEffect(()=>{

        console.log('inside useEffect');
        TakeImagePicker();

    },[]);

    const verifyPermissions = async () => {
        const { status } = await Promissions.askAsync(Promissions.CAMERA, Promissions.CAMERA_ROLL);
        if (status !== 'granted') {
          console.log(result);
          Alert.alert('Error', 'You need to grant camera permissions', [{ text: 'Okay' }]);
          return false;
        }
      
        return true;
      };
      

    const TakeImagePicker = async () => {
        console.log('inside take img picker');
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
          return false;
        }
        const image = await ImagePicker.launchCameraAsync(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 150,
            maxWidth: 150,
          }
        );
        
        if(image.uri){
            setImgUrl(image.uri);
        }
        
      };


    return( 
       <Image style={{width: '100%',height: 150,}} source={imgUrl ? {uri: imgUrl } : null} resizeMode='contain'/> 
);
}




export default ImgPicker;


 */