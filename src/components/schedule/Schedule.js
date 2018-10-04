import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Timeline from 'react-native-timeline-listview'
import Header from '../common/Header';
import Thursday from './Thursday';
import Friday from './Friday';


const TabNavigator =  createMaterialTopTabNavigator({
  '4th Oct': Thursday,
  '5th Oct': Friday,
}, {
  tabBarOptions: {
      activeTintColor: '#f54545',
      inactiveTintColor: 'black',
      style: {
          backgroundColor: "rgba(255,255,255,0)",
          height: 40,
      },
      indicatorStyle: {
        backgroundColor: '#f54545',
      },
      labelStyle: {
        fontFamily: 'DINPro-Bold',
        fontSize: 18,
        marginTop: 1,
      },
      upperCaseLabel: false
  },
});

class Schedule extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Schedule' />
        <ImageBackground
          style={styles.bgImage}
          source={require('../../../assets/img/bg.png')}
        >
          <View style={{ flex: 1, marginTop: 15, marginHorizontal: 10 }}>
            <TabNavigator />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Schedule;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 50,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
})