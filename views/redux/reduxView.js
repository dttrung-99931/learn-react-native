import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ins} from './actionCreaters';
// setInterval(() => {
//   myStore.insCount();
// }, 1000);
const ReduxView = props => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch(ins());
        }}></Button>
    </View>
  );
};

export default ReduxView;
