import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

import Category from './Category';

const categories = [
  {
    id: 'newIn',
    title: 'New In',
    color: '#FFDDDD',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activeWear',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    color: '#FFE8E9',
  },
];

const Categories = () => {
  return (
    <Container>
      <ScrollView horizontal>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Categories;

const Container = styled.View`
  margin-top: 8px;
  margin-left: 8px;
`;
