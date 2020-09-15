import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LayoutChangeEvent, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Typography } from '../../components';
import { Header } from '../components';
import { iconBackDark, iconShare } from '../constants';
import { Footer, Graph } from './components';
import { GraphPoint } from './components/Graph/Graph';

const data: GraphPoint[] = [
  {
    date: new Date('2019-09-01').getTime(),
    value: 0,
    color: 'red',
    id: '245682',
  },
  {
    date: new Date('2019-10-01').getTime(),
    value: 0,
    color: 'red',
    id: '245692',
  },
  {
    date: new Date('2019-11-01').getTime(),
    value: 139.42,
    color: '#2CB9B0',
    id: '245671',
  },
  {
    date: new Date('2019-12-01').getTime(),
    value: 281.23,
    color: '#FE5E33',
    id: '245672',
  },
  {
    date: new Date('2020-01-01').getTime(),
    value: 0,
    color: 'red',
    id: '245675',
  },
  {
    date: new Date('2020-02-01').getTime(),
    value: 198.54,
    color: '#FFC641',
    id: '245673',
  },
  {
    date: new Date('2020-03-01').getTime(),
    value: 0,
    color: 'red',
    id: '245612',
  },
];
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
      <Main footerHeight={footerHeight}>
        <TopSection>
          <TopLeftSection>
            <TotalSpent fontSize={12} color="#0C0D34">
              TOTAL SPENT
            </TotalSpent>
            <TotalAmount fontSize={28} color="#0C0D34">
              $61919
            </TotalAmount>
          </TopLeftSection>
          <TopSectionBtn>
            <TopSectionBtnText>All Time</TopSectionBtnText>
          </TopSectionBtn>
        </TopSection>
        <ContentSection>
          <Graph data={data} />
        </ContentSection>
      </Main>
      <Footer onLayout={onFooterLayout} />
    </Container>
  );
};

export default TransactionHistory;

const ContentSection = styled.View`
  flex: 1;
`;

const TopSectionBtn = styled.TouchableOpacity`
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 25px;
  background-color: #fafafa;
`;

const TopSectionBtnText = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #2cb9b0;
`;

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
  background-color: #fff
  flex-direction: column;
  padding-horizontal: 20px;
`;

const TopSection = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 10px;
  justify-content: space-between;
`;

const TopLeftSection = styled.View`
  flex-direction: column;
`;

const TotalSpent = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.3;
`;

const TotalAmount = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  line-height: 33px;
`;
