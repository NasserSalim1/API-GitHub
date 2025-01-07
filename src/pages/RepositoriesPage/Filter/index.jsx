import React from 'react';

import { Container, Selector, Cleaner } from './styles';

function Filter() {
  const langs = [
    {name: 'JavaScript', count: 5, color: '#f1c40f'},
    {name: 'C', count: 2, color: '#95a5a6'},
    {name: 'Python', count: 3, color: '#3498db'},
  ]; 

  const selectors = langs.map(({name, count, color}) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return(
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}

export default Filter;
