import React, { useState } from 'react';
import styled from 'styled-components/native';

import BorderlessTap from './BorderlessTap';
import { ConditionalWrap } from '../../../../../components';

interface CategoryProps {
  category: {
    color: string;
    title: string;
    id: string;
  };
}

const Category = ({ category: { color, title } }: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  const onCirclePress = () => {
    setSelected((prevSelected) => !prevSelected);
  };
  return (
    <Container>
      <BorderlessTap onPress={onCirclePress}>
        <ConditionalWrap
          condition={!selected}
          wrap={(children) => (
            <CircleContainer color={color}>{children}</CircleContainer>
          )}
        >
          <Circle selected={!selected} color={color} />
        </ConditionalWrap>
        <StyledText>{title}</StyledText>
      </BorderlessTap>
    </Container>
  );
};

export default Category;

const StyledText = styled.Text`
  margin-top: 4px;
`;

interface CircleProps {
  color: string;
  selected?: boolean;
}

const Circle = styled.View<CircleProps>`
  ${(props) => `
    width: ${props.selected ? 50 : 60}px;
    height: ${props.selected ? 50 : 60}px;
    border-radius: ${props.selected ? 25 : 30}px; 
    background-color:  ${props.color}; 
  `}
`;

const CircleContainer = styled.View<CircleProps>`
  ${(props) => `
    border: solid ${props.color} 1.5px; 
  `}
  background-color: #fff
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  margin-horizontal: 8px;
  justify-content: center;
  text-align: center;
`;
