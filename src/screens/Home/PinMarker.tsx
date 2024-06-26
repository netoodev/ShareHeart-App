import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';

export default function PinMarker({ coordinate, image, name, description }) {
  return (
    <Marker coordinate={coordinate} title={name} description={description}>
      <Image source={image} style={styles.markerImage} />
    </Marker>
  )
}

const styles = StyleSheet.create({
    
    markerImage: {
      width: 50, 
      height: 50, 
    },
  });
  