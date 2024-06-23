import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Button,
} from 'react-native';

/**
 * Custom touchable opacity using setNativeProps + ref
 *
 * @see setNativeProps, func to set props to native component (Text, vView,, ...)
 * others are measure, mearsureInWIndows ...
 *
 * Note: only core component (view, text, image) can use setNativeProps
 */
const MyTouchableOpacity = () => {
  const textRef = useRef();
  const setOpacity = useCallback(opacity => {
    textRef.current.setNativeProps({opacity: opacity});
  }, []);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacity(0.2)}
      onPressOut={() => setOpacity(1)}>
      <View ref={textRef}>
        <Text>Touch</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

/**
 * Component forwarding ref with clearText call to clear text in text input
 * @see useImperativeHandle, func to make clearText outsided
 */
const RefClearText = forwardRef((props, ref) => {
  const inputRef = useRef();
  const clearText = useCallback(() => {
    inputRef.current.setNativeProps({text: ''});
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      clearText,
    }),
    [],
  );

  return <TextInput ref={inputRef}></TextInput>;
});

/**
 * Component using ref
 */
export default function RefComponent() {
  const inputRef = useRef();

  return (
    <View>
      <RefClearText ref={inputRef}></RefClearText>
      <Button
        title="Clear"
        onPress={() => inputRef.current.clearText()}></Button>
    </View>
  );
  // return <MyTouchableOpacity></MyTouchableOpacity>;
  // return <Text>ABC</Text>;
}
