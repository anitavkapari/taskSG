import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker,CheckBox } from 'react-native';
export default class PersonalInformationSearch extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
 checked: false,
	
    }
    }
    render() {
    return (
<ImageBackground source={require('../component/image/loginimage.jpg')}style={style.container}>
<ScrollView>

<View style={{flexDirection: 'row',justifyContent: 'space-around',padding:10}}>
<Text style={style.welcome1}>Personal Information</Text>
<CheckBox style={{width: 30, height: 30,marginTop:10}}  value={this.state.checked}onValueChange={() => 
this.setState({ checked: !this.state.checked })}/>   
<Image style={{width: 40, height: 40,marginTop:10}} 
source={require('../component/image/backup.png')}/>
</View>

</ScrollView>

	    </ImageBackground> 

    );
      }
  
}
const style = StyleSheet.create({
	container: {
			flex: 1,	
	},
	welcome1: {
    fontSize: 20,padding:10,
	borderColor: '#ffffff',
	color: '#ffffff',
borderWidth: 1.0,	  width:200,
backgroundColor:'rgba(180,80,120,.1)',
    textAlign: 'center',
			height: 50,marginTop:20,
  },
});
