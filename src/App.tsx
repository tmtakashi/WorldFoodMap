import 'react-native-gesture-handler';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Geolocation from '@react-native-community/geolocation';
import {Region} from 'react-native-maps';
import Config from 'react-native-config';
import MapStackScreen from './MapStackScreen/MapStackScreen';
import PopularStackScreen from './PopularStackScreen/PopularStackScreen';
import {AppContext} from './AppContext';

const Tab = createBottomTabNavigator();

const App = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const [restaurants, setRestaurants] = useState<{}[]>([]);
  const [country, setCountry] = useState<string>('タイ');
  const getRestaurants = async (
    centerPosition: Region,
    targetCountry: String,
  ) => {
    let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const params = {
      key: Config.GOOGLE_MAPS_API_KEY,
      location: centerPosition.latitude + ',' + centerPosition.longitude,
      type: 'food',
      keyword: `${targetCountry}料理`,
      radius: 1500,
    };
    const queryString = Object.keys(params)
      .map(key => key + '=' + params[key])
      .join('&');
    url += queryString;
    await fetch(url)
      .then(response => response.json())
      .then((json: {}) => {
        setRestaurants(json.results);
      });
  };

  useLayoutEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const newRegion = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      };
      setRegion(newRegion);
      getRestaurants(newRegion, country);
    });
  }, [country]);

  useLayoutEffect(() => {
    getRestaurants(region, country);
  }, [country, region]);

  useEffect(() => {
    setRestaurants([]);
  }, [country]);

  return (
    <AppContext.Provider
      value={{
        region,
        setRegion,
        restaurants,
        setRestaurants,
        country,
        setCountry,
      }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-o';
              } else if (route.name === 'Popular') {
                iconName = focused ? 'star' : 'star-o';
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'skyblue',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Map" component={MapStackScreen} />
          <Tab.Screen name="Popular" component={PopularStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
