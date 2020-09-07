import React, { ReactNode } from 'react';
import { StyleSheet, TextStyle } from 'react-native';

import Typography from '../../components/Typography';

interface FormTitleProp {
  children: ReactNode;
}

const FormTitle = ({ children }: FormTitleProp) => (
  <Typography
    style={styles.title}
    fontSize={28}
    fontFamily="SFProTextSemiBold"
    color="#0C0D34"
  >
    {children}
  </Typography>
);

export default FormTitle;

interface StylesProps {
  title: TextStyle;
}

const styles = StyleSheet.create<StylesProps>({
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 33,
    textAlign: 'center',
    marginBottom: 6,
  },
});
