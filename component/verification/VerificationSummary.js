import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity,ScrollView, StyleSheet, Platform } from 'react-native';

//import PrefixForm from '../../../form/foundation/PrefixForm.js'


export default class VerificationSummary extends Component
	{
    	constructor(props)
    		{
        	super(props);

        	this.state = 
			{
			role:'Foundation'
			,date: ''
			,shortName:''
   			}
    		}

    	componentDidMount()
    		{
				 var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
    		}

	setShortName( name )
		{
            	this.setState({ shortName: name });
		}

    	render()
    		{
        	return(
		  	<View style = { styles.container }>
		<ScrollView>

                     	<Text style = {styles.text}>
                        You {this.props.summary.userDisplayId}
                     	</Text>

                     	<Text style = {styles.text}>
                        {this.props.summary.userName}
                     	</Text>

                     	<Text style = {styles.text}>
                        {this.props.summary.userLocaleName}
                     	</Text>

                     	<Text style = {styles.text}>
                        Location: {this.props.summary.location}
                     	</Text>

                     	<Text style = {styles.text}>
                        Login by: {this.props.summary.userId} at  {this.state.date}
                     	</Text>
			

                     	<Text style = {styles.text1}>
                        Edited Task: 
                     	</Text>

                     	<Text style = {styles.text1}>{this.props.summary.taskDesc} </Text>
						<Text style = {styles.text1}>{this.props.summary.taskContent} </Text>
					
						<View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
						<Text style = {styles.text}>is saved at:</Text>
						<Text style = {styles.text}> {this.state.date}</Text>
						</View>

<View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop:20}}>
      		<TouchableOpacity style={styles.buttonContainer}onPress = {() => this.share()}>
				<Text style={{fontWeight: 'bold'}}>Share</Text>
        </TouchableOpacity>
		
		<TouchableOpacity style={styles.buttonContainer}onPress = {() => this.props.onCancel()}>
		<Text style={{fontWeight: 'bold'}}>Cancel</Text>
        </TouchableOpacity>
							</View>
							</ScrollView>

			</View>

        		);
    		}

	share()
		{
			//alert('hi');
		this.props.controller({});
		}

	cancel()
		{
		}

	}

const styles = StyleSheet.create(
{
    container:
    {
	flex: 1,padding:10,
	backgroundColor: '#99ffff',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	text1: {
      color: 'black',fontWeight:'bold',textAlign:'center',
	  fontSize:16,marginTop:10,height:45,backgroundColor:'rgba(80,80,110,.170)'
   },
   text: {
      color: 'black',marginTop:5,fontWeight:'bold',fontSize:20,marginTop:10
   },
   
     buttonContainer: {
    height:40,
    backgroundColor: "#ffbf00",
	borderWidth: 1.0,    width:120,
	borderColor: '#cc6600',
    borderRadius:5,	
	color:'black',justifyContent: 'center',
    alignItems: 'center',fontWeight: 'bold',fontSize:14   
  },
 
});
