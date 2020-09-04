import React from 'react';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import {
  PRIMARY_COLOR,
  INACTIVE_BORDER_COLOR,
} from '../../components/constants';
import ColumnView from '../../components/ColumnView';
import { StyleSheet } from 'react-native';

interface TextInputProps {
  placeholder: string;
  icon: string;
  value: string;
  validator?: (input: string) => void;
  onChangeText: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  error: boolean;
  touched: boolean;
}

const FormInput = ({
  placeholder,
  icon,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
}: TextInputProps) => {
  // const [valid, setValid] = useState<InputState>(Pristine);
  const color = !touched
    ? INACTIVE_BORDER_COLOR
    : error
    ? 'red'
    : PRIMARY_COLOR;

  return (
    <ColumnView style={styles.container}>
      <ContainerView color={color}>
        <Fontisto name={icon} size={20} color={color} />
        <StyledTextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          underlineColorAndroid="transparent"
        />
        {touched && (
          <StateIconIndicator
            name={error ? 'closecircle' : 'checkcircle'}
            size={20}
            color={color}
          />
        )}
      </ContainerView>
    </ColumnView>
  );
};

export default FormInput;
const StateIconIndicator = styled(AntDesign)`
  align-self: flex-end;
`;
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

interface ContainerViewProps {
  color: string;
}

const ContainerView = styled.View<ContainerViewProps>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  padding-vertical: 9px;
  ${(props) => `
    border: solid ${props.color} 1px;
  `}
`;

const StyledTextInput = styled.TextInput`
  margin-horizontal: 12px;
  flex: 1;
`;
