
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import {HomeScreen, LoginScreen, DeatilsScreen, LocationScreen, PictureScreen,SendData} from '../../screen';


// login process 
const AuthStack  = createStackNavigator();
const AuthStackScreen = ()=>{
    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component = {LoginScreen}/>
    </AuthStack.Navigator>
    );
}




const InfoStack  = createStackNavigator();
const InfoStackScreen = ()=>{
    return (
    <InfoStack.Navigator>
        <InfoStack.Screen name='Details' component = {DeatilsScreen}/>
        <InfoStack.Screen name='Location' component = {LocationScreen}/>
        <InfoStack.Screen name='Picture' component = {PictureScreen}/>
        <InfoStack.Screen name='SendData' component = {SendData}/>
    </InfoStack.Navigator>
    );
}




// after the login, move to Hone screen 
const HomeStack = createStackNavigator();
const HomeStackScreen = ()=>{
    return (
    <HomeStack.Navigator >
        <HomeStack.Screen name='Home' component = {HomeScreen}/>
    </HomeStack.Navigator>
    );
}


export {
    AuthStackScreen,
    HomeStackScreen,
    InfoStackScreen,

}
