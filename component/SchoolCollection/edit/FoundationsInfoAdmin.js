import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator
} from 'react-native';
export default class FoundationsInfoAdmin extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }
	constructor(props) {
		super(props);
		this.state = {
			userID: '',
			UserPwd: '',
			UserName: '',
			UserPerAddress: '',
			UserCurAddress: '',
			error: false
		}
	}
	render() {
		return (
			<ImageBackground source={require('../../image/login.png')}
				style={style.container}>
				<View style={style.container}>

					<Text style={style.welcome}>Founadation</Text>
					<ScrollView>
						<Text style={style.welcome}>Admin</Text>
						<TextInput style={style.inputBox}
							onChangeText={userID => this.setState({ userID })}
							autoFocus={true}
							placeholder="Name of admin"
						/>


						<TextInput style={style.inputBox}
							onChangeText={UserPwd => this.setState({ UserPwd })}
							keyboardType={'numeric'}
							maxLength={10}
							size="10"
							placeholder=" Mobile No.... "


						/>
						<TextInput style={style.inputBox}
							onChangeText={UserName => this.setState({ UserName })}
							placeholder="Adhar No.."
						/>
						<TextInput style={style.inputBox}
							onChangeText={UserPerAddress => this.setState({ UserPerAddress })}
							placeholder=" Enter Permanent Address"
						/>

						<TextInput style={style.inputBox}
							onChangeText={UserCurAddress => this.setState({ UserCurAddress })}
							placeholder=" Ref...Name"

						/>
						<TextInput style={style.inputBox}
							onChangeText={UserCurAddress => this.setState({ UserCurAddress })}
							placeholder="Ref..No."
						/>

						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('EditFoundations')}
							style={style.button}>
							<Text style={style.buttonText}>Save</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</ImageBackground>
		);
	}

}
const style = StyleSheet.create({
	container:
	{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	inputBox: {
		width: 250,
		backgroundColor: '#ffffff',
		fontSize: 16,
		color: 'black',
		marginVertical: 10
	},
	button: {
		width: 250,
		backgroundColor: 'red',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13
	},
	welcome: {
		fontSize: 20,
		color: 'red',

		textAlign: 'center'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	}

});
