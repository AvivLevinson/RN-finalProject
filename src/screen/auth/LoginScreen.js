import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// React Native Elements Component
import { Input, Icon } from 'react-native-elements';

//Image
import manWalk from '../../../assets/img/man-walks.png';

//API Call
import { login } from '../../api';

// Context
import { AuthContext } from '../../../App.js';

//UI Components
import Title from '../../components/Title';
import MyButton from '../../components/MyButton';

export default function LoginScreen() {
  const { setIsLogged } = useContext(AuthContext);
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = async () => {
    // need make http to localhost 
    console.log('handleLogin');

    try{
      const response = await login(phoneNumber, id); 
      console.log(response);
      

      

      setIsLogged((prev) => {
        return !prev;
      });

    }catch(error){
      console.log(error);

    }
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.topContainer}>
            <Title title={'Coronavirus Insulators'} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={manWalk} style={{ width: 200, height: 200 }} resizeMode="center" />
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.textSignup}>Please Sign Up:</Text>
          </View>

          <View style={styles.detalisContainer}>
            <View>
              <Input
                style={styles.textInput}
                containerStyle={{}}
                placeholder="Enter Id:"
                keyboardType="number-pad"
                onChangeText={(id) => {
                  setId(id);
                }}
              />
            </View>

            <View>
              <Input
                style={styles.textInput}
                placeholder="Enter Phone Number:"
                keyboardType="number-pad"
                onChangeText={(phoneNumber) => {
                  setPhoneNumber(phoneNumber);
                }}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <MyButton handleClick={handleLogin} title={'Login'} />
            <Icon
      color="#0CC"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="devices"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />


          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 0.2,
  },
  middleContainer: {
    flex: 0.5,
  },
  bottomContainer: {
    flex: 1,
  },

  imageContainer: {
    flex: 2,
    marginTop: 50,
  },

  detalisContainer: {
    flex: 1,
    width: '60%',
  },
  textSignup: {
    color: '#3EC1F3',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    borderColor: '#4756DF',
    height: 50,
  },
});
/*import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
*/