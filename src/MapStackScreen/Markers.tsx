import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Emoji from 'react-native-emoji';
import {Marker} from 'react-native-maps';
import {AppContext} from '../AppContext';

const COUNTRY2FLAG: {[country: string]: string} = {
  タイ: 'flag-th',
  インド: 'flag-in',
  イタリア: 'it',
  フランス: 'fr',
  ドイツ: 'de',
};

const Markers = () => {
  const {restaurants, country} = useContext(AppContext);
  return (
    <>
      {restaurants.map(restaurant => {
        let description: string = `Googleレビュー: ${restaurant.rating}\n`;
        if (
          restaurant.opening_hours &&
          restaurant.opening_hours.opennow !== 'undefined'
        ) {
          description += restaurant.opening_hours.open_now
            ? '営業中'
            : '営業時間外';
        }
        return (
          <Marker
            key={restaurant.id}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title={restaurant.name}
            description={description}>
            <View style={styles.marker}>
              <Text>
                <Emoji name={COUNTRY2FLAG[country]} style={styles.emoji} />
              </Text>
            </View>
          </Marker>
        );
      })}
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
