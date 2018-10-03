import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Timeline from 'react-native-timeline-listview'
import Header from './common/Header';
import thurData from '../../data/thursday.json';
import friData from '../../data/friday.json';


const Thursday = () => {
  return (
    <View style={styles.container}>
      <Timeline 
        style={styles.list}
        data={thurData}
        circleSize={20}
        circleColor='rgb(45,156,219)'
        lineColor='#863D96'
        timeContainerStyle={{ minWidth:52 }}
        timeStyle={{textAlign: 'center', backgroundColor: "rgba(255,255,255,0)", color:'black', fontFamily: 'DINPro-Bold' }}
        descriptionStyle={{ color:'gray', fontFamily: 'DINPro-Regular' }}
        options={{
          style: { paddingTop: 5 }
        }}
        renderFullLine={true}
      />
    </View>
  );
}

const Friday = () => {
  return (
    <View style={styles.container}>
      <Timeline 
        style={styles.list}
        data={friData}
        circleSize={20}
        circleColor='rgb(45,156,219)'
        lineColor='#863D96'
        timeContainerStyle={{ minWidth:52 }}
        timeStyle={{textAlign: 'center', backgroundColor: "rgba(255,255,255,0)", color:'black', fontFamily: 'DINPro-Bold' }}
        descriptionStyle={{ color:'gray', fontFamily: 'DINPro-Regular' }}
        options={{
          style: { paddingTop: 5 }
        }}
        renderFullLine={true}
      />
    </View>
  );
}

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
          source={require('../../assets/img/bg.png')}
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