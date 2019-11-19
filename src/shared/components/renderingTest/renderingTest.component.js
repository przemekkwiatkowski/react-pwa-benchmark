import React, { memo, useState, useEffect, useRef } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import PropTypes from 'prop-types';

import { Container, StopButton, SaveResultButton, InfoBox, Number, RenderContainer, Row } from './renderingTest.styles';
import { ControlButton } from '../controlButton';
import messages from './renderingTest.messages';
import Image from '../../../images/rendering-test-image.jpeg';

const ELEMENTS_MAX_NUMBER = 10000;
const ELEMENTS_STEP_NUMBER = 500;
const ELEMENTS_ROW_NUMBER = 5;

export const RenderingTest = memo(({ stop, saveResult, addSample }) => {
  const [elementsAmount, setElementsAmount] = useState(0);
  let interval = null;
  const scrollContainer = useRef(null);
  useKeepAwake();

  const handleStopButton = () => stop();
  const handleSaveResult = () => saveResult();

  const handleOnClick = e => e.preventDefault();

  const renderRow = number => {
    return (
      <Row key={number}>
        <p>{number + 1}</p>
        <a href="/" onClick={handleOnClick}>
          Link
        </a>
        <button type="button">Button</button>
        <img src={Image} />
        <input type="text" placeholder="Input" />
      </Row>
    );
  };

  useEffect(() => {
    interval = setInterval(() => {
      setElementsAmount(elementsAmount => elementsAmount + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (elementsAmount === 0) {
      addSample('start');
    }

    if (scrollContainer) {
      const { current } = scrollContainer;
      current.scrollTop = current.scrollHeight - current.clientHeight;
    }

    const multipliedElements = elementsAmount * ELEMENTS_ROW_NUMBER;

    if (multipliedElements && multipliedElements % ELEMENTS_STEP_NUMBER === 0) {
      addSample(String(multipliedElements));
    }

    if (multipliedElements === ELEMENTS_MAX_NUMBER) {
      saveResult();
    }
  }, [elementsAmount]);

  const renderRows = number => [...Array(number)].map((e, i) => renderRow(i));

  return (
    <Container>
      <RenderContainer ref={scrollContainer}>{renderRows(elementsAmount)}</RenderContainer>
      <InfoBox>
        <StopButton>
          <ControlButton title={messages.stopBenchmark} primary onClick={handleStopButton} />
        </StopButton>
        <Number>{elementsAmount * ELEMENTS_ROW_NUMBER}</Number>
        <SaveResultButton>
          <ControlButton title={messages.saveResult} primary onClick={handleSaveResult} />
        </SaveResultButton>
      </InfoBox>
    </Container>
  );
});

RenderingTest.propTypes = {
  stop: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  addSample: PropTypes.func.isRequired,
};
