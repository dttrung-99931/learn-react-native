import React, {useState} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import LearnUIView from './ui/learnUiView';

export default TabView3 = () => {
  return (
    <NativeBaseProvider>
      <LearnUIView />
    </NativeBaseProvider>
  );
};
