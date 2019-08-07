import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, CheckBox,StyleSheet,ScrollView, Platform } from 'react-native';

//import PrefixForm from '../../../form/foundation/PrefixForm.js'
import FoundationService from '../../service/FoundationService.js'
import VerificationRoles from '../../form/verification/VerificationRoles.js'


export default class VerificationShare extends Component
	{
    	constructor(props)
    		{
        	super(props);

        	this.state = 
			{
			role:'Foundation'
			,shortName:'',
			roleUsersMap :{}
				, checkBoxMap : {}
   			}
    		}

    	componentDidMount()
    		{
		form = new VerificationRoles( 1, [1,2,4,8]);
		service = new FoundationService();
		service.listRolewiseUsers(form, this.rolesHandler);
    		}

	 rolesHandler = ( response ) =>
		{
		//alert( JSON.stringify( response ));
		//response.roleUsersMap.forEach(this.handleRoleUsers); 
		for (var key in response.roleUsersMap) 
			{
  			if (response.roleUsersMap.hasOwnProperty(key)) 
				{
    				//alert(key + " -> " + response.roleUsersMap[key]);
  				}
			}
		this.setState( {roleUsersMap : response.roleUsersMap });
		}
	
	handleRoleUsers( values, key )
		{
		for( user in values )
			{
  			//alert(key, user.userId);
			}
		}

	setShortName( name )
		{
            	this.setState({ shortName: name });
		}

    	render()
    		{
        	return(
		  	<View style = { styles.container1 }>
			<View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop:10}}>
<TouchableOpacity style={styles.buttonContainer} 	
onPress={this.onContinue}>
<Text style={{fontWeight: 'bold'}}>Continue..</Text>
        </TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonContainer} 	
onPress = {() => this.props.onCancel()}>
<Text style={{fontWeight: 'bold'}}>Cancel</Text>
        </TouchableOpacity>
		</View>
			<ScrollView>

			{this.listRolewiseUsers ()}
			</ScrollView>


							
			</View>

        		);
    		}

	onContinue=() =>
		{
		var userList = [];

		for (var key in this.state.roleUsersMap) 
			{
			this.state.roleUsersMap[key].map( ( user ) =>  
				{
				if( user.checked )
					{
					userList.push( {taskId:key, userId:user.userId } );
					}
				} );
			}

		this.props.onContinue( userList );
		}

	onCancel()
		{
		}

	 listRolewiseUsers = () =>
		{
		var list = [];

		for (var key in this.state.roleUsersMap) 
		//this.state.roleUsersMap.map(() 
			{
  			if (this.state.roleUsersMap.hasOwnProperty(key)) 
				{
				list.push (
					<View  style={{flexDirection: 'row',padding:5,marginTop:20}}>
					<CheckBox
      					value={false}			
	  				onValueChange={() => this.setState({ checked1: !this.state.checked1 })}/>
	 				<Text style={{fontWeight: 'bold',margin:5}}>{key}</Text>
					</View> );

				//for( var userIndex in this.state.roleUsersMap[key] )
				this.state.roleUsersMap[key].map( ( user ) =>  
					{
					//var user = this.state.roleUsersMap[key][userIndex];
					list.push( <View  style={{flexDirection: 'row'
								,padding:5
								,marginTop:20
								,marginLeft:20}}>
					<CheckBox
      					value={user.checked}			
					onValueChange={() => 
						this.handleSelect( user )}/>
					<Text style={{fontWeight: 'bold',margin:5}}>
					{user.userFirstName}
					{user.userLastName}
					</Text>
					</View> );
					} );

    				}
		//alert( msg );
			}
    		return list;
  		}

	handleSelect = ( userParam ) =>
		{
		//alert( "key = " + keyParam + "," + userIndexParam + ",id=" + userParam.userId );
		//alert( ",id=" + userParam.userId );
			/*
		for (var key in this.state.roleUsersMap) 
			{
			if( keyParam == key )
				{
  				if (this.state.roleUsersMap.hasOwnProperty(key)) 
					{
					for( var userIndex in this.state.roleUsersMap[key] )
						{
						if( userIndexParam == userIndex )
							{
							var user = this.state.roleUsersMap[key][userIndex];
							user.checked = !user.checked;
							//alert( "afr = " + user.checked + "," + user.userId );
							this.setState( { roleUsersMap : this.state.roleUsersMap } );
							break;
							}
						}
					}
				}
			}
			*/
			userParam.checked = !userParam.checked;
			this.setState( { roleUsersMap : this.state.roleUsersMap } );
		}

	addUser = ( user ) => 
		{
		list.push( <View  style={{flexDirection: 'row',padding:5,marginTop:20,marginLeft:20}}>
		<CheckBox
      		value={this.state.checked1}			
		onValueChange={() => this.setState({ checked1: !this.state.checked1 })}/>
		<Text style={{fontWeight: 'bold',margin:5}}>{user.userId}</Text>
		</View> );
		//msg  += key + "$$" + JSON.stringify( this.state.roleUsersMap[key] );
		//msg += JSON.stringify( user ) + "$$";
		msg += user.firstName + user.lastName  + "$$";
		}


	}

const styles = StyleSheet.create(
{
    container1:
    {
		flex: 1,padding:20,
	backgroundColor: '#99ffff',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	inputtxt:{
	color:'black',textAlign:'center',fontWeight: 'bold',fontSize:14,
	backgroundColor:'#ffffff',		marginTop:30,padding:10,
		   height: 40,textAlign:'center'
},
	container2: {
      padding: 10,
      marginTop: 5,
      backgroundColor: 'gray',
      alignItems: 'center',
   },
   text: {
      color: 'black'
   },
   welcome1: {
    fontSize: 20,
	borderColor: '#ffffff',
	    color: 'black',marginLeft:10,
		 borderWidth: 1.0,	  width:300,
backgroundColor:'#e6ac00',marginLeft:30,
    textAlign: 'center',marginBottom:30,
			height: 50,marginTop:40,
  },
    buttonContainer: {
    height:40,
    backgroundColor: "#ffbf00",
	borderWidth: 1.0,    width:120,
	borderColor: '#cc6600',
    borderRadius:5,	
	color:'black',justifyContent: 'center',
    alignItems: 'center',fontWeight: 'bold',fontSize:14,padding: 10    
  },
   text: {
      color: 'black',marginTop:5,fontWeight:'bold',fontSize:16,marginTop:10
   },
 
    radioButton:
    {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    radioButtonHolder:
    {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioIcon:
    {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label:
    {
        marginLeft: 10,
        fontSize: 20
    },

    selectedTextHolder:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectedText:
    {
        fontSize: 18,
        color: 'white'
    }
});
