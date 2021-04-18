import React, {useState, useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

import {useUserInfo} from '../../reducer/user-reducer';
import {sendProcessInfo} from '../../api';


export default function SendData() {
    const [lodaing,setLoading] = useState(true)
    context = useUserInfo();

  useEffect(()=>{
    console.log('useEffect SendData');
    console.log(Object.keys(context.state));

    async function sendData(){
      const result = await sendProcessInfo(context.state);
      if(!result){
        console.log('Error');
      } else{ 
        setLoading(!lodaing);
        context.setIsFinishProcessInfo((prev)=> !prev);
      }

    }

    sendData();
  },[]);

  return(
  <View style={styles.container}>
    <ActivityIndicator
     size="large"
     animating={true}
     color="#0000ff" 
     />

     <Text>Send Data</Text>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems:'center'
  },
});