import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon, Button, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Markers from './Markers';
import {AppContext} from '../AppContext';

const MapScreen = () => {
  const {region, setRegion, country} = useContext(AppContext);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        onRegionChangeComplete={setRegion}>
        <Markers />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
  },
  hamburger: {
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
