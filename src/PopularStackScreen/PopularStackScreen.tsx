import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import PopularScreen from './PopularScreen';
import {AppContext} from '../AppContext';

const PopularStack = createStackNavigator();

const PopularStackScreen = ({navigation}) => {
  const {country, region} = useContext(AppContext);
  return (
    <PopularStack.Navigator>
      <PopularStack.Screen
        name="PopularHome"
        component={PopularScreen}
        options={{
          title: `周辺の${country}料理 評価順`,
        }}
      />
    </PopularStack.Navigator>
  );
};

const styles = StyleSheet.create({
  chooseCountryBtn: {
    paddingRight: 20,
  },
  backToPopularBtn: {
    paddingLeft: 20,
  },
});

export default PopularStackScreen;
