import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../components';
import { Header } from '../components';
import { iconBackDark, iconShare } from '../constants';
import { Footer } from './components';
import styled from 'styled-components/native';
import { LayoutChangeEvent, Platform } from 'react-native';

const TransactionHistory = () => {
  const navigation = useNavigation();
  const onLeftNavPress = () => {
    navigation.goBack();
  };
  const [footerHeight, setFooterHeight] = useState(0);
  const onFooterLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }: LayoutChangeEvent) => {
    setFooterHeight(height);
  };
  return (
    <Container>
      <Header
        leftIcon={{ width: 16, height: 10 }}
        rightIcon={{ width: 16, height: 16 }}
        color="#0C0D34"
        backgroundColor="#ffff"
        title="TRANSACTION HISTORY"
        leftSection={{
          leftNavImgSrc: iconBackDark,
          onLeftNavPress,
        }}
        rightSection={{
          rightNavImgSrc: iconShare,
          onRightNavPress: () => true,
        }}
      />
      <Main footerHeight={footerHeight} />
      <Footer onLayout={onFooterLayout} />
    </Container>
  );
};

export default TransactionHistory;

interface MainProps {
  footerHeight: number;
}

const Main = styled.View<MainProps>`
  ${(props) => ` 
  margin-bottom: ${
    Platform.OS === 'ios' ? props.footerHeight - 76 : props.footerHeight - 106
  }px;
`}
  flex: 1
  background-color: green
`;
