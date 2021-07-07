import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import * as actions from './reduxCrudActionCreater';
import {connect} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';

class ReduxCrudView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateDialog: false,
    };
  }

  styles = StyleSheet.create({
    deleteTextBtn: {
      color: 'red',
      borderWidth: 1,
      borderColor: 'red',
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    itemContainer: {
      backgroundColor: 'white',
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 4,
    },
    textInput: {
      borderWidth: 1,
      margin: 16,
      paddingHorizontal: 8,
    },
    textTitle: {
      textAlign: 'center',
      fontSize: 22,
      marginTop: 8,
    },
    container: {
      height: '100%',
    },
    madalContentContainer: {
      paddingTop: 16,
      paddingBottom: 32,
      marginHorizontal: 16,
      elevation: 5,
      backgroundColor: 'white',
    },
    madalExitOnTouchOutside: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    itemText: {
      padding: 8,
      fontSize: 18,
      flex: 1,
    },
  });

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderList()}
        {this.renderFAB()}
        {this.renderCreateDialog()}
      </View>
    );
  }

  // Render float action btn
  renderFAB() {
    return (
      <FloatingAction
        showBackground={false}
        onPressMain={name => {
          this.showCreateDialog(true);
        }}
      />
    );
  }

  // Render list
  renderList() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={({item}) => {
          return (
            <View style={this.styles.itemContainer}>
              <Text style={this.styles.itemText}>{item.note}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.delete_(item);
                }}>
                <Text style={this.styles.deleteTextBtn}>DEL</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  }

  // Render create dialog
  renderCreateDialog() {
    return (
      <Modal
        visible={this.state.showCreateDialog}
        transparent={true}
        onRequestClose={() => this.showCreateDialog(false)}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => this.showCreateDialog(false)}
          style={this.styles.madalExitOnTouchOutside}>
          <TouchableWithoutFeedback>
            <View style={this.styles.madalContentContainer}>
              <Text style={this.styles.textTitle}>Add note</Text>
              <TextInput
                style={this.styles.textInput}
                numberOfLines={3}
                // TODO: make keyboard shown when focucused
                // autoFocus={true}
                multiline={true}
                onChangeText={text => (this.note = text)}
              />
              <View
                style={{
                  marginHorizontal: 16,
                }}>
                <Button
                  title="ADD"
                  onPress={() => {
                    const noteItem = {
                      key: this.props.items.length + 1,
                      note: this.note,
                    };
                    this.props.create(noteItem);
                    this.showCreateDialog(false);
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }

  // Show create dialog
  showCreateDialog(isVisible) {
    this.setState({
      ...this.state,
      showCreateDialog: isVisible,
    });
  }
}

const mapStateToProps = state => ({
  items: state,
});
export default connect(mapStateToProps, actions)(ReduxCrudView);
