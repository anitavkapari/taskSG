import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput, Image,TouchableHighlight,ImageBackground,
  Button,ActivityIndicator,TouchableOpacity,CheckBox} from 'react-native';

export default class Password extends Component  {
static navigationOptions = {
	header: null
}
  
    componentDidMount(){}
	constructor(props){
    super(props);
	//this.props=props;
    this.state={
 checked: false,
	 password:'admin',
	 		 userGroup:'2',

userID:this.props.NameOBJ,	
		hidePassword: true 
    }
	//alert(props.password);
    }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
    render() {
const { navigation } = this.props;

		const user = navigation.getParam('user','0');
    return (
	<ImageBackground source={require('../component/image/loginimage.jpg')}
			style={style.container}> 
			 <View style={{
				 flexDirection: 'column',
				 justifyContent: 'center',
				 alignItems: 'center',
				 marginTop:10,
				 backgroundColor:'rgba(255,200,25,.45)', height: 100,width:300,}}>
			<Text style={{ fontWeight: 'bold',fontSize:18}}>
			Welcome
			</Text>			
			<Text style={{ fontWeight: 'bold',fontSize:18}}>
			{user.userName}
			</Text>
			<Text style={{ fontWeight: 'bold',fontSize:18,marginTop:10}}>
			{user.userId}
			</Text>
			<View  style={{alignItems: 'flex-end'}} >
			<Text style={{color:'mediumturquoise',alignItems: 'flex-end',marginLeft:190}}>
			Change
			</Text>	
			</View> 
			</View> 
			
	<View style={{marginTop:70}}>
	        <View style = { style.textBoxBtnHolder }>
			<TextInput underlineColorAndroid = "transparent" secureTextEntry =
			{ this.state.hidePassword } 
			 onChangeText={(password) => this.setState({password})}
          placeholder=" Enter Your Password"
          autoCapitalize="none"
		  		 keyboardType={'numeric'}
		   autoCorrect={false}
		   maxLength={4}			
        size="4"
          style = { style.inputBox }/>
			         
					 <TouchableOpacity activeOpacity = { 0.8 }
					 style = { style.visibilityBtn } onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) 
			? require('../component/image/passwordhide.png') : 
			require('../component/image/passwordshow.png') } 
			style = { style.btnImage } />   
 </TouchableOpacity>
        </View>
		
		<View style={{alignItems: 'flex-end',justifyContent: 'center',marginLeft:210}}>
		<Text style={{color:'mediumturquoise'}}>Forgot</Text></View>
		</View>
	<View style={style.container}>
		

 <View  style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center' }}>
<CheckBox value={this.state.checked}onValueChange={() => this.setState({ checked: !this.state.checked })}/>    
<Text>Save in my Device</Text>
</View>
			
<TouchableHighlight style={[style.buttonContainer, style.loginButton]}onPress={this.login}>
          <Text style={style.loginText}>Login</Text>
        </TouchableHighlight>
		 </View>
		
		
	  	  	</ImageBackground>
    );
      }
	login =()=>{
		  //	alert('state=' + this.state.password +',='+ this.props.password)
		//	
	    	const { navigation } = this.props;

		const user = navigation.getParam('user','0');

			if (this.state.password == null || this.state.password=="") {
               alert('Password must contain 4 digits');
			   			   return false;

            
            }
			else if (this.state.password.length<4){
			alert('Password must contain 4 digits ');
			}
             //else  if(this.state.password=='1234'){
             else  if(this.state.password == user.password ){
				// alert(this.state.userGroup)
			  if(this.state.userGroup == user.userGroup)
			  {
				 this.props.navigation.navigate('DashboardSchool');
			  }
		     	else
			  if(user.userId == '1234567890')
			  {
				 this.props.navigation.navigate('DashboardParent');
			  }
		     else
		     {
		  		  //this.props.navigation.navigate('FoundationTab');
		  		  this.props.navigation.navigate('DashboardSummary');
		     }
		     		
		  }
		  
		  else{
		  		  alert('Please enter valid password of 4 digits');
		  }
		};
}

const style = StyleSheet.create({
	 container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
		 backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
	inputBox:{
	width:250,
	 backgroundColor:'#ffffff',
      fontSize:16,
    color:'black',
	 borderWidth: 0.5,
    marginVertical: 10
	},
	 ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
	resizeMode: 'contain',
    alignItems: 'center',
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
	borderWidth: 1.0,
	borderColor: 'black',
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "red",
  },
  loginText: {
    color: '#ffffff',
	fontSize:30
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
    buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
 	
});
