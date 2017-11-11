import React from 'react';
import Styles from './styles'
import { KeyboardAvoidingView, TouchableHighlight, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.sendInquiry = this.sendInquiry.bind(this)
    this.state = {
      bloodType: 'Blood Type Needed',
      city: 'Nearest City',
      name: "Inquirer / Patient's name",
      contactNumber: "Contact Number"
    }
  }

  sendInquiry() {
    //do a POST for broadcast
  }

  render() {
    return (
      <KeyboardAvoidingView style={Styles.container} behavior="padding" >
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
          <TextInput style={Styles.textInput}
            onChangeText={(city) => {
              this.setState({
                city: city
              })
            }}
            value={this.state.city}
          />
          <TextInput style={Styles.textInput}
            onChangeText={(name) => {
              this.setState({
                name: name
              })
            }}
            value={this.state.name}
          />
          <TextInput style={Styles.textInput}
            onChangeText={(contactNumber) => {
              this.setState({
                contactNumber: contactNumber
              })
            }}
            value={this.state.contactNumber}
          />
        </View>
        <View style={{ width: 310 }}>
          <TouchableHighlight
            style={Styles.submit}
            onPress={() => this.sendInquiry(this.props)}
            underlayColor='#ff9999'>
            <Text style={[Styles.submitText]}>Inquire</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
