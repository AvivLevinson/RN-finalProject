import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

import { Formik } from 'formik';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//UI Components
import CheckBoxs from '../CheckBoxs';
import DatePicker from '../DatePicker';
import MyButton from '../MyButton';
import MySwitch from '../MySwitch';

export default function Form({ handleSubmitForm }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('render Form component');
  }, []);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        birthday: { day: '', month: '', year: '' },
        gender: '',
        positive: '',
        privateHouse: '',
        liveAlone:'',
        profession:'',

      }}
      onSubmit={(values) => {
        handleSubmitForm(values);
      }}>
      {(props) => (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Input
            containerStyle={{ width: '50%' }}
            disabledInputStyle={{ background: '#ddd' }}
            onChangeText={props.handleChange('firstName')}
            leftIcon={<Icon name="account-outline" size={20} />}
            placeholder="First Name"
          />

          <Input
            containerStyle={{ width: '50%' }}
            disabledInputStyle={{ background: '#ddd' }}
            onChangeText={props.handleChange('lastName')}
            leftIcon={<Icon name="account-outline" size={20} />}
            placeholder="Last Name"
          />

          <Text style={styles.textLabel}>Enter Your Birthday: </Text>

          <DatePicker setFieldValue={props.setFieldValue} label="birthday" />

          <Text style={styles.textLabel}>Choose from the options: </Text>

          <CheckBoxs
            title="Gender"
            label="gender"
            options={['men', 'female']}
            value={props.values.gender}
            setFieldValue={props.setFieldValue}
          />

          <CheckBoxs
            title="Positive"
            label="positive"
            options={['yes', 'no']}
            value={props.values.positive}
            setFieldValue={props.setFieldValue}
          />

          <MySwitch
            title="Is Private House?"
            label={'privateHouse'}
            options={['no', 'yes']}
            value={props.values.privateHouse}
            setFieldValue={props.setFieldValue}
          />

<MySwitch
            title="Do you live alone?"
            label={'liveAlone'}
            options={['no', 'yes']}
            value={props.values.liveAlone}
            setFieldValue={props.setFieldValue}
          />

<Input
            containerStyle={{ width: '70%' }}
            disabledInputStyle={{ background: '#ddd' }}
            onChangeText={props.handleChange('profession')}
            leftIcon={<Icon name="account-outline" size={20} />}
            placeholder="Your Profession"
          />

          <View style={{ alignItems: 'center', width: '100%' }}>
            <MyButton title={'Submit'} handleClick={props.handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    marginTop: 10,
    marginLeft: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    margin: 10,
    fontSize: 20,
  },
});
