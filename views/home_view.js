import React, {Component} from 'react';
import {Button, View, TouchableNativeFeedback, Text} from 'react-native';

const HomeView = (props): Node => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button title="Click" onPress={() => alert('Click')}></Button>
      ),
    });
  }, [props.navigation]);

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
      <View style={{marginTop: 8}}></View>
      <Button
        title="call api"
        onPress={() => props.navigation.navigate('call-api')}
        color="purple"
      />
      <View style={{marginTop: 8}}></View>
      <Button title="Mobx" onPress={() => props.navigation.navigate('mobx')} />

      <View style={{marginTop: 8}}></View>
      <Button
        color="purple"
        title="Redux"
        onPress={() => props.navigation.navigate('redux')}
      />
    </View>
  );
};
export default HomeView;
