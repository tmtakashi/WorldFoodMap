import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';
import SelectCountryScreen from './SelectCountryScreen';
import {AppContext} from '../AppContext';

const MapStack = createStackNavigator();

const MapStackScreen = ({navigation}) => {
  const {country, region} = useContext(AppContext);
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapHome"
        component={MapScreen}
        options={{
          title: country,
          //   headerLeft: () => {
          //     return (
          //       <Text>
          //         {region.latitude.toPrecision(4) +
          //           '\n' +
          //           region.longitude.toPrecision(4)}
          //       </Text>
          //     );
          //   },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Select Country')}>
              <FontAwesome
                name="bars"
                size={24}
                style={styles.chooseCountryBtn}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MapStack.Screen
        name="Select Country"
        component={SelectCountryScreen}
        options={{
          title: '国を選択',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MapHome');
              }}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                style={styles.backToMapBtn}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </MapStack.Navigator>
  );
};

const styles = StyleSheet.create({
  chooseCountryBtn: {
    paddingRight: 20,
  },
  backToMapBtn: {
    paddingLeft: 20,
  },
});

export default MapStackScreen;
