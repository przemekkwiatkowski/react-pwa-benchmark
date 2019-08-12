import React from 'react';

import { benchmarks } from '../../../content';
import { Container } from './benchmarksContainer.styles';
import { BenchmarkTile } from '../benchmarkTile';

export const BenchmarksContainer = () => {
  return (
    <Container>
      {benchmarks.map((benchmark, index) => {
        return <BenchmarkTile title={benchmark.name} link={benchmark.url} key={index} />;
      })}
    </Container>
  );
};
