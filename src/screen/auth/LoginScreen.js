import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";



import manWalk from '../../../assets/img/man-walks.png';

import {AuthContext} from '../../../App.js';





export default function LoginScreen({navigation}) {

    const {setLoginUser} = useContext(AuthContext);
    const [id, setId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
      <TouchableWithoutFeedback
        onPress= { ()=>{
          Keyboard.dismiss()
         }}
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.topContainer}>
        <Text style={styles.title}> Coronavirus Insulators</Text>
        </View>
        
        <View style={styles.imageContainer}>
        <Image source={manWalk}
          style = {{width: 200, height:200}}
          resizeMode = 'center'
          />
        </View>
        
        <View style={styles.middleContainer}>
        <Text style={styles.textSignup}>Please Sign Up:</Text>
        </View>

      
    
      <View style={styles.detalisContainer}> 
        <View>
          <TextInput
            style={styles.textInput}
            placeholder='id:'
            keyboardType = 'number-pad'
            onChangeText={(id) =>{
              setId(id);
            }
            }
          />
        </View>

        <View>
          <TextInput
          style={styles.textInput}
            placeholder='phone number:'
            keyboardType = 'number-pad'
            onChangeText={(phoneNumber) =>{
                setPhoneNumber(phoneNumber);    
            }}
          />
        </View>

      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            {
              console.log('press ');
              navigation.navigate('Details');

            } 
          }
            activeOpacity={0.5}
        > 
            <Text style={styles.textInsideButton}> next </Text>

        </TouchableOpacity>  
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>

    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer:{
    flex:0.2,
  },
  middleContainer:{
    flex:0.5,
  },
  bottomContainer:{
    flex:1,
  },

 imageContainer:{
    flex:2,
    marginTop:50,
  },

  detalisContainer:{
    flex:1,
  },


  title: {
    color: '#4756DF',
    borderBottomWidth:1,
    fontSize:20,
    marginTop:10,

  },
  textSignup:{
    color:'#3EC1F3',
    fontSize:30,
    fontWeight:'bold',
  },
  textInput:{
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor: '#4756DF',
    height: 50,
    
  },

  btn:{
    alignItems: "center",
    backgroundColor:'#4756DF',
    borderRadius:50,
    width:150,
    height:50,
    elevation: 6,
  },
  textInsideButton:{
    color: 'white',
    fontSize:20,
    paddingTop:5,

  }

});


