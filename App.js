import React, { useState, useEffect, createContext } from 'react';


import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthStackScreen, HomeStackScreen, InfoStackScreen } from './src/navigation';

import { UserInfoProvider } from './src/reducer/user-reducer';

export const AuthContext = createContext();

export default function App() {

  const [isLogged, setIsLogged] = useState(false);

  const [isFinishProcessInfo, setIsFinishProcessInfo] = useState(false);

  const setCompleteLogin = async () => {
    console.log('setLoginUser');
    console.log('store token_login on storage');
    /**
    const value = 'token_login';
    try {
      await AsyncStorage.setItem('token_login', value);
      setIsFinishProcessInfo(true);

    } catch (error) {
      console.log(error);
    }
     */
    setIsFinishProcessInfo(true);

  };

  
    //check if user was login and compelte login process 
    useEffect(()=>{
      /**
       *  (async ()=>{
        try {
          const value = await AsyncStorage.getItem('token_login')
          
          if(value !== null) {
            console.log('value: ', value);
            setIsFinishProcessInfo(true);
          }
  
        } catch(error) {
          console.log(error);
      }})()
       * 
       */
     
    },[])

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          {   
          isFinishProcessInfo ? (
            <HomeStackScreen />
          ) : isLogged ? (
            <UserInfoProvider setCompleteLogin={setCompleteLogin}>
              <InfoStackScreen />
            </UserInfoProvider>
          ) : (
            <AuthContext.Provider value={{ setIsLogged }}>
              <AuthStackScreen />
            </AuthContext.Provider>
          )}
        </NavigationContainer>
      </SafeAreaProvider>

  );
}

// check if user loged in and render the right props
