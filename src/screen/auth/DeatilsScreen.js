import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';


//images
import smileImg from '../../../assets/img/smile.png';


//components
import { description } from '../../constant/text/description.js';
import From from '../../components/Form.js';

export default function DeatilsScreen({ navigation }) {
  const [userDetails, setUserDetails] = useState({});


  const handleSubmitForm = (values)=>{
    setUserDetails(prevState => ({
      ...prevState,
      ...values
  }));
  navigation.navigate('Location', {userDetails});

  }

  


  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={smileImg}
            style={{ width: '100%', height: '100%', flex: 1 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.textDescription}>{description}</Text>
        </View>
        <From
          handleSubmitForm = {handleSubmitForm}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderColor: 'black',
    flexDirection: 'row',
    borderWidth: 1,
    width: '30%',
    flex: 0.5,
  },
  descriptionContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
  textDescription: {
    color: '#4756DF',
    fontSize: 20,
  },

  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#4756DF',
        width:'47%',
    
  },

});
