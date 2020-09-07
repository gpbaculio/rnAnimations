import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => (
  <Container>{children}</Container>
);

export default FormContainer;

const Container = styled(Platform.OS === 'ios' ? View : ScrollView)`
  flex-direction: column;
  background-color: #fff;
  padding-horizontal: 35px;
  border-radius: 75px;
`;
