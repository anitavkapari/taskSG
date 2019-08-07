import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';
  

import BaseTab from './BaseTab.js';
import EditFoundation from '../foundation/EditFoundation.js';
import EditCollection from '../SchoolCollection/EditCollection.js';
import EditTermsConditions from '../TermsConditions/EditTermsConditions.js';
import EditControl from '../schoolDashboard/EditControl.js';
import EditControlParent from '../schoolDashboard/EditControlParent.js';
import EditControlProfessor from '../schoolDashboard/EditControlProfessor.js';
import EditControlStudent from '../schoolDashboard/EditControlStudent.js';

export default class EditTab extends Component
	{

		constructor( props ) 
		{
    		super( props );
		var param = this.props.navigation.getParam( 'currentClass', '-1' );
                var msg = JSON.stringify( param );
                //alert(  'msg=' + msg );
                //alert( param.tabIndex );

		this.state=
			{
                 	currentClass: param.currentClass
			}
  		}


    	render() 
		{
	
		if( this.state.currentClass == 0 )
			{
    			return (
				<EditFoundation 
				/>
    				);
			}
		else
		if( this.state.currentClass == 1 )
			{
    			return (
				<EditCollection 
				/>
    				);
			}
			else
		if( this.state.currentClass == 2 )
			{
    			return (
				<EditTermsConditions 
				/>
    				);
			}
			
		else
			
		if( this.state.currentClass == 3 )
			{
    			return (
				<EditControl 
				/>
    				);
			}
			else
			
		if( this.state.currentClass == 4 )
			{
    			return (
				<EditControlProfessor 
				/>
    				);
			}
			else
			
		if( this.state.currentClass == 5 )
			{
    			return (
				<EditControlParent 
				/>
    				);
			}
						else
			
		if( this.state.currentClass == 6 )
			{
    			return (
				<EditControlStudent 
				/>
    				);
			}
			else
			{
    			return (
				<EditFoundation 
				/>
    				);
			}
		}
	}
