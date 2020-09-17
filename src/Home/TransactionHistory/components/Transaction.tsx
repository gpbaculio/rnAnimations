import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import { ColumnView, Typography } from '../../../components';
import { GraphPoint } from './Graph';

interface TransactionProps {
  transaction: GraphPoint;
}

const Transaction = ({
  transaction: { date, value, color, id },
}: TransactionProps) => (
  <Container>
    <ColumnView>
      <TransctionIdSection>
        <TransactionIdPoint color={color} />
        <TransactionId>{`#${id}`}</TransactionId>
      </TransctionIdSection>
      <TransactionTitle>{`$${value} - ${moment(date).format(
        'DD MMMM, YYYY',
      )}`}</TransactionTitle>
    </ColumnView>
    <TransactionBtn>
      <Typography fontSize={14} color="#111747">
        See more
      </Typography>
    </TransactionBtn>
  </Container>
);

export default Transaction;

const TransactionBtn = styled.TouchableOpacity`
  background-color: transparent;
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #111747;
`;

const TransactionTitle = styled.Text`
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #0c0d34;
  opacity: 0.5;
`;

const TransctionIdSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

const TransactionId = styled.Text`
  font-family: SFProTextSemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;
  color: #0c0d34;
`;

interface TransactionIdPointProps {
  color: string;
}

const TransactionIdPoint = styled.View<TransactionIdPointProps>`
  ${(props) => `
    background-color: ${props.color}
  `}
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const Container = styled.View`
  flex-direction: row;
  margin-vertical: 30px;
  justify-content: space-between;
  align-items: center;
`;
