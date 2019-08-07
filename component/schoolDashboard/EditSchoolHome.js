import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  



export default class EditSchoolHome extends Component {

static navigationOptions = {
	header: null
}
    
    render() {
    return (
	<View style={style.container}>
				 <ScrollView>
		<Text style={style.welcome1}>School</Text>

	


 <Text style={style.separator}onPress={() => this.props.controller({screen:1,subscreen:0})}>
Add Capital</Text>
 <Text style={style.separator}>UpdateCapital</Text>
 <Text style={style.separator}onPress={() => this.props.controller({screen:2,subscreen:0})}>Add New School</Text>
 <Text style={style.separator}onPress={() => this.props.controller({screen:3,subscreen:0})}>Add Standard </Text>
 <Text style={style.separator}onPress={() => this.props.controller({screen:4,subscreen:0})}>Add Division</Text> 
 <Text style={style.separator}onPress={() => this.props.controller({screen:5,subscreen:0})}>Educational Year</Text>	    
 <Text style={style.separator}>Update Information</Text>
  <Text style={style.separator}onPress={() => this.props.controller({screen:8,subscreen:0})}>Add Subject</Text>

 <Text style={style.separator}onPress={() => this.props.controller({screen:6,subscreen:0})}>Board Information</Text>
 <Text style={style.separator}onPress={() => this.props.controller({screen:7,subscreen:0})}>Update Medium Information</Text>
 <Text style={style.separator}onPress={() => this.props.controller({screen:9,subscreen:0})}>Allocat Teacher</Text>
  <Text style={style.separator}onPress={() => this.props.controller({screen:10,subscreen:0})}>Allocat Student</Text>
 <Text style={style.separator}>Update Student</Text>
 <Text style={style.separator}>Voice Record</Text>
		    </ScrollView>
			</View>

    );
      }
  }
const style = StyleSheet.create({	
container:
  {
    flex: 1,
		backgroundColor: '#99ffff',

  },
  welcome1: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
		 borderWidth: 1.0,	  width:250,
backgroundColor:'#e6ac00',
    textAlign: 'center',marginLeft:20,
			height: 40,marginTop:20,
  },
	separator: {  
       padding:5,
		marginTop:15,
        fontSize: 18,  
		height: 50,	
		
		    borderWidth: 1.0,
        fontWeight: 'bold',  
		 borderColor: '#ffffff',
        color: "black",  
		textAlign:'center',
		backgroundColor:'rgba(80,80,110,.170)', 
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
 

