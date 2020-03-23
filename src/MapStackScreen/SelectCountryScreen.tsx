import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '../AppContext';

const countryList = ['タイ', 'インド', 'イタリア', 'フランス', 'ドイツ'];

const SelectCountryScreen = () => {
  const {country} = useContext(AppContext);
  return (
    <Content>
      <List>
        {countryList.map(c => (
          <TouchableOpacity key={c}>
            <ListItem selected={country === c}>
              <Left>
                <Text>{c}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </TouchableOpacity>
        ))}
      </List>
    </Content>
  );
};

export default SelectCountryScreen;
