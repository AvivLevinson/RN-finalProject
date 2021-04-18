import React from 'react';
import { View, Text } from 'react-native';

import { CheckBox } from 'react-native-elements';

const CheckBoxs = ({ title,label, options, value, setFieldValue}) => {

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight:'bold', }}> {title}: </Text>
      <CheckBox
        center
        checked={value === options[0] ? true : false}
        onPress={() => {
         setFieldValue(label,  options[0])
        }}
        checkedColor="#0F0"
        containerStyle={{
          width: '40%',
          backgroundColor: 'none',
          borderWidth: 0,
        }}
        size={30}
        textStyle={{}}
        title={options[0]}
        titleProps={{}}
        uncheckedColor="#DCDCDC"
      />

      <CheckBox
        center
        checked={value === options[1] ? true : false}
        onPress={() => {
          setFieldValue(label,  options[1])
        }}
        checkedColor="#0F0"
        containerStyle={{
          width: '40%',
          backgroundColor: 'none',
          borderWidth: 0,
        }}
        size={30}
        textStyle={{}}
        title={options[1]}
        titleProps={{}}
        uncheckedColor="#DCDCDC"
      />
    </View>
  );
};

export default CheckBoxs;
