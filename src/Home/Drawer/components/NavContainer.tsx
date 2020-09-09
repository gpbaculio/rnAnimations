import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface NavIconProps {
  children: ReactNode;
  navLabel: string;
  backgroundColor: string;
}

const NavContainer = ({
  children,
  navLabel,
  backgroundColor,
}: NavIconProps) => (
  <Container>
    <IconContainer backgroundColor={backgroundColor}>{children}</IconContainer>
    <Label>{navLabel}</Label>
  </Container>
);

export default NavContainer;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

interface IconContainerProps {
  backgroundColor: string;
}

const IconContainer = styled.View<IconContainerProps>`
  ${(props) => `background-color: ${props.backgroundColor};`}
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  margin-left: 16px;
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0c0d34;
`;
