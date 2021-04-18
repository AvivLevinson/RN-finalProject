import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthStackScreen, HomeStackScreen, InfoStackScreen } from './src/navigation';

import { UserInfoProvider } from './src/reducer/user-reducer';

export const AuthContext = createContext();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isFinishProcessInfo, setIsFinishProcessInfo] = useState(false);

  const setLoginUser = () => {
    setIsLogged(false);
  };

  useEffect(()=>{
    console.log('useEffect: isLogged:',isLogged);
  });

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          {   
          isFinishProcessInfo ? (
            <HomeStackScreen />
          ) : isLogged ? (
            <UserInfoProvider setIsFinishProcessInfo={setIsFinishProcessInfo}>
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
