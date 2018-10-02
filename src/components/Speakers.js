import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';

class Speakers extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Speakers' />
        <Text>Speakers!</Text>
      </View>
    );
  }
}

export default Speakers;
