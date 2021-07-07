import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from './actionCreaters';
import {connect} from 'react-redux';

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
          props.ins();
        }}></Button>
    </View>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = {
  ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxView);
