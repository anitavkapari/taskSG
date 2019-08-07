import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker} from 'react-native';
export default class AddNewSchool extends Component {

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
         <Text style={style.welcome1}>School/Add New School</Text>

		 <ScrollView>
		 <View style={{marginTop:10}}>
          <View style={{flexDirection: 'row',marginTop:5,height:40,justifyContent: 'space-around',
    alignItems: 'center',backgroundColor:'#808080', borderWidth: 1.0,borderColor: '#ffffff',}}>
			<Text>id</Text>
			<Text>Last Added School</Text>
			<Text>Date/Time</Text>
		  </View>
		  </View>

		<Picker
  mode="dropdown"
 style={style.inputBox}
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="ffff" value="java" />
  <Picker.Item label="dddd" value="js" />
</Picker>
		      <Picker
  mode="dropdown"
 style={style.inputBox}
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="10001" value="java" />
  <Picker.Item label="10002" value="js" />
</Picker>
		      


		  <TextInput style={style.inputBox}  
		onChangeText={appName => this.setState({appName})}
				 autoFocus={true}
		  placeholder="Name of School(English)"				  
		  />
		    
    
	   <TextInput style={style.inputBox}  
		onChangeText={namefoundation => this.setState({namefoundation})}
		placeholder=" Name of School (MotherTongue)"     	  				  
		  />
     
			<TextInput style={style.inputBox}  
		onChangeText={namefoundation => this.setState({namefoundation})}
		placeholder=" Short Name (English) "     	  				  
		  />		 
		
 			<TextInput style={style.inputBox}  
		onChangeText={namefoundation => this.setState({namefoundation})}
		placeholder=" Short Name (MotherTongue) "     	  				  
		  />

		<Text style={style.txt1} >Address</Text>
	<TextInput style={style.inputBox} 	onChangeText={officeAddress => this.setState({officeAddress})}
			placeholder="Location "/>
				<TextInput style={style.inputBox} 	onChangeText={officeAddress => this.setState({officeAddress})}
			placeholder="Details "/>
			
			<View style={{flexDirection: 'row',backgroundColor:'#ccffe6',
			marginTop:15,padding: 5,borderWidth: 1.0, height:40, borderColor: '#ffffff'}}>
		<Text style={style.txt}>Now I am Current Location</Text>

			  <Image style={{width: 30, height: 30,marginLeft:100}} 
			  source={require('../../image/map.png')}/>
		  </View>
		       </ScrollView>

       <TouchableOpacity 
			  onPress={()=>this.Save()}>
             <Text style={style.button}>Save</Text>
           </TouchableOpacity>
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
txt1:{marginTop:15,fontWeight: 'bold',paddingLeft:10, fontSize:14},

txt:{color:'black',fontWeight: 'bold',paddingLeft:10, fontSize:14},
  inputBox:{
		marginTop:15,
        fontSize: 18, paddingLeft:10, 
		 borderWidth: 1.0,
		 borderColor: '#ffffff',
        backgroundColor: '#ccffe6',
	},
	
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
 
   welcome1: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
		 borderWidth: 1.0,
backgroundColor:'#e6ac00',
    textAlign: 'center',
			marginTop:30,
  },
    
     
 	
});
