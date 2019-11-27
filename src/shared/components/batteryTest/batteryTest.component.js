import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useKeepAwake } from 'expo-keep-awake';

import messages from './batteryTest.messages';
import { Container, StopButton, SaveResultButton, Video, InfoBox } from './batteryTest.styles';
import { ControlButton } from '../controlButton';
import video from '../../../videos/battery-test-video.mp4';

const BATTERY_START_LEVEL = 99;
const BATTERY_END_LEVEL = 49;

export const BatteryTest = memo(({ stop, saveResult, addSample }) => {
  const [isCharging, setIsCharging] = useState(false);
  const [batteryStatus, setBatteryStatus] = useState(0);
  let deviceBattery = null;
  useKeepAwake();

  const getBatteryPercentLevel = value => Math.trunc(value * 100);

  const handleLevelChange = () => {
    setBatteryStatus(getBatteryPercentLevel(deviceBattery.level));
  };

  const handleChargingChange = () => setIsCharging(deviceBattery.charging);

  const requestBattery = async () => {
    try {
      deviceBattery = await navigator.getBattery();
      setIsCharging(deviceBattery.charging);
      setBatteryStatus(getBatteryPercentLevel(deviceBattery.level));
      deviceBattery.addEventListener('levelchange', handleLevelChange);
      deviceBattery.addEventListener('chargingchange', handleChargingChange);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    requestBattery();

    return () => {
      if (deviceBattery) {
        deviceBattery.removeEventListener('chargingchange', handleChargingChange);
        deviceBattery.removeEventListener('levelchange', handleLevelChange);
      }
    };
  }, []);

  useEffect(() => {
    if (batteryStatus === BATTERY_START_LEVEL) {
      addSample(`start, ${BATTERY_START_LEVEL}%`);
    } else if (batteryStatus === BATTERY_END_LEVEL) {
      addSample(`end, ${BATTERY_START_LEVEL}%`);
      saveResult();
    } else if (batteryStatus < BATTERY_START_LEVEL && batteryStatus > BATTERY_END_LEVEL) {
      addSample(batteryStatus);
    }
  }, [batteryStatus]);

  const handleStopButton = () => stop();
  const handleSaveResult = () => saveResult();

  return (
    <Container>
      <StopButton>
        <ControlButton title={messages.stopBenchmark} primary onClick={handleStopButton} />
      </StopButton>
      <SaveResultButton>
        <ControlButton title={messages.saveResult} primary onClick={handleSaveResult} />
      </SaveResultButton>
      <Video loop autoPlay muted src={video} />
      <InfoBox>
        <p>charging: {isCharging ? 'true' : 'false'}</p>
        <p>battery level: {batteryStatus}%</p>
      </InfoBox>
    </Container>
  );
});

BatteryTest.propTypes = {
  stop: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired,
  addSample: PropTypes.func.isRequired,
};
