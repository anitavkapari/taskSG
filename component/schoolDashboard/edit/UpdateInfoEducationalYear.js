import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView,ListView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker} from 'react-native';
export default class UpdateInfoEducationalYear extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
		 error: false
    }
    }
	state = {  
        choosenIndex: 0  
    };
    render() {
    return (
	 		   <View style={style.container}>	
         <Text style={style.welcome}>School/UpdateInfo/EducationalYear</Text>
		      <ScrollView>

		<Text style={style.txt}>School</Text>
		
		<Text style={style.txt}>Standard</Text>
		<Text style={style.txt}>Division</Text>
		<Text style={style.txt}>Set Educational Year</Text>
<View style={{flexDirection: 'row',justifyContent: 'space-around'}}> 
		<Text style={style.txt}>History</Text>
		<Text style={style.txt}>Current</Text>
		<Text style={style.txt}>Featurs</Text>
</View>
<View style={{flexDirection: 'column',backgroundColor:'rgba(80,80,110,.170)', }}> 
		<Text style={style.txt}>2018 - 2019</Text>
		<Text style={style.txt}>4/3/2018 - 2/31/2019</Text>
</View>
       <TouchableOpacity 
			  onPress={()=>this.Save()}>
             <Text style={style.button}>Save</Text>
           </TouchableOpacity>
     </ScrollView>
	  </View>

    );
      }
  
		Save  =() =>
 		{

			
 		}
}
const style = StyleSheet.create({
	 container:
  {
    flex: 1,
	backgroundColor: '#99ffff',
  },

txt:{color:'black',	 marginLeft:110,fontWeight: 'bold',paddingLeft:10, fontSize:14},

	
	 button: {
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
	 height:50,padding:5,
	 marginLeft:110,
	 fontWeight: 'bold',  
    width:130, height: 40,
	marginTop:15,
		marginBottom:5,
	backgroundColor:'#cc0000',
    borderRadius:30,
  },
 
   welcome: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
		 borderWidth: 1.0,
backgroundColor:'#e6ac00',
    textAlign: 'center',
			marginTop:30,
  },
    
     
 	
});
