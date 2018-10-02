import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './common/Header';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Home' />
        <Text>Home!</Text>
      </View>
    );
  }
}

export default Home;
