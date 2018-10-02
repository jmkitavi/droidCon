import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet, 
  Platform, 
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let { height, width } = Dimensions.get('window')

export default class Header extends Component {
  componentDidMount() {
    console.log('bullshit', this.props.navigationState)
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 40, height: 40, marginStart: 15 }}
          source={require('../../../assets/img/logo.png')}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'ios' ? 80 : 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    marginTop: Platform.OS == 'ios' ? 28 : 15,
    marginLeft: 30,
    fontFamily: 'DINPro-Bold',
    fontSize: 25,
    lineHeight: 26,
    color: 'white',
  }
})
