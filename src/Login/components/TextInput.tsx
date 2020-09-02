import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { PRIMARY_COLOR } from '../../components/constants';

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => void;
}
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;
const TextInput = ({ placeholder, icon, validator }: TextInputProps) => {
  const [valid, setValid] = useState<InputState>(Pristine);
  return (
    <ContainerView>
      <Fontisto name={icon} size={32} color={PRIMARY_COLOR} />
      <RNTextInput underlineColorAndroid="transparent" />
    </ContainerView>
  );
};

export default TextInput;

const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
`;
