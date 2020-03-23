import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Emoji from 'react-native-emoji';
import {Marker} from 'react-native-maps';
import {AppContext} from '../AppContext';

const COUNTRY2FLAG: {[country: string]: string} = {
  タイ: 'flag-th',
};

const Markers = () => {
  const {restaurants, country} = useContext(AppContext);
  return (
    <>
      {restaurants.map(restaurant => (
        <Marker
          key={restaurant.id}
          coordinate={{
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
          }}
          title={restaurant.name}
          description={`Googleレビュー: ${restaurant.rating}`}>
          <View style={styles.marker}>
            <Text>
              <Emoji name={COUNTRY2FLAG[country]} style={styles.emoji} />
            </Text>
          </View>
        </Marker>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  marker: {
    padding: 10,
  },
  emoji: {
    fontSize: 30,
  },
});

export default Markers;
