import React, {Component} from 'react';
import {
  Box,
  Container,
  Header,
  Footer,
  Center,
  Square,
  Circle,
  AppBar,
  Heading,
} from 'native-base';
import {View, Text, ScrollView} from 'react-native';

export default class LearnUIView extends Component {
  render() {
    return this.renderBasicComponent1();
    // return this.renderBasicComponent2();
  }

  renderBasicComponent1() {
    return (
      <Container bg="grey">
        <Heading size="sm">ABC</Heading>
        {/* <AppBar>ABC</AppBar> */}
      </Container>
    );
  }

  renderBasicComponent2() {
    return (
      <ScrollView>
        {/* // bg <-> background
      // bgColor <-> backgroundColor */}
        <Box
          w={64}
          h={64}
          p={4}
          m={8}
          bg="grey"
          _text={{
            fontSize: 18,
            color: 'white',
          }}
          shadow={5}>
          Box
        </Box>

        <Center bg="red.100" w={100} h={100}>
          Center
        </Center>

        <Center mt={8}>
          <Square bg="purple.100" size={120}>
            Square
          </Square>
        </Center>

        <Center mt={8}>
          <Circle bg="orange.100" size={120} borderRadius={16}>
            rounded square
          </Circle>
        </Center>
      </ScrollView>
    );
  }
}
