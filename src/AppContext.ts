import React from 'react';
import {Region} from 'react-native-maps';

type IState = {
  region: Region | undefined;
  setRegion: (region: Region) => void;
};

export const AppContext = React.createContext<IState>({
  region: undefined,
  setRegion: () => {},
});
