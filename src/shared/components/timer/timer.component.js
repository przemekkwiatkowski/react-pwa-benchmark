import React, { PureComponent } from 'react';
import moment from 'moment';
import firebase from 'firebase';

import { StartButton, SaveButton, Time, HistoryContainer } from './timer.styles';

require('firebase/firestore');

export class Timer extends PureComponent {
  state = {
    counting: false,
    time: 0,
    databaseTimes: [],
  };

  componentDidMount() {
    this.db = firebase.firestore();
    const times = [];
    this.db
      .collection('times')
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          times.push(doc.data());
        });
        this.setState({ databaseTimes: [...times] });
      });
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    const referenceTime = moment.now();
    this.timeInterval = setInterval(() => {
      this.setState({ time: moment.now() - referenceTime });
    });
  };

  stopTimer = () => clearInterval(this.timeInterval);

  leftPad = (number, targetLength) => {
    let output = number + '';
    while (output.length < targetLength) {
      output = '0' + output;
    }
    return output;
  };

  displayTime = time => {
    this.minutes = Math.floor(time / 60000);
    this.seconds = Math.floor((time % 60000) / 1000);
    this.milliseconds = time % 1000;
    return `${this.leftPad(this.minutes, 2)}:${this.leftPad(this.seconds, 2)}.${this.leftPad(this.milliseconds, 3)}`;
  };

  handleStartButton = () => {
    this.state.counting ? this.stopTimer() : this.startTimer();

    this.setState(prevState => {
      return {
        counting: !prevState.counting,
      };
    });
  };

  handleSaveButton = () => {
    this.stopTimer();
    const date = moment.now();
    this.db
      .collection('times')
      .add({
        time: this.state.time,
        date: date,
      })
      .then(resp => {
        this.setState(prevState => {
          return {
            counting: false,
            time: 0,
            databaseTimes: [
              ...prevState.databaseTimes,
              {
                time: prevState.time,
                date: date,
              },
            ],
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <StartButton type={'button'} onClick={this.handleStartButton}>
          {this.state.counting ? 'stop' : 'start'}
        </StartButton>
        <Time>{this.displayTime(this.state.time)}</Time>
        <SaveButton type={'button'} onClick={this.handleSaveButton}>
          save in cloud
        </SaveButton>
        <HistoryContainer>
          {this.state.databaseTimes
            .sort((a, b) => a.date - b.date)
            .map((el, index) => {
              return (
                <li key={index}>
                  <span>{index}</span>
                  <span>{this.displayTime(el.time)}</span>
                  <span>{moment(el.date).format('DD.MM.YYYY HH:mm')}</span>
                </li>
              );
            })}
        </HistoryContainer>
      </>
    );
  }
}
