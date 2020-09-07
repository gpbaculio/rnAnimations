import React from 'react';
import { StyleSheet } from 'react-native';

import Typography from '../../components/Typography';

interface FormErrorMessageProps {
  error: string;
}

const FormErrorMessage = ({ error }: FormErrorMessageProps) => (
  <Typography style={styles.errorMessage} color="red">
    {error}
  </Typography>
);

export default FormErrorMessage;

const styles = StyleSheet.create({
  errorMessage: {
    textAlign: 'center',
    marginTop: 4,
  },
});
