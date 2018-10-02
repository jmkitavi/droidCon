import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './common/Header';

class Schedule extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
				<Header title='Schedule' />
        <Text>Schedule!</Text>
      </View>
    );
  }
}

export default Schedule;
