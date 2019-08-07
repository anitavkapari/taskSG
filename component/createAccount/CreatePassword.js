import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text, View, TextInput, Image, ImageBackground,
  TouchableOpacity, TouchableHighlight, ActivityIndicato, ScrollView
} from 'react-native';
export default class CreatePassword extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() { }
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      hidePassword: true, userID: this.props.NameOBJ,
    }
    //alert(props.password);
  }
  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <ImageBackground source={require('../../component/image/login.png')}
        style={style.container}>
        <ScrollView>

          <View style={{
            flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', marginTop: 10,
            backgroundColor: 'rgba(255,200,25,.45)', height: 100, width: 320
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Welcome
			</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>


            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', marginTop: 10 }} >
            <Text style={{ color: 'mediumturquoise' }}>
              Change
			</Text>
          </View>

          <View style={{ flexDirection: 'column', marginTop: 20, backgroundColor: 'rgba(80,80,110,.170)', padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ffffff', textAlign: 'center' }}>
              Create Password</Text>
          </View>

          <TextInput underlineColorAndroid="transparent"
            placeholder="4 Digits"
            maxLength={4}
            style={style.inputBox} />

          <TextInput underlineColorAndroid="transparent"
            placeholder="re Enter"
            maxLength={4}
            style={style.inputBox} />

          <TouchableHighlight style={style.buttonContainer}
            onPress={() => this.props.navigation.navigate('SelectRoles')}>
            <Text style={{
              fontWeight: 'bold', fontSize: 18, color: '#ffffff',
              textAlign: 'center'
            }}>Next</Text>
          </TouchableHighlight>
        </ScrollView>

      </ImageBackground>



    );
  }
}

const style = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  inputBox: {
    width: 200,
    backgroundColor: '#ffffff',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginLeft: 90,
    borderWidth: 0.5,
  },








  welcome: {
    fontSize: 20,
    color: 'red',

    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    height: 45,
    marginBottom: 20,
    backgroundColor: "red",
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120, marginTop: 40,
    marginLeft: 120,
    borderWidth: 1.0,
    borderColor: 'black',
  },

  loginText: {
    color: '#ffffff',
    fontSize: 30
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});
