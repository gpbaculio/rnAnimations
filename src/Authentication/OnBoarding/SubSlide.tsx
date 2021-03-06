import React from 'react';
import styled from 'styled-components/native';
import { FormButton, SubTitle, Description } from '../components';

interface SubSlideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subTitle, description, last, onPress }: SubSlideProps) => {
  return (
    <Container>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <FormButton
        onPress={onPress}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </Container>
  );
};

export default SubSlide;

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: 24px;
`;
