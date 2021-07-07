import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

import {observer, inject} from 'mobx-react';

// setInterval(() => {
//   myStore.insCount();
// }, 1000);

const MobxView = ({myStore}) => {
  return (
    <View>
      <Text>{myStore.countMsg}</Text>
      <Button
        title="Increase"
        onPress={() => {
          myStore.insCount();
        }}></Button>
    </View>
  );
};

export default inject('myStore')(observer(MobxView));
