import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator} from 'react-native';
export default class NewTab extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
		 name:''
    }
    }
    render() {
    return (
	   <View style={style.container}>
	   	    <ScrollView>

	   								<Text style={style.separator1}>Camera</Text>

	  <View style = { style.SectionStyle }>
<TextInput underlineColorAndroid = "transparent"placeholder="---Search---"
style = { style.inputBox }/>
<Image source={require('../../component/image/search.png')}style={style.ImageStyle}/>
			  </View>
			  
	   		 
					
<View  style={{flexDirection: 'row',marginTop:10}} >
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/qr.png')}/></View>
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/qrcode.png')}/></View>
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/fingar.png')}/></View>
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/calender.png')}/></View>
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/photo.png')}/></View>
			<View><Image style={{width: 60, height: 60}}
			source={require('../../component/image/voice.png')}/></View>
			</View>
			 <View style={{alignItems: 'flex-end',}}>
		  <View style={{flexDirection: 'row',marginLeft:220}}>
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
	backgroundColor: '#e4b4b4',
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
        color: "black",  marginLeft:20,
		textAlign:'center',
        backgroundColor: '#ffc299',
    }, 
	separator1: {  
		marginTop:20,
        fontSize: 18, 
marginLeft:20,		
		height: 50,width:150,
		    borderWidth: 1.0,
        fontWeight: 'bold',  
		 borderColor: '#ffffff',
        color: "black",  
		textAlign:'center',
        backgroundColor: 'orange',
    }, 
	inputBox:{
	width:200,
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
    height: 50,
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
