import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, TouchableHighlight, ImageBackground,
	TouchableOpacity, ActivityIndicator, ScrollView
} from 'react-native';
export default class CreateAccount extends Component {

	static navigationOptions = {
		header: null
	}
	constructor(props) {
		super(props);
		this.state = {
			//userID:this.props.navigation.state.params.NameOBJ,	 
		}
	}
	render() {
		const { navigation } = this.props;

		const user = navigation.getParam('user', '0');
		return (
			<ImageBackground source={require('../../component/image/login.png')}
				style={style.container}>
				<ScrollView>

					<View style={{
						flexDirection: 'column',
						justifyContent: 'center', alignItems: 'center', marginTop: 10,
						backgroundColor: 'rgba(255,200,25,.45)', height: 100
					}}>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>
							Welcome
			</Text>
						<Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>			{user.userId}

						</Text>
					</View>
					<View style={{ alignItems: 'flex-end', fontSize: 18, marginRight: 20 }} >
						<Text style={{ color: 'mediumturquoise' }}>
							Change
			</Text>
					</View>

					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ color: 'black', fontSize: 18 }}>
							Location:  Kharadi Pune
			</Text>
					</View>

					<Image style={{ width: 370, height: 170, marginTop: 10 }} source={require('../../component/image/mapLocation.jpg')} />

					<View style={{ flexDirection: 'column', marginTop: 8, backgroundColor: 'rgba(80,80,110,.170)', padding: 10 }}>
						<Text style={{
							fontWeight: 'bold', fontSize: 18, color: '#ffffff',
							textAlign: 'center'
						}}>You are new for We</Text>
						<Text style={{ fontWeight: 'bold', fontSize: 35, color: '#ffffff', textAlign: 'center' }}>
							Create New Account</Text>
					</View>

					<View style={{ alignItems: 'flex-end', fontSize: 18, marginRight: 20 }}>
						<Text style={{ color: 'mediumturquoise' }}>LogIn</Text></View>

					<TouchableHighlight style={style.buttonContainer}
						onPress={() => this.props.navigation.navigate('CreatePassword')}>
						<Text style={{
							fontWeight: 'bold', fontSize: 18, color: '#ffffff',
							textAlign: 'center'
						}}>Next</Text>
					</TouchableHighlight>
				</ScrollView>

			</ImageBackground>

		);
	}
}

const style = StyleSheet.create({
	welcome: {
		fontSize: 20,
		color: 'red',
		textAlign: 'center'

	},
	container:
	{
		flex: 1,

	},
	inputBox: {
		flex: 1,
		justifyContent: 'center',

	},
	loginText: {
		color: '#ffffff',
		fontSize: 30

	},
	buttonContainer: {
		height: 45,
		marginBottom: 20,
		backgroundColor: "red",
		borderRadius: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 120, marginLeft: 120,
		borderWidth: 1.0,
		borderColor: 'black',
	}
});
