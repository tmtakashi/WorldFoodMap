import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Title, Icon, Button} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {AppContext} from '../AppContext';

const MapScreen = () => {
  const {region, setRegion} = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Header style={styles.header}>
        <Left />
        <Right>
          <Button style={styles.hamburger} transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={setRegion}
      />
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
