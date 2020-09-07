import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Container,
  MainContent,
  FormInput,
  FormErrorMessage,
  FormButton,
  FormContainer,
  FormTitle,
  FormSubtitle,
} from '../components';
import { topSectionSignUpImg } from '../constants';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string().when('password', {
    is: (val) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Password and Confirm Password must match')
      .required('Confirm Password is required'),
  }),
});

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (values: FormValues) => {
    console.log('submit values: ', values);
  };
  return (
    <Container>
      <MainContent
        leftRadius={false}
        source={topSectionSignUpImg}
        bottomLabel={'Already have an account?'}
        bottomNavLabel={'Login Here'}
        bottomNavToRoute="Login"
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
              <FormTitle>Create Account</FormTitle>
              <FormSubtitle>
                Let us know your email and your password
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
              <FormInput
                value={values.confirmPassword}
                icon="locked"
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={!!touched.confirmPassword}
                error={!!touched.confirmPassword && !!errors.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormErrorMessage error={errors.confirmPassword} />
              )}
              <FormButton
                label="Create your acount"
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

export default Signup;
