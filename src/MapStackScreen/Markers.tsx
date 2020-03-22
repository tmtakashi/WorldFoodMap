import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import {AppContext} from '../AppContext';

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
          <View style={{borderWidth: 2, padding: 10}}>
            <Text>{country}</Text>
          </View>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
