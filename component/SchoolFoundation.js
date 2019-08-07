import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  TextInput,Image,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';

export default class SchoolFoundation extends Component {

  static navigationOptions = {
	header: null
}
    
 state = {
    selectedTab: 0,
  };

  setTab(tab) {
    this.setState({ selectedTab: tab });
  }
    render() {
    return (
	<ImageBackground source={require('../component/image/login.png')}
			style={style.container}>
			<View >
			<Text style={style.text}>Foundation</Text>
			</View>
			 <TouchableOpacity 
			 			onPress={() => this.props.navigation.navigate ('AddNewFoundations')}
		style={style.button}>
             <Text style={style.buttonText}>Add New Foundation</Text>
           </TouchableOpacity>
		    <TouchableOpacity 
        onPress={()=>this.submit()}     
		style={style.button}>
             <Text style={style.buttonText}>
			 Update Foundation info</Text>
           </TouchableOpacity> 
		    <TouchableOpacity 
        onPress={()=>this.submit()}     
		style={style.button}>
             <Text style={style.buttonText}>Update Admin info</Text>
           </TouchableOpacity>
		    <TouchableOpacity 
        onPress={()=>this.submit()}     
		style={style.button}>
             <Text style={style.buttonText}>Allocate Admin Task</Text>
           </TouchableOpacity>
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
  button: {
    width:250,
    backgroundColor:'red',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  text:{
	   alignItems: "center",
		color:"red",
		 height:70,
		  width:250,
		 fontFamily: 'serif',
	  fontSize: 40,
    fontWeight: 'bold',
  },
   buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }	
});