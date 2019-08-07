import React, {Component} from 'react';
import {Platform,
	 StyleSheet,  View,Text, Button, TextInput,Image,TouchableOpacity,
  TouchableHighlight,ImageBackground} from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

export default class SchoolHome extends Component {
	static navigationOptions = {
	header: null
}
    componentDidMount(){}
    render() {
    return (
	
	<ImageBackground source={require('../../component/image/loginimage.jpg')}
			style={style.container}>   
			<View style={style.container2}>
			<View>
			<TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Login')}>
			<Image
      style={{ width: 120,height: 50,marginLeft:230,marginTop:10}}
       source={require('../../component/image/myprofile.png')}
	   /></TouchableOpacity>
			</View>
			</View>
			
			<Text style={{fontSize:15,marginLeft:70,color:'#ffffff',fontWeight: 'bold'}}>Sachin Sawant</Text>
			
				<View style={style.container3}>
			<View>
			<Image style={{ width: 80,height: 100,marginTop:5,marginLeft:10}}
       source={require('../../component/image/logoSchool.jpg')}/>
	   <Text style={{fontSize:15,color:'red',fontWeight: 'bold',marginLeft:20}}>GURUDEV</Text>
			</View>
			<View>
			<Text style={{ fontSize:50,color:'black',fontWeight: 'bold',marginTop:20,marginLeft:50}}>GuruDev</Text>
	   <Text style={{color:'black',fontSize:15,fontWeight: 'bold',marginLeft:80}}>Online School Solution </Text>
			</View>
			</View>
			<Image style={{ width: 340,height: 130,marginLeft:10,marginTop:10}}
       source={require('../../component/image/schoolimage.jpg')}/>
				<View style={{marginTop:10,justifyContent: 'center',alignItems:'center'}}>
			<TouchableHighlight  style={style.buttonHover}>
          <Text style={{fontWeight: 'bold',fontSize:18, color:'#ffffff',fontFamily: 'Gill Sans',
textAlign: 'center'}}>School</Text>
        </TouchableHighlight >
			</View>	
			<View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems:'center',marginTop:5}}>
							<View>
			<TouchableHighlight style={style.buttonHover}>
          <Text style={{fontWeight: 'bold',fontSize:18, color:'#ffffff',textAlign: 'center'}}>New</Text>
        </TouchableHighlight>
			</View>	

							<View>
			<TouchableHighlight style={style.buttonHover}>
          <Text style={{fontWeight: 'bold',fontSize:18, color:'#ffffff',textAlign: 'center'}}>Winner</Text>
        </TouchableHighlight>
			</View>	
						</View>	

<View style={{ marginTop:5,justifyContent:'center',alignItems:'center'}}>
			<TouchableHighlight style={style.buttonHover}>
          <Text style={{fontWeight: 'bold',fontSize:18, color:'#ffffff',textAlign: 'center'}}>Online</Text>
        </TouchableHighlight>
		</View>	

		
				<View  style={{flexDirection: 'row',justifyContent: 'center', alignItems:'center'
				,marginTop:20}} >
				<View><Image style={{width: 35, height: 35,marginLeft:5, resizeMode: 'contain',}}
			source={require('../../component/image/map.png')}/>
			</View>
			<View><Image style={{width: 30, height: 30,marginLeft:5, resizeMode: 'contain',}}
			source={require('../../component/image/whatsapp.png')}/>
			</View>
			<View>
			<Text style={{fontWeight: 'bold',color: 'dodgerblue',
		  fontSize:15,marginLeft:5}}>Customer Care</Text>
				</View>
				<View><Image style={{width: 30, height: 30,marginLeft:5, resizeMode: 'contain',}}
			source={require('../../component/image/voicecall.png')}/>
			</View>
			<View><Image style={{width: 50, height: 50, resizeMode: 'contain',}}
			source={require('../../component/image/email.png')}/>
			</View>
							</View>
		<Text style={style.text} onPress={() => this.props.navigation.navigate('Home')}>Devikas Software Solution Pvt Ltd</Text>


	</ImageBackground> 
    );
      }
  
}
const style = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
	container2: {
	       flexDirection: 'column', 	
	},
	container3: {
	       flexDirection: 'row', 	
	},
	text:{ fontWeight: 'bold',color:'black',fontSize:16,marginBottom:5,marginLeft:50},
	
  buttonHover: {
    borderRadius:25,
    paddingTop: 5,borderColor: 'black',
    borderWidth:1.0 ,
    padding: 5,
	height:35,
	width:120, shadowColor: 'black',
    shadowOffset: { width: 50, height: 35 },
    shadowOpacity: 2.8,
    shadowRadius: 2,
    elevation: 8,
    backgroundColor: 'red',
    color: '#FFFFFF'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});