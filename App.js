import React, {useState, useEffect,createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AuthStackScreen, HomeStackScreen} from './src/navigation';


export const AuthContext = createContext();


export default function App() {
  const [isLogged, setIsLogged]= useState(false);


  const setLoginUser = ()=>{
    setIsLogged(true);
  }

  return (
    <AuthContext.Provider value={{setLoginUser}}> 
    <SafeAreaProvider>
    <NavigationContainer>
        {isLogged ? (
          <HomeStackScreen/>
        ) : (
          <AuthStackScreen/>
        )}
    </NavigationContainer>
    </SafeAreaProvider  >
    </AuthContext.Provider>

  );
}

// check if user loged in and render the right props