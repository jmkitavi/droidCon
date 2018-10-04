import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './components/Home';
import Schedule from './components/schedule/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Header from './components/common/Header';

const TabNavigator =  createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={26} name={'home'} style={{ color: tintColor }} />
      )
    }
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      tabBarLabel: 'Schedule',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={26} name={'calendar-clock'} style={{ color: tintColor }} />
      )
    }
  },
  Speakers: {
    screen: Speakers,
    navigationOptions: {
      tabBarLabel: 'Speakers',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={26} name={'account-star'} style={{ color: tintColor }} />
      )
    }},
  Sponsors: {
    screen: Sponsors,
    navigationOptions: {
      tabBarLabel: 'Sponsors',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon size={26} name={'cash'} style={{ color: tintColor }} />
      )
    }},
}, {
  initialRouteName: 'Home',
  activeColor: '#FFD64C',
  inactiveColor: 'white',
  barStyle: { backgroundColor: 'black' },
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    upperCaseLabel: false,
    tabStyle: {
      backgroundColor: 'black',
    }
  },
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom'
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#2E260D"
          barStyle="light-content"
        />
        <TabNavigator />
      </View>
    )
  }
}
