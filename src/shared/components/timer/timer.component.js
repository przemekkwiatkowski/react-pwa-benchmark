import React, { PureComponent } from 'react';

import { PlayButton, DefaultButton, Time } from './timer.styles';

const firebase = require('firebase');
require('firebase/firestore');

export class Timer extends PureComponent {
  state = {
    counting: false,
    time: 0,
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timeInterval = setInterval(() => {
      this.setState(prevState => {
        return {
          time: prevState.time + 1,
        };
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timeInterval);
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      counting: false,
      time: 0,
    });
  };

  leftPad = (number, targetLength) => {
    let output = number + '';
    while (output.length < targetLength) {
      output = '0' + output;
    }
    return output;
  };

  displayTime = time => {
    this.minutes = Math.floor(time / 6000);
    this.seconds = Math.floor(time / 100);
    this.hundredths = time % 100;
    // return `${this.leftPad(this.minutes, 2)}:${this.leftPad(this.seconds, 2)}.${this.leftPad(this.hundredths, 3)}`;
    return time;
  };

  handlePlayButton = () => {
    this.state.counting ? this.stopTimer() : this.startTimer();

    this.setState(prevState => {
      return {
        counting: !prevState.counting,
      };
    });

    const db = firebase.firestore();
    db.collection('times')
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          console.log(doc.data());
        })
      );
  };

  handleResetButton = () => {
    this.resetTimer();
  };

  handleSaveButton = () => {
    this.stopTimer();
    const db = firebase.firestore();
    db.collection('times')
      .add({
        time: this.state.time,
      })
      .then(resp => {
        this.setState({
          counting: false,
          time: 0,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <PlayButton type={'button'} onClick={this.handlePlayButton}>
          {this.state.counting ? 'stop' : 'play'}
        </PlayButton>
        <Time>{this.displayTime(this.state.time)}</Time>
        <DefaultButton type={'button'} onClick={this.handleResetButton}>
          reset
        </DefaultButton>
        <DefaultButton type={'button'} onClick={this.handleSaveButton}>
          save in cloud
        </DefaultButton>
      </>
    );
  }
}
