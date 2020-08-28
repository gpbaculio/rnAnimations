import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../../components';

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
      <Button
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
  justify-content: center;
  align-items: center;
  padding: 44px;
`;

const SubTitle = styled.Text`
  font-family: SFProTextSemiBold;
  font-size: 24px;
  line-height: 30px;
  color: #0c0d34;
  margin-bottom: 12px;
`;

const Description = styled.Text`
  font-family: SFProTextRegular;
  font-size: 16px;
  line-height: 24px;
  color: #0c0d34;
  text-align: center;
  margin-bottom: 40px;
`;
