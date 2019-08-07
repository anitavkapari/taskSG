import React, {Component} from 'react';
import {
	 StyleSheet, Text, View,  TextInput,Image,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class Registration extends Component {

	
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
    }
    }
 login()
    {
      const {phoneNumber} = this.state;
	  alert(phoneNumber);
	  //this.props.navigation.navigate("SplashScreen");
	  //Keyboard.dismiss();
    }
    render() {
    return (
	<View style={style.container}>
	        <Text style={style.welcome}>Registration</Text>

          <TextInput style={style.inputBox}  
		// onChangeText={phoneNumber => this.setState((phoneNumber))}
		         	  placeholder=" Enter Name"				  
		  />
		     <TextInput style={style.inputBox}  
		// onChangeText={phoneNumber => this.setState((phoneNumber))}
		         	  placeholder=" Enter Address"				  
		  />
    
	   <TextInput style={style.inputBox}  
		// onChangeText={phoneNumber => this.setState((phoneNumber))}
		         	  placeholder=" Enter City"				  
		  />
    
	   <TextInput style={style.inputBox}  
		// onChangeText={phoneNumber => this.setState((phoneNumber))}
		         	  placeholder=" Enter PinCode"				  
		  />
    
	   <TextInput style={style.inputBox}  
		// onChangeText={phoneNumber => this.setState((phoneNumber))}
		         	  placeholder=" Enter Phone Number"				  
		  />
    
    
        <TouchableOpacity 
        onPress={()=>this.login()}     
		style={style.button}>
             <Text style={style.buttonText}>Login</Text>
           </TouchableOpacity>
     
	  </View>
    );
      }
  }

const style = StyleSheet.create({
	container: {
	flex: 1,
		alignItems:'center',
		justifyContent:'center',
		   backgroundColor: 'skyblue'

	},
	inputBox:{
	 width:300,
	 backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
	 fontSize:16,
    color:'#ffffff',
    marginVertical: 10
	},
	 button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
 	
});