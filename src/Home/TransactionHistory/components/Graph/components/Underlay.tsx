import React from 'react';
import styled from 'styled-components/native';

import { lerp } from '../helpers';

interface UnderlayProps {
  dates: number[];
  maxY: number;
  minY: number;
  step: number;
}

const dateFormatter = Intl.DateTimeFormat('en', { month: 'short' });

const ROW_HEIGHT = 16;

const Underlay = ({ dates, maxY, minY, step }: UnderlayProps) => {
  return (
    <Container>
      <LeftSection>
        {[1, 0.66, 0.33, 0].map((i) => {
          const topDistance =
            i === 0 ? ROW_HEIGHT / 2 : i === 1 ? -ROW_HEIGHT / 2 : 0;
          return (
            <GraphBarYSection
              key={i}
              topDistance={topDistance}
              rowHeight={ROW_HEIGHT}
            >
              <GraphCountContainer width={25}>
                <GraphCount>{Math.round(lerp(minY, maxY, i))}</GraphCount>
              </GraphCountContainer>

              <GrapBarYhLine />
            </GraphBarYSection>
          );
        })}
      </LeftSection>
      <BottomSection>
        {dates.map((d, i) => (
          <MonthContainer key={i} width={step}>
            <Month>{dateFormatter.format(new Date(d))}</Month>
          </MonthContainer>
        ))}
      </BottomSection>
    </Container>
  );
};

export default Underlay;

const Month = styled.Text`
  color: #0c0d34;
  opacity: 0.3;
`;
interface GraphBarYSectionProps {
  topDistance: number;
  rowHeight: number;
}

const GraphBarYSection = styled.View<GraphBarYSectionProps>`
  flex-direction: row;
  align-items: center;
  text-align: right;
  ${(props) => `
    height: ${props.rowHeight}px
    top: ${props.topDistance}px
  `}
`;

interface ContainerProps {
  width: number;
}

const GraphCountContainer = styled.View<ContainerProps>`
  ${(props) => `width: ${props.width}px;`}
`;

const GraphCount = styled.Text`
  text-align: right;
  color: #0c0d34;
  opacity: 0.3;
`;

const GrapBarYhLine = styled.View`
  width: 100%;
  flex: 1;
  height: 1px
  background-color: #E9EBF1;
  opacity: 0.5;
  margin-left: 5px
`;

const MonthContainer = styled.View<ContainerProps>`
  ${(props) => `width: ${props.width}px`}
  align-items: center;
`;

const LeftSection = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const BottomSection = styled.View`
  flex-direction: row;
  margin-left: 25px;
  padding-top: 8px;
`;

const Container = styled.View`
  position: absolute;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
