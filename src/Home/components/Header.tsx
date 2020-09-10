import React from 'react';
import { Platform, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

import RoundIcon from './RoundIcon';

interface HeaderProps {
  leftSection: {
    leftNavImgSrc: ImageSourcePropType;
    onLeftNavPress: () => void;
  };
  rightSection: {
    rightNavImgSrc: ImageSourcePropType;
    onRightNavPress: () => void;
  };
  title: string;
}

const Header = ({
  leftSection: { leftNavImgSrc, onLeftNavPress },
  rightSection: { rightNavImgSrc, onRightNavPress },
  title,
}: HeaderProps) => (
  <TopSectionNav>
    <RoundIcon
      {...{
        icon: {
          width: 14,
          height: 14,
          color: '#fff',
        },
        container: {
          size: 44,
          color: '#111747',
        },
        source: leftNavImgSrc,
        onPress: onLeftNavPress,
      }}
    />
    <NavTitle>{title}</NavTitle>
    <RoundIcon
      {...{
        icon: {
          width: 15,
          height: 17.5,
          color: '#fff',
        },
        container: {
          size: 44,
          color: '#111747',
        },
        source: rightNavImgSrc,
        onPress: onRightNavPress,
      }}
    />
  </TopSectionNav>
);

export default Header;

const NavTitle = styled.Text`
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #fff;
`;

const TopSectionNav = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 35 : 15}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
