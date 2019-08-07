import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class Registration extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
		 userID:'',
		 
    }
    }
    render() {
    return (
	  			<View style={style.container}> 
				 <TextInput underlineColorAndroid = "transparent"
			placeholder=" Enter Name"        
			style = { style.inputBox }/>
			
          <TextInput underlineColorAndroid = "transparent"
			placeholder=" email address"        
			keyboardType={'email-address'}
			style = { style.inputBox }/>
			
	   <TextInput style={style.inputBox}  
		placeholder=" Create Password "     	  				  
		  />
	 
        <TouchableOpacity onPress={()=>this.submit()}style={style.buttonContainer}>
             <Text style={style.text}>Submit</Text>
           </TouchableOpacity>
	 
	 
			</View>
    );
      }
  
		
 		
}
const style = StyleSheet.create({
	 container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25, backgroundColor: 'lightblue',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
inputBox:{
	width:200,
      fontSize:15,
    color:'black',    borderRadius:5,
	borderWidth: 1.0,
	borderColor: 'black',
marginTop:10,
	 height: 45,
	 fontWeight: 'bold'
	},
	 buttonContainer: {
    height:35,      
    justifyContent: 'center',
    alignItems: 'center',
	marginTop:15,
    width:100,    backgroundColor: "#9c8f6b",

    borderRadius:15,
  },
 	text:{color:'black',fontSize:18,	 fontWeight: 'bold'
},
});
