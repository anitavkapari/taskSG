import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker,CheckBox ,Dopdown} from 'react-native';
export default class AddNewStandard extends Component {

	static navigationOptions = {
	header: null
}
 componentDidMount(){}
	constructor(props){
    super(props);
    this.state={
	
    }
    }
	state = {  
        choosenIndex: 0  
    };
    render() {
		
    return (
	    <View style={style.container}>	
		<Text style={style.welcome1}>School/Collection/Add New standard</Text>

		 <View style={{marginTop:10}}>
          <View style={{flexDirection: 'row',marginTop:5,height:40,justifyContent: 'space-around',
    alignItems: 'center',backgroundColor:'rgba(80,80,110,.170)',borderWidth: 1.0,borderColor: '#ffffff'}}>
			<Text>App Name</Text>
			<Text>id</Text>
			<Text>Date/Time</Text>
		  </View>
		  </View>
		  <Picker
  mode="dropdown"
 style={style.inputBox}
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="10001" value="java" />
  <Picker.Item label="10002" value="js" />
</Picker>
		  <TextInput style={style.inputtxt} placeholder='7th' 
		onChangeText={shortName => this.setShortName(shortName)}
		/>
		
       <TouchableOpacity   onPress={()=>this.Save()} >    
             <Text style={style.button}>Save</Text>
           </TouchableOpacity>
	  </View>

    );
      }
	  Save  =() =>
 		{
		const{userID} = this.state;
		const{password} = this.state;
		service = new UserService(); 
		service.getUserId(userID, this.saveHandler, this.props.navigation);
		}
  
}
const style = StyleSheet.create({
	 container:
  {
    flex: 1,
	backgroundColor: '#99ffff',
    
  },
	inputtxt:{
	color:'black',textAlign:'center',fontWeight: 'bold',fontSize:14,
	backgroundColor:'#ffffff',		marginTop:30,padding:10,
		   height: 40,textAlign:'center'
},
	button: {
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
	 marginLeft:100,
	 fontWeight: 'bold',  
    width:130, height: 40,
	marginTop:10,
		marginBottom:10,
	backgroundColor:'#cc0000',
    borderRadius:30,
  },
welcome1: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
		 borderWidth: 1.0,	 
backgroundColor:'#e6ac00',
    textAlign: 'center',
			height: 40,marginTop:20,
  },
  
});
