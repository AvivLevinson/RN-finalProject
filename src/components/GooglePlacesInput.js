import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_API_KEY } from '../config';

export default function GooglePlacesInput({ setLocation }) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          //details.geometry.location.lat  + details.geometry.location.lng
          const latitude = details.geometry.location.lat;
          const longitude = details.geometry.location.lng;
          setLocation({ latitude: latitude, longitude: longitude });
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          fields: ['geometry'],
        }}
        enablePoweredByContainer={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
  },
});
