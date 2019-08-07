import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class AllocateTab extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	
    render() {
    return (
	   <View style={style.container}>

 <ScrollView>
			
		<Image style={{width: 60, marginLeft:30,height: 60}}
		source={require('../../component/image/calender.png')}/>
			
		<View style={{alignItems: 'flex-end'}}>
		<View style={{flexDirection: 'row',marginLeft:230}}>
		<View>
		<Image style={{width: 50, height: 50}}
			source={require('../../component/image/filetericon.png')}/>
			</View>
					<View>
				<Image style={{width: 50, height: 50}}
			source={require('../../component/image/menutype.png')}/>
			</View>
			<View>
			<Image style={{width: 50, height: 50}}
			source={require('../../component/image/selectallicon.png')}/>	
			</View>
       		</View>
			</View>
						
			<Text style={style.separator}>Sample</Text>
			<Text style={style.separator}>Sample</Text>
			<Text style={style.separator}>Sample</Text>
			 </ScrollView>
</View>
    );
      }
  
}
const style = StyleSheet.create({
	container:
  {
    flex: 1,
	padding:15,
	backgroundColor: '#ffb3ff',
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
        backgroundColor: '#ffccff',
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
