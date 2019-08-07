import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';
  
import EditHome from './edit/EditHome.js';
import AddCapitalTerm from './edit/AddCapitalTerm.js';
import AddNewConditions from './edit/AddNewConditions.js';
import AddNewPermission from './edit/AddNewPermission.js';
import AddNewTerms from './edit/AddNewTerms.js';


export default class EditTermsConditions extends Component {

static navigationOptions = {
	header: null
}
constructor() 
		{
    		super();

		this.state=
			{
                 	screen:0
		
			}
  		}


    	render() 
		{
	
		if( this.state.screen == 0 )
			{
    			return (
				<EditHome 
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 1 )
			{	
		    			return (

				<AddCapitalTerm 
             				controller={this.controller}
				/>	
				)
			}
		else
		if( this.state.screen == 2 )
			{
    			return (
				<AddNewConditions
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 3 )
			{
    			return (
				<AddNewPermission  
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 4 )
			{
    			return (
				<AddNewTerms   
             			controller={this.controller}
				/>
    				);
			}
		}

	controller = (item) => 
		{
		this.setState({screen : item});
  		}
}

