import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  MainContent,
  FormContainer,
  FormTitle,
  FormSubtitle,
  FormInput,
  FormErrorMessage,
  FormButton,
} from '../components';
import {
  topSectionForgotPasswordImg,
  topSectionForgotPasswordSuccessImg,
} from '../constants';
import ForgotPasswordSuccess from './ForgotPasswordSuccess';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
});

interface FormValues {
  email: string;
}

const ForgotPassword = () => {
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
  const initialValues: FormValues = {
    email: '',
  };
  const onSubmit = (values: FormValues) => {
    // ideally add loading indicator
    setForgotPasswordSuccess(true);
    console.log('ForgotPassword ', values);
  };
  if (forgotPasswordSuccess) {
    return (
      <Container>
        <MainContent leftRadius source={topSectionForgotPasswordSuccessImg}>
          <ForgotPasswordSuccess />
        </MainContent>
      </Container>
    );
  }
  return (
    <Container>
      <MainContent
        leftRadius
        noTopSectionRadius
        source={topSectionForgotPasswordImg}
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
              <FormTitle>Forgot Password?</FormTitle>
              <FormSubtitle>
                Enter the email address associated with your account
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
              <FormButton
                label="Reset Password"
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

export default ForgotPassword;
