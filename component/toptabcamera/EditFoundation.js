import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';
  

import EditHome from './edit/EditHome.js';
import AddCapital from './edit/AddCapital.js';
import UpdateCapital from './edit/UpdateCapital.js';
import AddNewFoundations from './edit/AddNewFoundations.js';
import AllocateAdminTask from './edit/AllocateAdminTask.js';
import DisplayAdmin from '../foundation/DisplayAdmin.js';
import DisplayAllocateAdminTask from '../foundation/DisplayAllocateAdminTask.js';
import AddNewAdmin from './edit/AddNewAdmin.js';

import ProfAndEmpTask from './edit/ProfAndEmpTask.js';


export default class EditFoundation extends Component {

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
    				);
			}
		else
		if( this.state.screen == 2 )
			{
    			return (
				<AddNewFoundations  
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 3 )
			{
    			return (
				<DisplayAdmin
             			controller={this.controller}
				/>
    				);
			}
		else
		if( this.state.screen == 4 )
			{
    			return (
				<DisplayAllocateAdminTask  
             			controller={this.controller}
				/>
    				);
			}
			else
		if( this.state.screen == 5 )
			{
    			return (
				<AllocateAdminTask  
             			controller={this.controller}
				/>
    				);
			}
			else
		if( this.state.screen == 6 )
			{
    			return (
				<AddNewAdmin  
             			controller={this.controller}
				/>
    				);
			}
			else
		if( this.state.screen == 7 )
			{
    			return (
				<ProfAndEmpTask  
             			controller={this.controller}
				/>
    				);
			}
			else
		if( this.state.screen == 8 )
			{
    			return (
				<UpdateCapital  
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

 

