import React from 'react';
import Styles from './styles'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.sendInquiry = this.sendInquiry.bind(this)
    this.state = {
      bloodType: 'O+'
    }
  }

  sendInquiry() {

  }

  render() {
    return (
      <KeyboardAvoidingView
        style={Styles.container}
        behavior="padding"
      >
        <Image style={Styles.logo} source={require('./assets/logo.png')} />
        <Text style={Styles.instructionText}>Please choose the blood type that you are looking for and provide your contact details. Your inquiry will be broadcasted to the kind hearted blood donors.</Text>
        <View style={{ width: 310 }}>
          <TextInput style={Styles.textInput}
            onChangeText={(bloodType) => {
              this.setState({
                bloodType: bloodType
              })
            }}
            value={this.state.bloodType}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
