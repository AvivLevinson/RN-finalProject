import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/FontAwesome';

import { View } from 'react-native';

const DatePicker = ({setFieldValue, label}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31'
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const years = ['2021', '2020', '2019', '2018', '2017'];

  return (
    <View style={{ flexDirection: 'row' }}>
      <Picker
        style={{
          width: 120,
          height:20,
        }}
        selectedValue={month}
        onValueChange={(itemValue, itemIndex) => setFieldValue('birthday.month',itemValue)}>
        <Picker.Item label="month:" value="month" />
        {
          months.map((item,key) => {
          return <Picker.Item label={item} value={item} key={key} />;
        })}
      </Picker>

      <Picker
        style={{
          width: 100,
          height:20,
        }}
        selectedValue={day}
        onValueChange={(itemValue, itemIndex) => setFieldValue('birthday.day',itemValue)}>
        <Picker.Item label="day:" value="day" />
        {days.map((item,key) => {
          return <Picker.Item label={item} value={item} key={key}/>;
        })}
      </Picker>
      <Picker
        style={{
          width: 120,
          height:20,
        }}
        selectedValue={year}
        onValueChange={(itemValue, itemIndex) => setFieldValue('birthday.year',itemValue)}>
        <Picker.Item label="year:" value="year" />
        {years.map((item,key) => {
          return <Picker.Item label={item} value={item} key={key}/>;
        })}
      </Picker>
      
      <Icon
        name="calendar"
        size={30}
        color="blue"
      />
    </View>
  );
};

export default DatePicker;
