import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Promissions from 'expo-permissions';

const verifyPermissions = async () => {
  console.log('verify Permissions');
  const { status } = await Promissions.askAsync(Promissions.CAMERA, Promissions.CAMERA_ROLL);
  if (status !== 'granted') {
    console.log(status);
    Alert.alert('Error', 'You need to grant camera permissions', [{ text: 'Okay' }]);
    return false;
  }
  return true;
};

const TakeImage = async (setImg, setImgBase64) => {
  console.log('Take Image');
  const hasPermission = await verifyPermissions();
  if (!hasPermission) {
    return false;
  }
  const image = await ImagePicker.launchCameraAsync({
    aspect: [3, 3],
    maxHeight: 200,
    maxWidth: 200,
    base64:true,
  });

  console.log('image:',image);
  if (image.cancelled) {
    return;
  }



  if (image.uri) {
    setImgBase64((prev)=>{
      return {...prev, img:image.base64 };
    })
    setImg(prevState =>{
      return  [...prevState, image.uri] });
  }
};



export {TakeImage};