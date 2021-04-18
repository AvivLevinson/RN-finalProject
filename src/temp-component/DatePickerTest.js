import React, {  useEffect } from 'react';
import { View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';

export default function DatePicker({ setFieldValue,setVisible }) {
  const date = new Date(1598051730000)

  useEffect(()=>{
    console.log('DatePicker component');
  });

  const onChange = (event, selectedDate) => {
    console.log('onChange datePicker');
    const currentDate = selectedDate || date;
    const formattedDate = format(currentDate, 'dd/MM/yyyy');
    setVisible(false);
    setFieldValue('date',formattedDate);
  };

  return(
    <DateTimePicker
    testID="dateTimePicker"
    value={date}
    mode="date"
    is24Hour={true}
    display="default"
    onChange={onChange}
  />
  );
}
