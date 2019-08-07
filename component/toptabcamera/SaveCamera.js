import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class SaveCamera extends Component {

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
	backgroundColor: '#ffb380',
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
		textAlign:'center',marginLeft:10,
        backgroundColor: '#ffc299',
    }, 
	separator1: {  
		marginTop:20,
        fontSize: 18, 
marginLeft:10,		
		height: 50,width:150,
		    borderWidth: 1.0,
        fontWeight: 'bold',  
		 borderColor: '#ffffff',
        color: "black",  
		textAlign:'center',
        backgroundColor: 'orange',
    }, 
	inputBox:{
	width:190,
	 backgroundColor:'#ffffff',
      fontSize:18,
    color:'black',
	 height: 45,
	 borderRadius: 25,
textAlign:'center',	 fontWeight: 'bold'
	},
	SectionStyle: {
    flexDirection: 'row',
	marginTop:30,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,marginLeft:5,
    borderRadius: 25,
	width:270,
    margin: 10,
  },
	 ImageStyle: {
    padding: 10,
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
	width: 40, height: 40
  },
 	
});
