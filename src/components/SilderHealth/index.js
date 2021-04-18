import React,{useState} from 'react';
import { View, Text } from 'react-native';

import { Slider, Icon } from 'react-native-elements';

import MyIcon from '../MyIcon';

const SliderHealth = () => {
  const [label, setLabel] = useState('Feeling Good');
  const labelOptions = ['Feeling Good', 'Feeling Fine', 'Feels Weird', 'Feel Sick', 'Feeling Bad'];
  const iconOptions = [];
  
  const changeLabel = (value) => {
    const index = value;
    setLabel(labelOptions[index]);
  };

  const changeIcone = ()=>{

  }


  return (
    <>
    <MyIcon/>
    <Text>{label}</Text>
      <Slider
        animateTransitions
        animationType="timing"
        maximumTrackTintColor="#ccc"
        maximumValue={4}
        minimumTrackTintColor="#222"
        minimumValue={0}
        onSlidingComplete={() => console.log('onSlidingComplete()')}
        onSlidingStart={() => console.log('onSlidingStart()')}
        onValueChange={(value) => changeLabel(value)}
        orientation="horizontal"
        step={1}
        style={{ width: '80%', height: 50 }}
        thumbStyle={{ height: 20, width: 20 }}
        thumbProps={{
          children: (
            <Icon
              name="stethoscope"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#4756DF"
            />
          ),
        }}
        thumbTouchSize={{ width: 40, height: 40 }}
        trackStyle={{ height: 10, borderRadius: 20 }}
        value={0}
      />
      </>
  );
};

export default SliderHealth;
