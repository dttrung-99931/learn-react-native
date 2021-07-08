import React, {Component} from 'react';
import {View} from 'react-native';
import {Colors} from './../values/colors';

class Hr extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.COLOR_BACKGROUND,
          height: 1,
        }}></View>
    );
  }
}

export default Hr;
