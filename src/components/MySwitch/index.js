import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';

const MySwitch = ({ title, label, options, value, setFieldValue }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginRight:15,}}> {title} </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold',marginLeft:10, }}>
        {' ' + options[isEnabled ? 1 : 0]}
      </Text>
    </View>
  );
};

export default MySwitch;
