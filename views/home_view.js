import React, {Component} from 'react';
import {Button, View, TouchableNativeFeedback, Text} from 'react-native';

const HomeView = (props): Node => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Button
        title="Core components"
        onPress={() => props.navigation.navigate('core-components')}
      />
    </View>
  );
};
export default HomeView;
