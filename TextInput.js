import React from 'react';
import Styles from './styles'
import ReactNative, { KeyboardAvoidingView, TouchableHighlight, StyleSheet, Text, View, Image, Picker, Dimensions, Platform } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class TextInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      placeHolder: props.placeHolder,
      value: props.value
    }
  }
  render() {
    return (
      <ReactNative.TextInput style={Styles.textInput}
        onFocus={() => {
          this.props.hidePickers();
        }}
        onBlur={() => {
          this.props.showPickers();
        }}
        onChangeText={(name) => {
          this.setState({
            value: value
          })
        }}
        value={this.state.placeHolder}
      />
    );
  }
}