import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  TextInput,Image,ImageBackground,ScrollView,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class AllocationAdminTaskEditList extends Component {

	static navigationOptions = {
	header: null
}
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
	<ImageBackground source={require('../component/image/login.png')}
			style={style.container}> 
			
				<View><Image style={{width: 370, height: 30}}

			source={require('../component/image/topMenu.png')}/>
			</View>
	        <Text style={style.welcome}>AllocationAdminTaskEdit</Text>
			 <ScrollView>
					<View>
			<TextInput underlineColorAndroid = "transparent" placeholder="---Search---"autoFocus={true}style = { style.inputBox }/>
		  			</View>
		  <View style={{alignItems: 'flex-end'}}>

					<View  style={{flexDirection: 'row',alignItems: 'flex-end'}} >
	<View>
			<Image style={{width: 50, height: 50}}
			source={require('../component/image/menutype.png')}/>	
		
			</View>
					<View>
			<Image style={{width: 50, height: 50}}
			source={require('../component/image/filetericon.png')}/>	
			</View>
       		</View>
				</View>
<TouchableOpacity  onPress={() => this.props.navigation.navigate('AllocateAdminTask')}>
		  <View style={{
				 flexDirection: 'column',
				 justifyContent: 'center',
				 alignItems: 'center',
				 backgroundColor:'lightpink', height: 100,width:300,}}>
			  <Text>
			Name of app
			</Text>			
			<Text>
			Name of admin
			</Text>
			<View  style={{alignItems: 'flex-end',justifyContent: 'center'}} >
			<Text>
			Last Update
			</Text>
			</View> 
			<View  style={{alignItems: 'flex-end',justifyContent: 'center'}} >
			<Text>
			Date & Time
			</Text>	
			</View> 
			</View> 
			
						</TouchableOpacity>
						 </ScrollView>
		<View><Image style={{width: 370, height: 30}}
			source={require('../component/image/bottommenu.png')}/>
			</View>
     	  	 </ImageBackground>

    );
      }
  }

const style = StyleSheet.create({
		 container:
  {
   flex: 1,
	alignItems:'center',
		justifyContent:'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  inputBox:{
	 width:300,
	 backgroundColor:'aliceblue',
      fontSize:16,
    color:'black',
	 borderWidth: 0.5,
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
