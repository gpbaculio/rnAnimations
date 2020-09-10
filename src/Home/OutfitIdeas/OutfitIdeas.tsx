import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Header } from '../components';
import { iconMenu, iconShoppingBag } from '../constants';
import { Container } from '../../components';

const OutfitIdeas = () => {
  return (
    <Container style={styles.container}>
      <Header
        color="#0C0D34"
        backgroundColor="#fafafa"
        title="OUTFIT IDEAS"
        leftSection={{
          leftNavImgSrc: iconMenu,
          onLeftNavPress: () => true,
        }}
        rightSection={{
          rightNavImgSrc: iconShoppingBag,
          onRightNavPress: () => true,
        }}
      />
      <Text>OutfitIdasd asdeas</Text>
    </Container>
  );
};

export default OutfitIdeas;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
  },
});
