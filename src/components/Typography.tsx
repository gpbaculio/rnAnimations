import styled, { css } from 'styled-components/native';

interface TypographyProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

const Typography = styled.Text<TypographyProps>`
  ${(props) => css`
    font-family: ${props.fontFamily || 'SFProTextRegular'};
    font-size: ${props.fontSize || 16}px;
    color: ${props.color || '#000'};
  `}
`;

export default Typography;
