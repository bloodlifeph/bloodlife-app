import React from 'react';
import Styles from './styles'
import Cities from './cities'
import TextInput from './TextInput'
import { KeyboardAvoidingView, TouchableHighlight, StyleSheet, Text, View, Image, Picker, Dimensions, Platform } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

//TODO ibalhin ni later
const bloodTypes = [
  "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "ANY"
]

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.sendInquiry = this.sendInquiry.bind(this)
    this.renderBasedOnPlatform = this.renderBasedOnPlatform.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateContactNumber = this.updateContactNumber.bind(this)
    this.hidePickers = this.hidePickers.bind(this)
    this.showPickers = this.showPickers.bind(this)
    this.state = {
      bloodType: bloodTypes[0],
      city: 'Nearest City',
      name: "Inquirer / Patient's name",
      contactNumber: "Contact Number",
      showPickers: true
    }
  }

  updateName(name) {
    this.setState({
      name: name
    });
  }

  updateContactNumber(contactNumber) {
    this.setState({
      contactNumber: contactNumber
    });
  }

  hidePickers() {
    this.setState({ showPickers: false })
  }

  showPickers() {
    this.setState({ showPickers: true })
  }

  renderBasedOnPlatform(flex) {
    if (Platform.OS === 'ios') {
      return { flex: flex, marginTop: -60 }
    } else {
      return { flex: flex }
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
          <View style={Styles.containerPicker}>
            <View style={this.renderBasedOnPlatform(1)}>
              <Picker
                mode="dropdown"
                itemStyle={{ color: '#ff6666' }}
                selectedValue={this.state.bloodType}
                onValueChange={(itemValue, idx) => { this.setState({ bloodType: itemValue }); console.log(this.state); }}>

                {bloodTypes.map((s, i) => {
                  return <Picker.Item key={i} value={s} label={s} />
                })}

              </Picker>
            </View>
            <View style={this.renderBasedOnPlatform(2)} >
              <Picker
                mode="dropdown"
                itemStyle={{ color: '#ff6666' }}
                selectedValue={this.state.city}
                onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>

                {Cities.map((s, i) => {
                  return <Picker.Item key={i} value={s} label={s} />
                })}


              </Picker>
            </View>
          </View>

        }


        <View style={[Styles.containerFormText, { marginTop: 50 }]}>

          <TextInput
            placeHolder={this.state.name}
            showPickers={this.showPickers}
            hidePickers={this.hidePickers}
            value={this.state.name}
            updateValue={this.updateName} />

          <TextInput
            placeHolder={this.state.contactNumber}
            showPickers={this.showPickers}
            hidePickers={this.hidePickers}
            value={this.state.contactNumber}
            updateValue={this.updateContactNumber} />

        </View>
        {this.state.showPickers &&
          <View style={Styles.container}>
            <TouchableHighlight
              style={Styles.submit}
              onPress={() => this.sendInquiry(this.props)}
              underlayColor='#ff9999'>
              <Text style={[Styles.submitText]}>Send Inquiry</Text>
            </TouchableHighlight>
          </View>
        }
      </KeyboardAvoidingView>
    );
  }
}
