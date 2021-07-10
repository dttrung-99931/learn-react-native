import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Constants} from './../values/constants';
import {Colors} from './../values/colors';

class TextButton extends Component {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    defaultTextStyle: {
      color:
        this.props.textColor != null
          ? this.props.textColor
          : Colors.COLOR_WHITE,
    },
    defaultButtonStyle: {
      backgroundColor:
        this.props.backgroundColor != null
          ? this.props.backgroundColor
          : Colors.COLOR_PRIMARY,
      paddingVertical: Constants.PADDING_X_LARGE,
      paddingHorizontal: Constants.PADDING_XX_LARGE,
      borderRadius: Constants.BORDER_RADIUS,
      marginLeft: Constants.MARGIN_X_LARGE,
    },
  });

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={
          this.props.buttonStyle != null
            ? this.props.buttonStyle
            : this.styles.defaultButtonStyle
        }>
        <Text
          style={
            this.props.textStyle != null
              ? this.props.textStyle
              : this.styles.defaultTextStyle
          }>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
