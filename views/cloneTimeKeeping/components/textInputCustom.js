import React, {Component} from 'react';
import {Image, View, TextInput, TouchableWithoutFeedback} from 'react-native';
import commonStyles from './../styles/commonStyles';
import {Constants} from './../values/constants';

class TextInputCustom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[commonStyles.horizontalView, commonStyles.alignItemsCenter]}>
        <TouchableWithoutFeedback onPress={this.props.onContentLeftPress}>
          {this.props.contentLeft != null ? this.props.contentLeft : <View />}
        </TouchableWithoutFeedback>

        <TextInput
          placeholder={this.props.hint}
          style={{
            marginLeft: Constants.MARGIN_LARGE,
            fontSize: Constants.FONT_SIZE,
            flex: 1,
          }}
          secureTextEntry={
            this.props.secureTextEntry ? this.props.secureTextEntry : false
          }
          defaultValue={this.props.defaultValue}
          onChangeText={this.props.onChangeText}
        />
        <TouchableWithoutFeedback onPress={this.props.onContentRightPress}>
          {this.props.contentRight != null ? this.props.contentRight : <View />}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
export default TextInputCustom;
