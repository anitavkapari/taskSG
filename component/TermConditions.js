import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,
  TouchableOpacity,ActivityIndicator, ScrollView,SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';

export default class TermConditions extends Component {

  static navigationOptions = {
	header: null
}
    
 
    render() {
    return (
	<ImageBackground source={require('../component/image/login.png')}
			style={style.container}>
		  <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
		  	<Text style={style.text}>Company</Text>
			<Text style={style.text}>School</Text>
		  </View>
			<ScrollView>

	<Text style={style.text}>Rules</Text>
	
	  	 	<Text style={style.text}>1</Text>
	<Text style={style.text}>2</Text>
	<Text style={style.text}>3</Text>
	<Text style={style.text}>4</Text>
	<Text style={style.text}>5</Text>
	<Text style={style.text}>6</Text>
	<Text style={style.text}>..............................................</Text>
	
	<Text style={style.text}>Conditions</Text>
	<Text style={style.text}>2</Text>
	<Text style={style.text}>3</Text>
	<Text style={style.text}>4</Text>
	<Text style={style.text}>5</Text>
	<Text style={style.text}>6</Text>
	<Text style={style.text}>..............................................</Text>
	<Text style={style.text}>Roles</Text>
	<Text style={style.text}>2</Text>
	<Text style={style.text}>3</Text>
	<Text style={style.text}>4</Text>
	<Text style={style.text}>5</Text>
	<Text style={style.text}>6</Text>
	<Text style={style.text}>..............................................</Text>
	<Text style={style.text}>Agreement</Text>
	<Text style={style.text}>2</Text>
	<Text style={style.text}>3</Text>
	<Text style={style.text}>4</Text>
	<Text style={style.text}>5</Text>
	<Text style={style.text}>6</Text>
	<Text style={style.text}>..............................................</Text>
		</ScrollView>

	 <TouchableOpacity style={style.buttonContainer}
		  		  onPress={() => this.props.navigation.navigate ('DashboardSummary')}>
	 <Text style={{fontWeight: 'bold',color:'#ffffff'}}>Accept & Agree</Text>
        </TouchableOpacity>
		

	  </ImageBackground>
    );
      }
  }

const style = StyleSheet.create({	
container:
  {
    flex: 1,
   
  },
  welcome: {
    fontSize: 20,
	color: 'red',
    textAlign: 'center',
    margin: 10
  }	,
  text:{color:'black',margin:10,fontWeight: 'bold',fontSize:18 },
  buttonContainer: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc0000',
	borderWidth: 1.0,    width:120,
	borderColor: 'black',
    borderRadius:10,marginLeft:120,marginTop:30,	
	color:'#ffffff',textAlign:'center',fontWeight: 'bold',fontSize:16,padding: 5     
  },
    roles: {
    fontSize: 20,
	color: '#ffffff',
	marginRight: 270
  }	
});
