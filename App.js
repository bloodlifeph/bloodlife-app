import React from 'react';
import Styles from './styles'
import { KeyboardAvoidingView, TouchableHighlight, StyleSheet, Text, TextInput, View, Image, Picker, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.sendInquiry = this.sendInquiry.bind(this)
    this.state = {
      bloodType: 'Blood Type Needed',
      city: 'Nearest City',
      name: "Inquirer / Patient's name",
      contactNumber: "Contact Number",
      showPickers: true
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

        {this.state.showPickers &&
          <View style={{ flex: 1, flexDirection: 'row', width: SCREEN_WIDTH - 50 }}>
            <View style={{ flex: 1, marginTop: -60 }}>
              <Picker
                mode="dropdown"
                color='blue'
                selectedValue={this.state.bloodType}
                onValueChange={(itemValue, itemIndex) => this.setState({ bloodType: itemValue })}>
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="ANY" value="ANY" />
              </Picker>
            </View>
            <View style={{ flex: 2, marginTop: -60 }} >
              <Picker
                selectedValue={this.state.city}
                onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>

                <Picker.Item label="Antipolo" value="Antipolo" />
                <Picker.Item label="Agoo City" value="Agoo City" />
                <Picker.Item label="Bacolod City" value="Bacolod City" />
                <Picker.Item label="Baguio" value="Baguio" />
                <Picker.Item label="Cagayan de Oro" value="Cagayan de Oro" />
                <Picker.Item label="Caloocan" value="Caloocan" />
                <Picker.Item label="Cebu City" value="Cebu City" />
                <Picker.Item label="Dagupan City" value="Dagupan City" />
                <Picker.Item label="Davao City" value="Davao City" />
                <Picker.Item label="Lapu-lapu City" value="Lapu-lapu City" />
                <Picker.Item label="Manila" value="Manila" />
                <Picker.Item label="Pasig" value="Pasig" />
                <Picker.Item label="Quezon City" value="Quezon City" />
                <Picker.Item label="San Fernando City" value="San Fernando City" />
                <Picker.Item label="Taguig" value="Taguig" />
                <Picker.Item label="Tacloban" value="Tacloban City" />
                <Picker.Item label="Tagbiliran" value="Tagbilaran City" />
                <Picker.Item label="Zamboanga City" value="Zamboanga City" />
              </Picker>
            </View>
          </View>

        }


        <View style={[Styles.containerFormText, { marginTop: 50 }]}>

          <TextInput style={Styles.textInput}
            onFocus={() => {
              this.setState({ showPickers: false })
            }}
            onBlur={() => {
              this.setState({ showPickers: true })
            }}
            onChangeText={(name) => {
              this.setState({
                name: name
              })
            }}
            value={this.state.name}
          />
          <TextInput style={Styles.textInput}
            onFocus={() => {
              this.setState({ showPickers: false })
            }}
            onBlur={() => {
              this.setState({ showPickers: true })
            }}
            onChangeText={(contactNumber) => {
              this.setState({
                contactNumber: contactNumber
              })
            }}
            value={this.state.contactNumber}
          />
        </View>
        {this.state.showPickers &&
          <View style={Styles.container}>
            <TouchableHighlight
              style={Styles.submit}
              onPress={() => this.sendInquiry(this.props)}
              underlayColor='#ff9999'>
              <Text style={[Styles.submitText]}>Inquire</Text>
            </TouchableHighlight>
          </View>
        }
      </KeyboardAvoidingView>
    );
  }
}
