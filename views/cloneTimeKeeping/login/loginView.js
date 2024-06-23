import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BaseView from './../base/baseView';
import {Colors} from './../values/colors';
import commonStyles from './../styles/commonStyles';
import {StyleSheet} from 'react-native';
import ic_logo from './../images/ic_logo.png';
import ic_account_grey from './../images/ic_account_grey.png';
import ic_key_grey from './../images/ic_key_grey.png';
import ic_unlock_grey from './../images/ic_unlock_grey.png';
import ic_lock_grey from './../images/ic_lock_grey.png';
import TextInputCustom from './../components/textInputCustom';
import {Constants} from './../values/constants';
import Hr from './../components/hr';
import TextButton from './../components/textButton';
import * as actions from './../actions/loginActionCreators';
import {connect} from 'react-redux';

class LoginView extends BaseView {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
      username: 'user@gmail.com',
      password: 'user',
    };
  }

  // On receiving new props
  UNSAFE_componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.handleNewProps();
  }

  // Handle new props
  handleNewProps() {
    if (this.props.success) {
      this.showMsg('Successfully');
    } else {
      this.showMsg('Tài khoản hoặc mật khẩu không đúng');
    }
  }

  render() {
    return (
      <View style={commonStyles.container}>
        {this.renderHeader()}
        <ScrollView>{this.renderBody()}</ScrollView>
      </View>
    );
  }

  // Render header
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={commonStyles.title}>Đăng nhập</Text>
      </View>
    );
  }

  // Render body
  renderBody() {
    return (
      <View>
        <Image style={styles.logoImage} source={ic_logo} />
        <View style={styles.textInputContainer}>
          <TextInputCustom
            contentLeft={<Image source={ic_account_grey} />}
            hint="Tên đăng nhập"
            defaultValue={this.state.username}
            onChangeText={text => (this.state.username = text)}
          />
          <Hr />
          <TextInputCustom
            contentLeft={<Image source={ic_key_grey} />}
            contentRight={
              <Image
                source={
                  this.state.isPasswordVisible ? ic_unlock_grey : ic_lock_grey
                }
              />
            }
            onContentRightPress={() => {
              this.setState({
                isPasswordVisible: !this.state.isPasswordVisible,
              });
            }}
            defaultValue={this.state.password}
            hint="Mật khẩu"
            secureTextEntry={!this.state.isPasswordVisible}
            onChangeText={text => (this.state.password = text)}
          />
        </View>
        <View
          style={[
            commonStyles.horizontalView,
            commonStyles.center,
            {
              margin: Constants.MARGIN_XXLARGE,
            },
          ]}>
          <TextButton
            title="Quên mật khẩu?"
            textStyle={commonStyles.textHint}
            buttonStyle={{
              bacgroundColor: Constants.COLOR_TRANSPARENT,
            }}
          />

          <TextButton
            title="ĐĂNG NHẬP"
            onPress={() => {
              this.props.login(this.state.username, this.state.password);
              this.showMsg('Logging in');
            }}
          />
        </View>

        <TextButton
          title="Đăng ký ngay!"
          textStyle={{
            fontSize: 16,
          }}
          buttonStyle={{
            alignSelf: 'center',
            marginTop: Constants.MARGIN_XX_LARGE,
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, actions)(LoginView);

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoImage: {
    alignSelf: 'center',
    marginVertical: Constants.MARGIN_X_LARGE,
  },
  headerContainer: {
    backgroundColor: Colors.COLOR_PRIMARY,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
