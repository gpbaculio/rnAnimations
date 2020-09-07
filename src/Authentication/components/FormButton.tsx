import React, { ReactNode } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label: string;
  onPress: () => void;
  backgroundColors: {
    primary: string;
    default: string;
    transparent: string;
  };
  children?: ReactNode;
}

const Button = ({
  label,
  variant,
  onPress,
  backgroundColors,
  children,
}: ButtonProps) => {
  const backgroundColor = backgroundColors[variant];
  const color = variant === 'primary' ? 'white' : '#0c0d34';
  return (
    <Container style={{ backgroundColor }} {...{ onPress }}>
      {children && children}
      <Label style={{ color }}>{label}</Label>
    </Container>
  );
};

Button.defaultProps = {
  variant: 'default',
  backgroundColors: {
    primary: '#2cb9b0',
    default: 'rgba(12, 13, 42, 0.05)',
    transparent: 'transparent',
  },
};

export default Button;

const Container = styled(RectButton)`
  border-radius: 25px;
  height: 50px;
  width: 245px;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  align-self: center;
`;

const Label = styled.Text`
  font-family: SFProTextRegular;
  font-size: 15px;
`;
