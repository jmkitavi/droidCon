import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Timeline from 'react-native-timeline-listview'


export default class Friday extends Component {
  constructor() {
    super();
    this.state = { "schedule": [] };
    this.fetch = this.fetch.bind(this);
  }
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const url = 'https://raw.githubusercontent.com/sirjmkitavi/droidCon/master/data/thursday.json';

    return axios.get(url)
      .then(response => {
        console.log(response)
        this.setState({
          schedule: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.schedule.length < 1 ? (
          <ActivityIndicator
            color='black'
            size={30}
            style={{ marginTop: 30 }}
          />
        ):(
        <Timeline 
          style={styles.list}
          data={this.state.schedule}
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
        )}
      </View>
  );
  }
}

const styles = StyleSheet.create({
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