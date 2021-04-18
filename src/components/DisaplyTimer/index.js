import React from 'react';

import {Text, View} from 'react-native';

import styles from './styles';

const DisplayTimer = ({days, hours, minutes, seconds})=>{


return(
    <View>
       <Text style={styles.label}>Time left for isolation</Text>
        <Text style={styles.timerText}>
          {days}:{hours}:{minutes}:{seconds}
        </Text>
    </View>
);

}

export default DisplayTimer;


