import React from 'react';

import { Container } from './benchmarksContainer.styles';
import { BenchmarkTile } from '../benchmarkTile';

export const BenchmarksContainer = () => {
  return (
    <Container>
      <BenchmarkTile title="Test 1" link="/1" />
      <BenchmarkTile title="Test 2" link="/2" />
      <BenchmarkTile title="Test 3" link="/3" />
      <BenchmarkTile title="Test 4" link="/4" />
    </Container>
  );
};
