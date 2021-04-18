import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Formik, ErrorMessage } from 'formik';

import { Input, Button, CheckBox } from 'react-native-elements';

import DatePicker from './DatePickerTest.js';

import DateIcon from '../components/DateIcon.js';

export default function Form({handleSubmitForm}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('render Form component');
  }, []);

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', date: '', gender: '', positive: '' }}
      onSubmit={(values) => {
        console.log('onSumbit Form',values);
        handleSubmitForm(values);
      }}>
      {(props) => (

        <View style={styles.formContainer}>
          <View style={styles.firstSection}>
            <Input
              label="First Name"
              placeholder="first name"
              style={styles.textInput}
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
              containerStyle={styles.containerTextInput}
            />
            <Input
              label="Last Name"
              placeholder="last name"
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
              containerStyle={styles.containerTextInput}
            />
          </View>
          <View style={styles.secondSection}>
            <Input
              label="birthday"
              placeholder="DD/MM/YYYY"
              containerStyle={styles.containerTextInput}
              onChangeText={props.handleChange('date')}
              value={props.values.date}
              disabled={true}
            />
            <Button
              onPress={() => setVisible(true)}
              buttonStyle={{ width: '25%', height: '80%', marginTop: 15 }}
              containerStyle={{ width: '50%', height: '100%' }}
              type="solid"
              icon={<DateIcon />}>
              Date
            </Button>
            {visible && <DatePicker setFieldValue={props.setFieldValue} setVisible={setVisible} />}
          </View>

          <View style={styles.checkBoxSection}>
            <Text> gender: </Text>
            <CheckBox
              center
              checked={props.values.gender === 'men' ? true : false}
              onPress={()=>{
                props.setFieldValue('gender', 'men');
              }}
              checkedColor="#0F0"
              containerStyle={{ width: "25%",backgroundColor: 'none', borderWidth:0}}
              size={30}
              textStyle={{}}
              title="men"
              titleProps={{}}
              uncheckedColor="#DCDCDC"
            />
            <CheckBox
              center
              checked={props.values.gender === 'female' ? true : false}
              onPress={()=>{
                props.setFieldValue('gender', 'female');
              }}
              checkedColor="#0F0"
              containerStyle={{ width: "25%",backgroundColor: 'none', borderWidth:0}}
              size={30}
              textStyle={{}}
              title="female"
              titleProps={{}}
              uncheckedColor="#DCDCDC"
            />
          </View>

          <View style={styles.checkBoxSection}>
            <Text style={{alignItems:'center'}}> positive to covid-19: </Text>
            <CheckBox
              center
              checked={props.values.positive === 'true' ? true : false}
              onPress={()=>{
                props.setFieldValue('positive', 'true');
              }}
              checkedColor="#0F0"
              containerStyle={{ width: "25%",backgroundColor: 'none', borderWidth:0}}
              size={30}
              textStyle={{}}
              title="yes"
              titleProps={{}}
              uncheckedColor="#DCDCDC"
            />
            <CheckBox
              center
              checked={props.values.positive === 'false' ? true : false}
              onPress={()=>{
                props.setFieldValue('positive', 'false');
              }}
              checkedColor="#0F0"
              containerStyle={{ width: "25%",backgroundColor: 'none', borderWidth:0,}}
              size={30}
              textStyle={{}}
              title="no"
              titleProps={{}}
              uncheckedColor="#DCDCDC"
            />
          </View>

          <Button title="submit" onPress = {props.handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 3,
    //borderColor: 'green',
    //borderWidth: 1,
    width: '100%',
  },

  firstSection: {
    flexDirection: 'row',
    //borderColor: 'blue',
    //borderWidth: 3,
  },

  secondSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderColor: 'pink',
    //borderWidth: 3,
    flex: 0.3,
  },
  checkBoxSection: {
    flexDirection: 'row',
    //borderColor: 'black',
    

    //borderWidth: 3,
  },

  btnSubmit: {
    width: '100%',
    height: 50,
  },
  containerTextInput: {
    width: '50%',
  },
});
