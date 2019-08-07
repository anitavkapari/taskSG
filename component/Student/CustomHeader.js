import React from "react";
import { Header } from "react-navigation";
import { StyleSheet,View,Dimensions, Platform ,ScrollView,ImageBackground,TouchableOpacity,Text,Image } from "react-native";

import ShortCutPanel from './ShortCutPanel.js';
import ThoughtForDay from './ThoughtForDay.js';

const CustomHeader = props => {
	    let screenWidth = Dimensions.get('window').width;

  return (
	  <View
      style={{
        height: 600,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}>
	  		

	  			 <View  style={style.separator}>

	  <Image
           source={{uri:
		   'https://i0.wp.com/www.sevenoaksacademy.ca/wp-content/uploads/2018/08/person-icon-5.png?ssl=1',}}
             style={style.ImageStyle}/>
		<View style={{flexDirection: 'column',marginTop:8,backgroundColor:'sandybrown',padding: 10}}>
		<Text style={{fontWeight: 'bold',fontSize:35, color:'#ffffff',
		textAlign: 'center'}}>GuruDevSchool
			 </Text>
<Text style={{fontWeight: 'bold',fontSize:18, color:'#ffffff',textAlign:'center'}}>
		Online Education App
			</Text>
			</View>
			</View>
			
			<View>
<ScrollView
			horizontal={true}
			>
			 <View  style={[style.SectionStyle, { width: screenWidth }]}>
			<Image
           source={{uri:
		   'https://i0.wp.com/www.sevenoaksacademy.ca/wp-content/uploads/2018/08/person-icon-5.png?ssl=1',}}
             style={style.ImageStyle}/>
			 <View style={style.container2}>
			 <Text style={{fontWeight: 'bold',fontSize:16,marginTop:3, color:'#ffffff',textAlign:'center'}}>
			Sweta Shindhe
			</Text>
			  <Text style={{fontWeight: 'bold',fontSize:16,marginTop:15, color:'#ffffff',textAlign:'center'}}>
			ffff11111
			</Text>					
			</View>
			</View>	
			 <View  style={[style.SectionStyle, { width: screenWidth }]}>
			<Image
           source={{uri:
		   'https://i0.wp.com/www.sevenoaksacademy.ca/wp-content/uploads/2018/08/person-icon-5.png?ssl=1',}}
             style={style.ImageStyle}/>
			 <View style={style.container2}>
			 <Text style={{fontWeight: 'bold',fontSize:16,marginTop:3, color:'#ffffff',textAlign:'center'}}>
			Sweta Shindhe
			</Text>
			  <Text style={{fontWeight: 'bold',fontSize:16,marginTop:15, color:'#ffffff',textAlign:'center'}}>
			ffff11111
			</Text>					
			</View>
			</View>				
				</ScrollView>
							</View>
							
			<View style={style.container2}>
			<Text style={{fontWeight: 'bold',fontSize:16,marginTop:15, color:'#ffffff',textAlign:'center'}}>
			ffff11111
			</Text>
			 <Text style={{fontWeight: 'bold',fontSize:16,marginTop:3, color:'#ffffff',textAlign:'center'}}>
			Sweta Shindhe
			</Text>
			  					
			</View>

		<View style={{flexDirection: 'row'}}>
					<View style={style.button}>
<TouchableOpacity  style={{ backgroundColor:'#ffffff',width:110,height: 40,borderRadius: 10}}>
			<Text style={style.buttontxt}>Activity Log</Text>
			</TouchableOpacity>
			  </View>
						<View style={style.button}>
<TouchableOpacity  style={{ backgroundColor:'#ffffff',width:90,height: 40,borderRadius: 10,marginLeft:10}}>
			<Text style={style.buttontxt}>Online</Text>
			</TouchableOpacity>
			  </View>
						<View style={style.button}>
<TouchableOpacity  style={{ backgroundColor:'#ffffff',width:90,height: 40,borderRadius: 10}}>
			<Text style={style.buttontxt}>Status</Text>
			</TouchableOpacity>
			</View>
			  </View>
			<View style={{flexDirection: 'row',marginTop:5,backgroundColor:'lightsalmon'}}>
			<Text style={{color:'black',margin:20,fontWeight: 'bold',fontSize:18 }}>Current Location</Text>
			  <Image style={{width: 40, height: 40,padding: 10, margin: 10,marginLeft:130}} 
			  source={require('../../component/image/map.png')}/>
		  </View>
		  
		  <View style={{flexDirection: 'column',marginTop:5,backgroundColor:'lightsalmon'}}>
		  
		  </View>
	  	<ThoughtForDay />
		  
		  <View style={{flexDirection: 'row',marginTop:5,backgroundColor:'sandybrown'}}>
			<View  style={style.button}>
			<TouchableOpacity  style={{ backgroundColor:'silver',height: 40,borderRadius: 10}}>
			<Text style={style.buttontxt}>Start</Text>
			</TouchableOpacity>
			</View>
			<View style={style.button}>
			 <TouchableOpacity style={{backgroundColor:'palegoldenrod',height: 40,borderRadius: 10}}>
			<Text style={style.buttontxt}>Break</Text>
			</TouchableOpacity>
			</View>
			<View style={style.button}>
			 <TouchableOpacity  style={{backgroundColor:'darksalmon',height: 40,borderRadius: 10}}>
			<Text style={style.buttontxt}>Stop</Text>
			</TouchableOpacity>
			</View>
			</View>
	  		<ShortCutPanel/>
    </View>


			
  );
};

const style = StyleSheet.create({
	container: {
			flex: 1,
			justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
		
	},
	container2: {
	       flexDirection: 'column',
          justifyContent: 'center',
      alignItems: 'center',
		marginLeft:40,
		   
	},
	 ImageStyle: {
    padding: 10,
    margin: 10,
    height: 80,
    width: 80,
    resizeMode: 'stretch',
	
  },
  
	inputBox:{
	width:250,
      fontSize:18,
    color:'#ffffff',
	 borderWidth: 0.5,
    marginVertical: 10
	},
	  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: '#000',		marginTop:10,
    height: 100,
  },
 separator: {  
        flexDirection: 'row',
    backgroundColor: 'sandybrown',
    borderColor: '#000',		marginTop:10,
    height: 100,
    },   
    button:{width: 110,height: 60,padding:10,marginLeft:8},
buttontxt:{
	color:'black',textAlign:'center',fontWeight: 'bold',fontSize:14,padding: 5     
},
seeAll:{marginLeft:250,color:'skyblue',fontWeight: 'bold',fontSize:14},
seeAll1:{marginLeft:250,color:'gray',fontWeight: 'bold',fontSize:14},

text:{backgroundColor:'#ffffff',marginTop:5,color:'black',fontWeight: 'bold',fontSize:14,padding: 10}
});

export default CustomHeader;

