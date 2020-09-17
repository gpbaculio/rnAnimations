import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated';

import styled from 'styled-components/native';

import { Container, RowView } from '../../components';
import { Header } from '../components';
import { iconMenu, iconShoppingBag } from '../constants';
import { Footer } from './components';
import { Outfit } from './components';

const defaultOutfits = [
  {
    id: 1,
    color: '#BFEAF5',
    width: 145,
    height: 145,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    width: 145,
    height: 200,
    selected: false,
  },
  {
    id: 3,
    color: '#FFE4D9',
    width: 145,
    height: 180,
    selected: false,
  },
  {
    id: 4,
    color: '#FFDDDD',
    width: 145,
    height: 180,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    width: 145,
    height: 150,
    selected: false,
  },
  {
    id: 6,
    color: '#F3F0EF',
    width: 145,
    height: 120,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    width: 145,
    height: 210,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    width: 145,
    height: 160,
    selected: false,
  },
];

const FavoriteOutfits = () => {
  const navigation = useNavigation();
  const [outfits, setOutfits] = useState(defaultOutfits);
  const listTransitionView = useRef<TransitioningView>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const onLeftNavPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const onFooterLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }: LayoutChangeEvent) => {
    setFooterHeight(height);
  };
  const onFooterBtnPress = () => {
    setOutfits(outfits.filter((o) => !o.selected));
    if (listTransitionView.current) {
      listTransitionView.current.animateNextTransition();
    }
  };
  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  );
  return (
    <Container>
      <Header
        leftIcon={{ width: 14, height: 14 }}
        rightIcon={{ width: 15, height: 17.5 }}
        color="#0C0D34"
        backgroundColor="#fafafa"
        title="OUTFIT IDEAS"
        leftSection={{
          leftNavImgSrc: iconMenu,
          onLeftNavPress,
        }}
        rightSection={{
          rightNavImgSrc: iconShoppingBag,
          onRightNavPress: () => true,
        }}
      />
      <StyledScrollView
        contentContainerStyle={{ paddingBottom: footerHeight }}
        footerHeight={footerHeight}
      >
        <Transitioning.View ref={listTransitionView} {...{ transition }}>
          <RowView>
            <LeftView>
              {outfits
                .filter((_, i) => i % 2 === 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} {...{ outfit }} />
                ))}
            </LeftView>
            <RightView>
              {outfits
                .filter((_, i) => i % 2 !== 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} {...{ outfit }} />
                ))}
            </RightView>
          </RowView>
        </Transitioning.View>
      </StyledScrollView>
      <Footer onFooterBtnPress={onFooterBtnPress} onLayout={onFooterLayout} />
    </Container>
  );
};

export default FavoriteOutfits;

interface StyledScrollViewProps {
  footerHeight: number;
}

const StyledScrollView = styled(ScrollView)<StyledScrollViewProps>`
  background-color: transparent;
  padding-horizontal: 15px;
`;

const RightView = styled.View`
  flex-direction: column;
  flex: 0.5;
`;

const LeftView = styled.View`
  margin-right: 15px;
  flex-direction: column;
  flex: 0.5;
`;
