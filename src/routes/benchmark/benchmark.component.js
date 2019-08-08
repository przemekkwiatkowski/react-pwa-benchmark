import React from 'react';
import PropTypes from 'prop-types';

import { H1, H2 } from '../../theme/typography';
import { StartButton } from '../../shared/components/startButton';
import { SaveButton } from '../../shared/components/saveButton';
import { AddSample } from '../../shared/components/addSample';
import { PageContainer, Header, NavigationContainer, Content } from '../../theme/global';
import { NavigationBackIcon, TestDescription } from './benchmark.styles';

const Benchmark = props => {
  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <PageContainer>
      <Header>
        <NavigationBackIcon onClick={handleClick} />
        <H1>Title of the test</H1>
        <H2>benchmark</H2>
      </Header>
      <NavigationContainer />
      <Content>
        <TestDescription />
        <StartButton />
        {props.isActive && props.startedAt && <AddSample />}
        {props.isActive && <SaveButton />}
      </Content>
    </PageContainer>
  );
};

Benchmark.propTypes = {
  startedAt: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Benchmark;
