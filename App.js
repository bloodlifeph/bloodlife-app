import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      <View style={{flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text>Yo!</Text>
      </View>
    );
  }
}
