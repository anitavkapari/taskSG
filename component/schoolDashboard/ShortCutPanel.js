import React from "react";
import { Header } from "react-navigation";
import { StyleSheet,View, Platform ,ImageBackground,TouchableOpacity,Text,Image } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';


import ShortCutButton  from './ShortCutButton.js'; 

const ShortCutPanel = props => {
  return (
	  /*
	  <View
      style={{
        height: 80,
        marginTop: Platform.OS == "ios" ? 20 : 0
	,flexDirection: 'row'
	, backgroundColor: 'rgba(255,252,252,0.3)'
      }}>
		<ShortCutButton {{color:'yellow', letter:'A'}}/>
    </View>
    */
	<View style={style.container}>

		<ShortCutButton color='yellow' letter='A' >
		</ShortCutButton>
		<ShortCutButton color='red' letter='H' >
		</ShortCutButton>
		<ShortCutButton color='blue' letter='B' >
		</ShortCutButton>
		<ShortCutButton color='green' letter='P' >
		</ShortCutButton>
		<ShortCutButton color='brown' letter='T' >
		</ShortCutButton>

    	</View>



			
  );
};



const style = StyleSheet.create({
	circle: {
		width : 80
		,height: 80
		, borderRadius: 40
	},
	 headline: {
        fontWeight: 'bold',
        fontSize: 18,
    marginTop: 0,
        width: 80,
        height: 80,
    backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
	container: {
			flex: 1,
	       flexDirection: 'row',
			justifyContent: 'center',
    alignItems: 'center',
	marginTop:10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
		,    backgroundColor: 'rgba(80,80,80,.1)',

		
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
	  width:310,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: '#000',
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
 separator: {  
       padding:10,
		marginTop:5,
        fontSize: 18,  
		height: 50,
        fontWeight: 'bold',  
        color: "black",  
        backgroundColor: 'orange',
    },   
    button:{width: 110,height: 60,padding:10},
buttontxt:{
	color:'black',textAlign:'center',fontWeight: 'bold',fontSize:14,padding: 5     
},
seeAll:{marginLeft:250,color:'skyblue',fontWeight: 'bold',fontSize:14},
seeAll1:{marginLeft:250,color:'gray',fontWeight: 'bold',fontSize:14},

text:{backgroundColor:'#ffffff',marginTop:5,color:'black',fontWeight: 'bold',fontSize:14,padding: 10}
});

export default ShortCutPanel;

