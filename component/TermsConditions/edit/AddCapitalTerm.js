import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
export default class AddCapitalTerm extends Component<{}>
{
	static navigationOptions = {
	header: null
}
    constructor(props)
    {
        super(props);

        this.state = {
		
		}
		
   }
    

    componentDidMount()
    {
    }
	render()
    {
        return(
		  <View style = { style.container1 }>
		<Text style={style.welcome1}>TermsConditions/Add Capital</Text>
			<View style={{flexDirection: 'row',marginTop:20,justifyContent: 'space-around'}}>
			 <Text style={style.txt}>For Terms</Text>
             <Text style={style.txt}>For Conditons</Text>
			</View>
	 	<View style={{flexDirection: 'row',marginTop:10,justifyContent: 'space-around'}}>
             <Text style={style.txt}>For permission</Text>
             <Text style={style.txt}>For Agreement</Text>
			</View>
	 	<TextInput style={style.inputtxt} placeholder='New capital..'/>

			<TouchableOpacity style={style.buttonContainer}>
	 <Text style={{fontWeight: 'bold',fontSize:16,color:'#ffffff'}}
               onPress = {() => this.save()}>
		Save</Text>
        </TouchableOpacity>

			</View>

        );
    }

	

	}

const style = StyleSheet.create(
{
    txt:
    {
	color: 'black',backgroundColor:'#e6ac00',textAlign:'center',
	},
	inputtxt:{
	color:'black',textAlign:'center',fontWeight: 'bold',fontSize:14,
	backgroundColor:'#ffffff',		marginTop:30,padding:10,
		   height: 40,textAlign:'center'
},
   welcome1: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',
backgroundColor:'#e6ac00',
    textAlign: 'center',
			height: 40,marginTop:20,
  },
    buttonContainer: {
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
	borderWidth: 1.0,    width:120,
	borderColor: 'black',
    borderRadius:30,marginLeft:120,marginTop:250,	
	textAlign:'center',    
  },
 container1:
  {
    flex: 1,
	backgroundColor: '#99ffff',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
    

   
});
