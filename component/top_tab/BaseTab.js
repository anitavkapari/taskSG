import React, {Component} from 'react';
import { Platform,
	 StyleSheet, Text, View,  TextInput,Image,ScrollView,
  TouchableOpacity,ActivityIndicator, SafeAreaView,ImageBackground} from 'react-native';
  import MaterialTabs from 'react-native-material-tabs';
  


export default class BaseTab extends Component 
	{

 	static navigationOptions = 
		{
		header: null
		}

		constructor( props ) 
		{
    		super( props );


		var param = this.props.navigation.getParam( 'currentClass', '-1' );
                var msg = JSON.stringify( param );
                //alert( param.tabIndex );

		this.state=
			{
                 	currentClass: param.currentClass
			}
  		}


	/*
    	render() 
		{
  		}
	*/

	}
