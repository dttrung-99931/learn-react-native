import React, {useState} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import LearnUIView from './ui/learnUiView';

export default TabView3 = (): Node => {
  return (
    <NativeBaseProvider>
      <LearnUIView />
    </NativeBaseProvider>
  );
};
