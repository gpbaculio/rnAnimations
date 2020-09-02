import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';

interface ColumnViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const ColumnView = ({ children, style }: ColumnViewProps) => (
  <StyledView style={style}>{children}</StyledView>
);

export default ColumnView;

const StyledView = styled.View`
  flex-direction: column;
`;
