import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { useUserInfo } from '../reducer/user-reducer';
import {sendProcessInfo} from '../api'

const Loading = () => {
  const [isLoading, setLoading] = useState(false);
  const context = useUserInfo();

  useEffect( ()=>{
    async function sendData(){
    await sendProcessInfo(context.state);
    context.setIsFinishProcessInfo((prev)=>!prev);
    }
    sendData();
    setInterval(()=>{},5000);

  })

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
});

export default Loading;
