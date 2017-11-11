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
        <Image style={{ width:150, height:150, marginBottom: 30 }} source={require('./assets/logo.png')} />
        <Text>Yo!</Text>
      </View>
    );
  }
}
