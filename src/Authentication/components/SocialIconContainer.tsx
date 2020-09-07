import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface IconProps {
  onPress: () => void;
  children: ReactNode;
  last: boolean;
}

const SocialIconContainer = ({ onPress, children, last }: IconProps) => (
  <StyledBtn last={last} onPress={onPress}>
    {children}
  </StyledBtn>
);

export default SocialIconContainer;

interface StyledBtnProps {
  last: boolean;
}

const StyledBtn = styled(BorderlessButton)<StyledBtnProps>`
  ${(props) => css`
    margin-right: ${props.last ? 0 : 16}px;
  `}
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: center;
`;
