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
  color: string;
  backgroundColor: string;
  leftIcon: {
    width: number;
    height: number;
  };
  rightIcon: {
    width: number;
    height: number;
  };
}

const Header = ({
  leftSection: { leftNavImgSrc, onLeftNavPress },
  rightSection: { rightNavImgSrc, onRightNavPress },
  title,
  color,
  backgroundColor,
  leftIcon,
  rightIcon,
}: HeaderProps) => (
  <TopSectionNav>
    <RoundIcon
      {...{
        icon: {
          // width: 14,
          // height: 14,
          ...leftIcon,
          color,
        },
        container: {
          size: 44,
          color: backgroundColor,
        },
        source: leftNavImgSrc,
        onPress: onLeftNavPress,
      }}
    />
    <NavTitle color={color}>{title}</NavTitle>
    <RoundIcon
      {...{
        icon: {
          // width: 15,
          // height: 17.5,
          ...rightIcon,
          color,
        },
        container: {
          size: 44,
          color: backgroundColor,
        },
        source: rightNavImgSrc,
        onPress: onRightNavPress,
      }}
    />
  </TopSectionNav>
);

export default Header;

interface NavTitleProps {
  color: string;
}

const NavTitle = styled.Text<NavTitleProps>`
  ${(props) => `color: ${props.color}`}
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.5px;
`;

const TopSectionNav = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 35 : 5}px;
  margin-bottom: ${Platform.OS === 'ios' ? 0 : 5}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
`;
