import React,{useState} from 'react';
import * as FileSystem from 'expo-file-system';

//"file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540avivl%252Fmy-final-project/ImagePicker/a4a1cf0c-12bf-4843-9bea-4815b9ecf696.jpg",

export default async function SavingImage({uri}){

    const [source, setSource] = useState(null);

    console.log('on save image');
    const fileName = uri.split('/').pop();
    console.log('file name is:', fileName);

    const path = `${FileSystem.documentDirectory}${fileName}`

    //check if the image exists
    const image = await FileSystem.getInfoAsync(path);
    
    console.log(JSON.stringify(image));
    
    if(image.exists){
        setSource({uri: image.uri});
    } else{
        const newImage = await FileSystem.writeAsStringAsync(uri,path);
        setSource({uri: newImage.uri});
    }
}


