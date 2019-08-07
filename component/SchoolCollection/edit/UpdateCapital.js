import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
  TouchableOpacity, ActivityIndicator, Picker, CheckBox
} from 'react-native';
export default class UpdateCapital extends Component {

  static navigationOptions = {
    header: null
  }
  componentDidMount() { }
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      selected: false
    }
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.welcome1}>Founadation/Update Capital</Text>

        <ScrollView>

        </ScrollView>
      </View>

    );
  }

}
const style = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#99ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  inputBox: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 18,
    width: 300, height: 50,
    borderWidth: 1.0,
    borderColor: '#ffffff', color: 'black',
    backgroundColor: 'gray', textAlign: 'center'
  },
  inputtxt: {
    color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14,
    backgroundColor: '#ffffff', marginTop: 30, padding: 5, marginLeft: 10,
    width: 300, height: 50, textAlign: 'center'
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
    borderWidth: 1.0, width: 120,
    borderColor: 'black',
    borderRadius: 30, marginLeft: 100, marginTop: 60,
    color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, padding: 5
  },
  buttonContainer1: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e6ac00",
    borderWidth: 1.0, width: 120,
    borderColor: '#ffffff',
    color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, padding: 5
  },

  welcome1: {
    fontSize: 20,
    borderColor: '#ffffff',
    color: 'black', marginLeft: 10,
    borderWidth: 1.0, width: 300,
    backgroundColor: '#e6ac00',
    textAlign: 'center', marginBottom: 30,
    height: 50, marginTop: 40,
  },

});
