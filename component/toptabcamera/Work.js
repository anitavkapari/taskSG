import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class Work extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	
    render() {
    return (
	  <View style={style.container}>
 

</View>
    );
      }
  
}
const style = StyleSheet.create({
	container:
  {
    flex: 1,
	padding:15,
	backgroundColor: '#bfff80',
	justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
	
  },
	separator: {  
       padding:20,
		marginTop:15,
        fontSize: 18,  
		height: 80,	 width:300,
		    borderWidth: 1.0,
        fontWeight: 'bold',  
		 borderColor: '#ffffff',
        color: "black",  
		textAlign:'center',
        backgroundColor: '#ccff99',
    }, 
	inputBox:{
	 width:200,
	 backgroundColor:'#ffffff',
      fontSize:16,
    color:'black',
	    borderRadius:30,
	 borderWidth: 0.5,
    marginVertical: 10
	}
 	
});
