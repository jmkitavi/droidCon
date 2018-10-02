import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './common/Header';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Home' />
        <ImageBackground
          style={styles.bgImage}
          source={require('../../assets/img/bg.png')}
        >
          <View style={[styles.container, { marginHorizontal: 20 }]}>
            <Image style={styles.droidConLogo} source={require('../../assets/img/droidcon.png')} />
            <Text style={styles.regularText}>
              First & largest ever Android Dev conference in Sub-Saharan Africa
            </Text>

            <View style={styles.container}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Icon name='calendar' size={28} color='#863D96' style={{ marginRight: 5 }} />
                <Text style={styles.regularText} >October 4th - 5th 2018</Text>
              </View>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Icon name='map-marker' size={28} color='#863D96' style={{ marginRight: 5 }} />
                <Text style={styles.regularText}>iHub, Nairobi</Text>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.boldText}>About</Text>
              <Text style={[styles.regularText, { marginTop: 10 }]}>
                droidcon is a global conference focused on the engineering of Android applications.
                Droidcon provides a forum for developers to network with other developers,
                share techniques, announce apps and products, and to learn and teach.
              </Text>
            </View>

            <View style={[styles.container, { flexDirection: 'row' }]} >
              <TouchableHighlight style={styles.socialIcon}>
                <Icon name='facebook' size={25} color='white' />
              </TouchableHighlight>
              <TouchableHighlight style={styles.socialIcon}>
                <Icon name='twitter' size={25} color='white' />
              </TouchableHighlight>
              <TouchableHighlight style={styles.socialIcon}>
                <Icon name='instagram' size={25} color='white' />
              </TouchableHighlight>
            </View>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  droidConLogo: {
    width: 200,
    height: 84,
    marginBottom: 20,
  },
  regularText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 19,
    textAlign: 'center',
  },
  boldText: {
    fontFamily: 'DINPro-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  socialIcon: {
    backgroundColor: '#863D96',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
})

export default Home;
