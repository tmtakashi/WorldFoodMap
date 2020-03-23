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

const SelectCountryScreen = ({navigation}) => {
  const {country, setCountry} = useContext(AppContext);
  return (
    <Content>
      <List>
        {countryList.map(c => (
          <ListItem
            key={c}
            onPress={() => {
              console.log(c);
              setCountry(c);
              navigation.goBack();
            }}
            button
            selected={country === c}>
            <Left>
              <Text>{c}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        ))}
      </List>
    </Content>
  );
};

export default SelectCountryScreen;
