import React, { useState } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { topSectionLogInImg, PRIMARY_COLOR } from '../constants';
import Typography from '../../components/Typography';
import {
  FormTitle,
  FormSubtitle,
  RowView,
  FormContainer,
  FormButton,
  MainContent,
  FormInput,
  FormErrorMessage,
  Container,
} from '../components';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(6, 'Password must have more than 6 characters '),
});

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const initialValues: FormValues = {
    email: '',
    password: '',
  };
  const onSubmit = (values: FormValues) => {
    console.log('submit values: ', values);
  };
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  const onForgotPaswordClick = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <Container>
      <MainContent
        leftRadius
        source={topSectionLogInImg}
        bottomLabel={"Don't have an account?"}
        bottomNavLabel={'Signup Here'}
        bottomNavToRoute="Signup"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => (
            <FormContainer>
              <FormTitle>Welcome back</FormTitle>
              <FormSubtitle>
                Use your credentials below and login to your account
              </FormSubtitle>
              <FormInput
                icon="email"
                placeholder="Your email address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={!!touched.email}
                error={!!touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <FormErrorMessage error={errors.email} />
              )}
              <FormInput
                icon="locked"
                value={values.password}
                placeholder="Your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={!!touched.password}
                error={!!touched.password && !!errors.password}
              />
              {touched.password && errors.password && (
                <FormErrorMessage error={errors.password} />
              )}
              <RememberMeSection>
                <RowView>
                  <TouchableWithoutFeedback onPress={toggleCheck}>
                    <RowView>
                      <AntDesign
                        name={isChecked ? 'checksquare' : 'checksquareo'}
                        size={20}
                        color={PRIMARY_COLOR}
                      />
                      <Typography style={styles.rememberMeText}>
                        Remember Me
                      </Typography>
                    </RowView>
                  </TouchableWithoutFeedback>
                </RowView>
                <TouchableWithoutFeedback
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  onPress={onForgotPaswordClick}
                >
                  <Typography color={PRIMARY_COLOR}>Forgot Password</Typography>
                </TouchableWithoutFeedback>
              </RememberMeSection>
              <FormButton
                label="Login to your acount"
                onPress={handleSubmit}
                variant="primary"
              />
            </FormContainer>
          )}
        </Formik>
      </MainContent>
    </Container>
  );
};

export default Login;

const RememberMeSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

interface StylesProps {
  rememberMeText: TextStyle;
}

const styles = StyleSheet.create<StylesProps>({
  rememberMeText: {
    marginLeft: 6,
  },
});
