import React, {Component} from 'react';
import {Platform,
	 StyleSheet,  View,Text, Button, TextInput,Image,TouchableOpacity,
  TouchableHighlight,ImageBackground} from 'react-native';
export default class Login extends Component {
	static navigationOptions = {
	header: null
}
    componentDidMount(){}
	constructor(props){
    super(props);
	//this.props=props;
    this.state={
		hidePassword: true 
    }
	//alert(props.password);
    }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
    render() {
    return (
	
			<View style={style.container}>  
   
			<TextInput underlineColorAndroid = "transparent"
			placeholder=" email address"        
			keyboardType={'email-address'}
			maxLength={10}			
			size="10"
			style = { style.inputBox }/>
			
				<View style={{marginTop:20}}>
				 <View style = { style.textBoxBtnHolder }>
		  <TextInput underlineColorAndroid = "transparent" secureTextEntry =
			{ this.state.hidePassword } 
			placeholder=" Enter Your Password"
			autoCapitalize="none"
			autoCorrect={false}
			style = { style.inputBox }/>
			<TouchableOpacity activeOpacity = { 0.8 }
					 style = { style.visibilityBtn } onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) 
			? require('../component/image/passwordhide.png') : 
			require('../component/image/passwordshow.png') } 
			style = { style.btnImage } />   
 </TouchableOpacity>
         </View>
         </View>
		 <TouchableHighlight>
		 <Text style={style.text}>No Account?   Create Account New User</Text>
		         </TouchableHighlight>

<TouchableHighlight style={style.buttonContainer}onPress={this.login}>
          <Text style={style.text}>Login</Text>
        </TouchableHighlight>
	        </View>
    );
      }
  	login =()=>{
				 this.props.navigation.navigate('DashboardParent');
	}
}
const style = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    backgroundColor: 'lightblue',

    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
	textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
	 visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
   btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
	text:{color:'blue',fontSize:18,	 fontWeight: 'bold'
},
	inputBox:{
	width:200,
      fontSize:15,
    color:'black',    borderRadius:5,
	borderWidth: 1.0,
	borderColor: 'black',

	 height: 45,
	 fontWeight: 'bold'
	},
	 buttonContainer: {
    height:40,      
    justifyContent: 'center',
    alignItems: 'center',
	marginTop:10,
    width:100,    backgroundColor: "#9c8f6b",

    borderRadius:15,
  },
  
  
  
 	
});