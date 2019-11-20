import React, { memo, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useKeepAwake } from 'expo-keep-awake';

import {
  Container,
  StopButton,
  SaveResultButton,
  Number,
  InfoBox,
  Clicker,
  Cords,
  ConnectionStatus,
} from './responsivenessTest.styles';
import { ControlButton } from '../controlButton';
import messages from './resposivenessTest.messages';

const MAX_GETS = 10;

export const ResponsivenessTest = memo(({ stop, saveResult, addSample }) => {
  const clickerRef = useRef(null);
  const cordsRef = useRef(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [time, setTime] = useState(0);
  const [disabled, isDisabled] = useState(false);
  const [numberOfSuccessGets, setNumberOfSuccessGets] = useState(0);
  const [allGets, setAllGets] = useState(0);
  const [connection, setConnection] = useState(false);
  let startTime = 0;
  let endTime = 0;
  let interval = null;
  let id = null;
  useKeepAwake();

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
  };

  const success = position => {
    const coords = position.coords;
    const { latitude, longitude, accuracy } = coords;
    endTime = performance.now();
    const timeConsumed = (endTime - startTime) / 1000;
    setTime(timeConsumed);
    setLatitude(latitude);
    setLongitude(longitude);
    setAccuracy(accuracy);
    isDisabled(false);
    if (cordsRef.current) {
      cordsRef.current.classList.remove('disabled');
    }
    addSample(`time: ${timeConsumed} accuracy: ${accuracy} online: ${connection}`);
    setNumberOfSuccessGets(numberOfSuccessGets => numberOfSuccessGets + 1);
    id = navigator.geolocation.clearWatch(id);
  };

  const error = error => {
    alert(error);
  };

  const getPosition = () => (id = navigator.geolocation.watchPosition(success, error, options));

  const handleOnClick = () => {
    isDisabled(true);
    startTime = performance.now();
    if (clickerRef.current) {
      cordsRef.current.classList.add('disabled');
      clickerRef.current.classList.add('active');
      setTimeout(() => {
        clickerRef.current.classList.remove('active');
      }, 1000);
    }
    setAllGets(allGets => allGets + 1);
    getPosition();
  };

  const handleConnectionState = () => setConnection(navigator.onLine);

  useEffect(() => {
    setConnection(navigator.onLine);
    window.addEventListener('online', handleConnectionState);
    window.addEventListener('offline', handleConnectionState);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleConnectionState);
      window.removeEventListener('offline', handleConnectionState);
    };
  }, []);

  const handleStopButton = () => stop();
  const handleSaveResult = () => saveResult();

  return (
    <Container>
      <Clicker ref={clickerRef} onClick={handleOnClick} disabled={disabled}>
        Get
        <br />
        position
      </Clicker>
      <Cords ref={cordsRef}>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Accuracy: {accuracy}</p>
        <p>Time: {time}</p>
      </Cords>
      <ConnectionStatus connection={connection}>{connection ? 'online' : 'offline'}</ConnectionStatus>
      <InfoBox>
        <StopButton>
          <ControlButton title={messages.stopBenchmark} primary onClick={handleStopButton} />
        </StopButton>
        <Number>{allGets}</Number>
        <Number>{numberOfSuccessGets}</Number>
        <SaveResultButton>
          <ControlButton title={messages.saveResult} primary onClick={handleSaveResult} />
        </SaveResultButton>
      </InfoBox>
    </Container>
  );
});

ResponsivenessTest.propTypes = {
  stop: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  addSample: PropTypes.func.isRequired,
};
