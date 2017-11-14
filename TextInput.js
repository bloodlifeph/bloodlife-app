import React from 'react';
import Styles from './styles'
import ReactNative from 'react-native';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props)
    this.checkPlaceHolder = this.checkPlaceHolder.bind(this)
    this.state = {
      placeHolder: props.placeHolder,
      value: props.value
    }
  }

  checkPlaceHolder = () => {
    if (this.state.value === '' ||
      this.state.value.indexOf(this.state.placeHolder) !== -1 ||
      this.state.placeHolder.indexOf(this.state.value) !== -1) {
      this.setState({ value: this.state.placeHolder })
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
          this.checkPlaceHolder();
        }}
        onChangeText={(name) => {
          this.setState({
            value: name
          })
          this.props.updateValue(name);
        }}
        value={this.state.value}
      />
    );
  }
}