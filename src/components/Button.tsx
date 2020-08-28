import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2cb9b0' : 'rgba(12, 13, 42, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0c0d34';
  return (
    <Container style={{ backgroundColor }} {...{ onPress }}>
      <Label style={{ color }}>{label}</Label>
    </Container>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;

const Container = styled(RectButton)`
  border-radius: 25px;
  height: 50px;
  width: 245px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-family: SFProTextRegular;
  font-size: 15px;
`;
