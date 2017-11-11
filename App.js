import React from 'react';
import Styles from './styles'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.sendInquiry = this.sendInquiry.bind(this)
    this.state = {
      bloodType: ''
    }
  }

  sendInquiry() {

  }

  render() {
    return (
      <View style={Styles.container}>
        <Image style={Styles.logo} source={require('./assets/logo.png')} />
        <Text style={Styles.instructionText}>Please choose the blood type that you are looking for and provide your contact details. Your inquiry will be broadcasted to the kind hearted blood donors.</Text>
        <Text>Yo!</Text>
      </View>
    );
  }
}
