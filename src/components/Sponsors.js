import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Header from './common/Header';
import Confetti from 'react-native-confetti';

class Sponsors extends Component {
  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Sponsors' />
        <ImageBackground
          style={styles.bgImage}
          source={require('../../assets/img/bg.png')}
        >
          <View style={{ flex: 1 }}>
            <Confetti
              ref={(node) => this._confettiView = node}
              duration={3000}
              timeout={10}
              confettiCount={300}
              untilStopped={true}
            />
          </View>
          <Text>Sponsors!</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Sponsors;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
})