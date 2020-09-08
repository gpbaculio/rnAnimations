import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import {
  FormContainer as Container,
  FormTitle as Title,
  FormSubtitle as SubTitle,
  FormButton as Button,
} from '../components';

const ForgotPasswordSuccess = () => {
  const navigation = useNavigation();
  const onLoginAgainPress = () => {
    navigation.navigate('Login');
  };
  return (
    <Container>
      <IconContainer>
        <StyledIcon name="checkcircle" size={81} color="#f6f6f6" />
      </IconContainer>
      <Title>Your password was successfully changed</Title>
      <SubTitle>You may now login again</SubTitle>
      <Button
        label="Login again"
        onPress={onLoginAgainPress}
        variant="primary"
      />
    </Container>
  );
};

export default ForgotPasswordSuccess;

const IconContainer = styled.View`
  align-self: center;
  background-color: #2cb9b0;
  border-radius: 40px;
  width: 80px;
  overflow: hidden;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
const StyledIcon = styled(AntDesign)`
  width: 81px;
  overflow: hidden;
  height: 81px;
`;
