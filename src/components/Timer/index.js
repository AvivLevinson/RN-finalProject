import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Countdown from 'react-countdown';

import DisplayTimer from '../DisaplyTimer';


const Timer = ({days}) => {
  const Completionist = () => <Text>You are good to go!</Text>;

  const covertDayToMilec = ()=>{
    const milliseconds = days * 24 * 60 * 60 * 1000;
    return milliseconds;

  }



  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <DisplayTimer days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
  };

  return (
    
      <Countdown date={Date.now() + covertDayToMilec() } renderer={renderer} daysInHours={false}/>
    
  );
};

export default Timer;
