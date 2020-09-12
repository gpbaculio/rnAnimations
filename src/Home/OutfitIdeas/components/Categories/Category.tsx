import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface CategoryProps {
  category: {
    color: string;
    title: string;
    id: string;
  };
}

const Category = ({ category: { color, title } }: CategoryProps) => {
  const [state, setstate] = useState(false);
  return (
    <Container>
      <CircleContainer color={color}>
        <Circle color={color} />
      </CircleContainer>
      <Text>{title}</Text>
    </Container>
  );
};

export default Category;

interface CircleContainerProps {
  color: string;
}

const Circle = styled.View<CircleContainerProps>`
  ${(props) => `
    background-color:  ${props.color}; 
  `}
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const CircleContainer = styled.View<CircleContainerProps>`
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
`;
