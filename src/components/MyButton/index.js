import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';



const MyButton = ({ title, handleClick, style }) => {
  return (
      <TouchableOpacity style={styles.btn}  onPress={handleClick} activeOpacity={0.5}>
        <Text style={styles.textInsideButton}> {title} </Text>
      </TouchableOpacity>
  );
};

export default MyButton;



