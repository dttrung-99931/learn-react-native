import React, {Component} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
class BaseView extends Component {
  render() {
    return (
      <View>
        <Text>BaseView</Text>
      </View>
    );
  }

  showMsg(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
}

export default BaseView;
