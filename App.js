
import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

import Blinker from '@app/components/Blinker'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Blinker text='I love to blink' />
          <Blinker text='Yes blinking is so great' />
          <Blinker text='Why did they ever take this out of HTML' />
          <Blinker text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
