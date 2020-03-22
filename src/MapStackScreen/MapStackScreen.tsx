import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';
import {AppContext} from '../AppContext';

const MapStack = createStackNavigator();

const MapStackScreen = () => {
  const {country} = useContext(AppContext);
  return (
    <MapStack.Navigator>
      <MapStack.Screen name={country} component={MapScreen} />
    </MapStack.Navigator>
  );
};

export default MapStackScreen;
