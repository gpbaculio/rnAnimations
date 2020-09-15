import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Underlay } from './components';

import { lerp } from './helpers';

export interface GraphPoint {
  date: number;
  value: number;
  color: string;
  id: string;
}

interface GraphProps {
  data: GraphPoint[];
}

const { width } = Dimensions.get('window');

const ratio = width / 305;

const graphWidth = width - 45;
const graphHeight = 195 * ratio;

const Graph = ({ data }: GraphProps) => {
  const values = data.map((p) => p.value);
  const containerWidth = graphWidth - 25;
  const height = graphHeight - 25;
  const dates = data.map((p) => p.date);
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = containerWidth / data.length;
  return (
    <CanvasContainer>
      <Underlay {...{ dates, minY, maxY, step }} />
      <GraphContainer {...{ width: containerWidth, height }}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null;
          } else {
            return (
              <GraphYContainer
                height={lerp(0, height, point.value / maxY)}
                key={point.date}
                left={i * step}
                width={step}
              >
                <GraphY color={point.color} />
                <GraphYPoint color={point.color} />
              </GraphYContainer>
            );
          }
        })}
      </GraphContainer>
    </CanvasContainer>
  );
};

export default Graph;

const CanvasContainer = styled.View`
margin-top: 15px;
  width: ${graphWidth}px
  height: ${graphHeight}px 
`;

interface GraphContainerProps {
  width: number;
  height: number;
}

const GraphContainer = styled.View<GraphContainerProps>`
  ${(props) => ` 
    width: ${props.width}px;
    height: ${props.height}px; 
    margin-left: 25px;
  `}
`;

interface GraphYProps {
  color: string;
}

const GraphY = styled.View<GraphYProps>`
  ${(props) => `
    background-color: ${props.color}; 
  `}
  position: absolute;
  left: 15px;
  right: 15px;
  top: 0;
  bottom: 0;
  opacity: 0.1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const GraphYPoint = styled.View<GraphYProps>`
  ${(props) => `
    background-color: ${props.color}; 
  `}
  position: absolute;
  top: 0;
  left: 15px;
  right: 15px;
  height: 32px;
  opacity: 1;
  border-radius: 8px;
`;

interface GraphYContainerProps {
  left: number;
  width: number;
  height: number;
}

const GraphYContainer = styled.View<GraphYContainerProps>`
  ${(props) => `
    width: ${props.width}px;
    height: ${props.height}px;
    left: ${props.left}px;
  `}

  position: absolute;
  bottom: 0;
`;
