import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';

class Sponsors extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Sponsors' />
        <Text>Sponsors!</Text>
      </View>
    );
  }
}

export default Sponsors;
