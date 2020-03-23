import React from 'react';
import {Region} from 'react-native-maps';

type IState = {
  region: Region;
  setRegion: (region: Region) => void;
  restaurants: {}[];
  setRestaurants: (restaurants: {}[]) => void;
  country: string;
  setCountry: (country: string) => void;
};

export const AppContext = React.createContext<IState>({
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  },
  setRegion: () => {},
  restaurants: [],
  setRestaurants: () => {},
  country: '',
  setCountry: () => {},
});
