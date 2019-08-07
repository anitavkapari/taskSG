import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class UserRegistration extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
		 userID:'',
		 UserPwd: '',
		 UserName:'',
		 UserPerAddress:'',
		 UserCurAddress:'',
		 error: false
    }
    }
    render() {
    return (
	  <ImageBackground source={require('../../component/image/login.png')}
			style={style.container}>
	<View style={style.container}>
	
	        <Text style={style.welcome}>User Registration</Text>
<ScrollView>
          <TextInput style={style.inputBox}  
		onChangeText={userID => this.setState({userID})}
		keyboardType={'numeric'}
		maxLength={10}
		         	  placeholder=" Enter UserId(PhoneNo...)"				  
		  />
		    
    
	   <TextInput style={style.inputBox}  
		onChangeText={UserPwd => this.setState({UserPwd})}
		placeholder=" Create Password "
		
		         	  				  
		  />
     <TextInput style={style.inputBox}  
		onChangeText={UserName => this.setState({UserName})}
		         	  placeholder="Enter LName "				  
		  />
	   <TextInput style={style.inputBox}  
		onChangeText={UserPerAddress => this.setState({UserPerAddress})}
		         	  placeholder=" Enter Permanent Address"				  
		  />
    
	   <TextInput style={style.inputBox}  
		onChangeText={UserCurAddress => this.setState({UserCurAddress})}
		         	  placeholder=" Enter Current Address"				  
		  />
    
    
        <TouchableOpacity 
        onPress={()=>this.submit()}     
		style={style.button}>
             <Text style={style.buttonText}>Submit</Text>
           </TouchableOpacity>
     </ScrollView>
	  </View>
	 
	 
	      </ImageBackground>
    );
      }
  
		submit  =() =>
 		{

			fetch('http://devikas-env.um9vbjkh2m.ap-south-1.elasticbeanstalk.com/rest/user/userreg/',{
   			method: 'POST',
   			headers: 
 				{
     				Accept: 'application/json',
     				'Content-Type': 'application/json',
   				},
   			body: JSON.stringify(
 				{
     				userId: this.state.userID,
					uName: this.state.UserName,
					userPwd: this.state.UserPwd,
					userPerAddress: this.state.UserPerAddress,
					userCurAddress: this.state.UserCurAddress
   				}),
 			}
 			)
 		 .then((response) => response.json())
     		.then((responseJson) =>  
 			{
			const { userID }  = this.state ;
 const { UserName }  = this.state ;
 const { UserPwd }  = this.state ;
  const { UserPerAddress }  = this.state ;
 const { UserCurAddress }  = this.state ;
if(userID == '' || UserName == '' || UserPwd == ''|| UserPerAddress == ''|| UserCurAddress == '')
{
alert("Please Enter All the Values.");
}
else {
 
// Do something here which you want to if all the Text Input is filled.
 
//alert("All Text Input is Filled.");
 
//}
			/*if (UserPwd.length<5){
			alert('password must be at least 6 characters long');
			}*/
			
			//return responseJson.movies;
       			alert(responseJson.status);
				this.props.navigation.navigate('TermConditions');
			}
     			})
		
     		.catch((error) => 
 			{
       			alert('error='+error);
     			});	
 		};
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
