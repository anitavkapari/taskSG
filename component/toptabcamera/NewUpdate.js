import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class NewUpdate extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}

    render() {
    return (
	  <ImageBackground source={require('../component/image/login.png')}
			style={style.container}>
	
	      </ImageBackground>
    );
      }
  
}
const style = StyleSheet.create({
	 container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
	inputBox:{
	 width:250,
	 backgroundColor:'#ffffff',
	 fontSize:16,
    color:'black',
    marginVertical: 10
	},
	 button: {
    width:250,
    backgroundColor:'red',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  welcome: {
    fontSize: 20,
	    color: 'red',

    textAlign: 'center'
  },
   buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
 	
});
