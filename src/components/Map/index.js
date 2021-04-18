import React, {useState} from 'react';
import { View,StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';


const LatLng = {
  latitude: 31.771959,
  longitude: 35.217018,
};

export default function Map({location, setLocation}) {

  const handleCangeCords= ()=>{
    setLocation(location)
  }


  return (
    <View style={styles.container}>
      <MapView
        maxZoomLevel={15}
        provider={MapView.PROVIDER_GOOGLE}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

        style={{ alignSelf: 'stretch', height: 470 }}
        onRegionChange = {handleCangeCords}
        
        >

        <Marker
          draggable
          onDragEnd={(event) => {
            const { latitude, longitude } = event.nativeEvent.coordinate;
            setLocation({ latitude: latitude, longitude: longitude });
          }}
          key="1"
          coordinate={location}
          title="marker.title"
          description="marker.description"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});