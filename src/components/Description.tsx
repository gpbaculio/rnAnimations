import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Description = styled.Text`
  font-family: SFProTextRegular;
  font-size: 16px;
  line-height: 24px;
  color: #0c0d34;
  text-align: center;
  margin-bottom: ${Platform.OS === 'ios' ? 40 : 20}px;
`;

export default Description;
