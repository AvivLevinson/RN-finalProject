
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import {HomeScreen, LoginScreen, DeatilsScreen, LocationScreen, PictureScreen} from '../../screen';


// login process 
const AuthStack  = createStackNavigator();
const AuthStackScreen = ()=>{
    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component = {LoginScreen}/>
        <AuthStack.Screen name='Details' component = {DeatilsScreen}/>
        <AuthStack.Screen name='Location' component = {LocationScreen}/>
        <AuthStack.Screen name='Picture' component = {PictureScreen}/>

    </AuthStack.Navigator>
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
    HomeStackScreen

}
