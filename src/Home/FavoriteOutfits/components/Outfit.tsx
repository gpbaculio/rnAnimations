import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BorderlessTap, RoundIcon } from '../../components';
import { iconCheck } from '../../constants';

const { width: wWidth } = Dimensions.get('window');

const containerWidth = wWidth * 0.5 - 45;
interface OutfitProps {
  outfit: {
    color: string;
    id: number;
    width: number;
    height: number;
    selected: boolean;
  };
}
const Outfit = ({ outfit }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  const onOutfitPress = () => {
    setSelected((prevSelected) => !prevSelected);
    outfit.selected = !outfit.selected;
  };
  return (
    <BorderlessTap onPress={onOutfitPress}>
      <Container
        height={outfit.height}
        width={outfit.width}
        backgroundColor={outfit.color}
      >
        {selected && (
          <RoundIcon
            {...{
              icon: {
                width: 10,
                height: 6,
                color: 'red',
              },
              container: {
                size: 30,
                color: '#fff',
              },
              source: iconCheck,
              onPress: () => true,
            }}
          />
        )}
      </Container>
    </BorderlessTap>
  );
};

export default Outfit;

interface ContainerProps {
  width: number;
  height: number;
  backgroundColor: string;
}

const Container = styled.View<ContainerProps>`
  ${(props) => `
    width: 100%;
    height: ${containerWidth * (props.height / props.width)}px;
    background-color: ${props.backgroundColor};
    margin-bottom: 15px;
    border-radius: 4px;
    align-items: flex-end;
    padding: 10px;
  `}
`;
