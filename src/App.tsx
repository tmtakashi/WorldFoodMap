import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Geolocation from '@react-native-community/geolocation';
import {Region} from 'react-native-maps';
import MapScreen from './MapScreen/MapScreen';
import PopularScreen from './PopularScreen/PopularScreen';
import {AppContext} from './AppContext';

const Tab = createBottomTabNavigator();

const App = () => {
  const [region, setRegion] = useState<Region | undefined>(undefined);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    });
  }, []);

  return (
    <AppContext.Provider value={{region, setRegion}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="地図" component={MapScreen} />
          <Tab.Screen name="人気のお店" component={PopularScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
