import React, { useState } from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { topSectionImg, PRIMARY_COLOR } from '../components/constants';
import MainContent from './components/MainContent';
import Typography from '../components/Typography';
import ColumnView from '../components/ColumnView';
import FormInput from './components/FormInput';
import FormErrorMessage from './components/FormErrorMessage';
import { Button } from '../components';
import RowView from '../components/RowView';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(4, 'Password must have more than 4 characters '),
});

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onSubmit = (values: FormValues) => {
    console.log('submit values: ', values);
  };
  const initialValues: FormValues = {
    email: '',
    password: '',
  };
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  const onForgotPaswordClick = () => {
    console.log('forgot password!');
  };
  return (
    <Container>
      <MainContent source={topSectionImg}>
        <ColumnView style={styles.container}>
          <Typography
            style={styles.title}
            fontSize={28}
            fontFamily="SFProTextSemiBold"
            color="#0C0D34"
          >
            Welcome back
          </Typography>
          <Typography style={styles.subTitle} color="rgba(12, 13, 52, 0.5)">
            Use your credentials below and login to your account
          </Typography>
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
              <>
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
                  value={values.password}
                  icon="locked"
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
                  <RememberMeContainer>
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
                  </RememberMeContainer>
                  <TouchableWithoutFeedback
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    onPress={onForgotPaswordClick}
                  >
                    <Typography color={PRIMARY_COLOR}>
                      Forgot Password
                    </Typography>
                  </TouchableWithoutFeedback>
                </RememberMeSection>
                <Button
                  label="Login to your acount"
                  onPress={handleSubmit}
                  variant="primary"
                />
              </>
            )}
          </Formik>
        </ColumnView>
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

const RememberMeContainer = styled.View`
  flex-direction: row;
`;

const Container = styled.View`
  flex: 1;
`;

interface StylesProps {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  rememberMeText: TextStyle;
}

const styles = StyleSheet.create<StylesProps>({
  container: {
    paddingHorizontal: 35,
  },
  rememberMeText: {
    marginLeft: 6,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 33,
    textAlign: 'center',
    marginBottom: 6,
  },
  subTitle: {
    paddingHorizontal: 25,
    textAlign: 'center',
    marginBottom: 18,
  },
});
