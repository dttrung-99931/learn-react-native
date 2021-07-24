import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Text, View, Button} from 'react-native';

export default function AnimComponent() {
  const opacity = useRef(new Animated.Value(0)).current;
  let isForward = true;

  const animate = forward => {
    isForward = forward;
    Animated.timing(opacity, {
      toValue: forward ? 1 : 0,
      duration: 3000,
      // Like physics in Flutter
      // define how value will increase (very fast at begin, and slower in the end)
      //   easing: Easing.back(),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(true);
  }, [opacity]);

  const reverseAnim = () => {
    animate(!isForward);
  };

  return (
    <View>
      <Animated.View
        style={{
          width: 124,
          height: 124,
          backgroundColor: 'purple',
          opacity: opacity,
          transform: [
            {
              //   rotateY: opacity.interpolate({
              //   rotateX: opacity.interpolate({
              rotate: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: ['1deg', '360deg'],
              }),
            },
          ],
        }}></Animated.View>

      <View>
        <Button title={'Reverse'} onPress={reverseAnim}></Button>
      </View>
    </View>
  );
}
