import React, { ReactNode } from 'react';
import { TextStyle, StyleSheet } from 'react-native';

import Typography from '../../components/Typography';

interface FormSubtitleProps {
  children: ReactNode;
}

const FormSubtitle = ({ children }: FormSubtitleProps) => (
  <Typography style={styles.subTitle} color="rgba(12, 13, 52, 0.5)">
    {children}
  </Typography>
);

export default FormSubtitle;

interface StylesProps {
  subTitle: TextStyle;
}

const styles = StyleSheet.create<StylesProps>({
  subTitle: {
    paddingHorizontal: 25,
    textAlign: 'center',
    marginBottom: 18,
  },
});
