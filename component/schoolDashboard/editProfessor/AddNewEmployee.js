import React, {Component} from 'react';
import {Platform,
	 StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
  TouchableOpacity,ActivityIndicator,Picker} from 'react-native';
export default class AddNewEmployee extends Component {

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
         <Text style={style.welcome1}>Professor/Employee/Add New Employee</Text>

		 <ScrollView>
		 <View style={{marginTop:10}}>
          <View style={{flexDirection: 'row',marginTop:5,height:40,justifyContent: 'space-around',
    alignItems: 'center',backgroundColor:'#808080', borderWidth: 1.0,borderColor: '#ffffff',}}>
			<Text>id</Text>
			<Text>Last Added Employee</Text>
			<Text>Date/Time</Text>
		  </View>
		  </View>



			<Text style={{fontWeight: 'bold',fontSize:14}}>Name of Employee English</Text>
<View style={{flexDirection: 'row',justifyContent: 'space-around',}}>
		  <TextInput style={style.inputtxt}  
		  onChangeText={RfName => this.setState({RfName})}
		  placeholder="First Name"				  
		  />
		   <TextInput style={[style.inputtxt,style.inputtxt1]}  		  		  	
		   onChangeText={RmName => this.setState({RmName})}
		  placeholder="Middle Name"				  
		  />
		   <TextInput style={[style.inputtxt,style.inputtxt1]}  
  		onChangeText={RlName => this.setState({RlName})}
		  placeholder="Last Name"				  
		  />
		</View>
		    			<Text style={{fontWeight: 'bold',fontSize:14}}>Name of Employee  2nd Language</Text>
<View style={{flexDirection: 'row',justifyContent: 'space-around',}}>
		  <TextInput style={style.inputtxt}  
		  onChangeText={RfName => this.setState({RfName})}
		  placeholder="First Name"				  
		  />
		   <TextInput style={[style.inputtxt,style.inputtxt1]}  		  		  	
		   onChangeText={RmName => this.setState({RmName})}
		  placeholder="Middle Name"				  
		  />
		   <TextInput style={[style.inputtxt,style.inputtxt1]}  
  		onChangeText={RlName => this.setState({RlName})}
		  placeholder="Last Name"				  
		  />
		</View>
    
	  

		<Text style={style.txt1} >Address</Text>
	<TextInput style={style.inputtxt} 	onChangeText={officeAddress => this.setState({officeAddress})}
			placeholder="Location "/>
				<TextInput style={style.inputtxt} 	onChangeText={officeAddress => this.setState({officeAddress})}
			placeholder="Details "/>
			
								<Text style={style.txt1} >Mobile Number</Text>

		  <TextInput style={[style.inputtxt,style.inputtxt1]}  
  		onChangeText={RlName => this.setState({RlName})}
		  placeholder="Mobile Number"				  
		  />
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
  inputtxt:{
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
	backgroundColor:'#ffbf00',
    borderRadius:5,
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
