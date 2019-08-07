import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';
  

import EditHome from './edit/EditHome.js';
import AddCapital from './edit/AddCapital.js';
import AddNewStandard from './edit/AddNewStandard.js';
import AddNewBoard from './edit/AddNewBoard.js';
import AddNewDivision from './edit/AddNewDivision.js';
import AddNewMedium from './edit/AddNewMedium.js';
import AddNewSubject from './edit/AddNewSubject.js';


export default class EditCollection extends Component {

 static navigationOptions = 
		{
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

				<AddCapital 
             				controller={this.controller}
				/>	
				)
			}
		else
		if( this.state.screen == 2 )
			{
    			return (
				<AddNewStandard
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 3 )
			{
    			return (
				<AddNewBoard  
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 4 )
			{
    			return (
				<AddNewDivision   
             			controller={this.controller}
				/>
    				);
			}
			else
		if( this.state.screen == 5 )
			{
    			return (
				<AddNewMedium  
             			controller={this.controller}
				/>
    				);
			}
		
			else
		if( this.state.screen == 6 )
			{
    			return (
				<AddNewSubject  
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

 

