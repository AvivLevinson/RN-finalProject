import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';


const Title = ({title})=>{
return(

        <Text style={styles.text}>{title}</Text>
);
}

export default Title;