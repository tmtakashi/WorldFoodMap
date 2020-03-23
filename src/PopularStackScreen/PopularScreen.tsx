import React, {useContext} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Button,
} from 'native-base';
import {AppContext} from '../AppContext';

const PopularScreen = () => {
  const {restaurants} = useContext(AppContext);
  return (
    <Container>
      <Content>
        <List>
          {restaurants
            .sort((a, b) => a.rating < b.rating)
            .map(restaurant => (
              <ListItem>
                <Body>
                  <Text>{restaurant.name}</Text>
                  <Text note numberOfLines={1}>
                    {'評価: ' + restaurant.rating}
                  </Text>
                </Body>
              </ListItem>
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default PopularScreen;
