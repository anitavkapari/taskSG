import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, View, Text, ListView, SectionList, ScrollView, Button, UIManager, LayoutAnimation,
	TextInput, Image, TouchableOpacity,
	TouchableHighlight, ImageBackground
} from 'react-native';


export default class SayInVoice extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }

	render() {

		return (
			<ImageBackground source={require('../../component/image/loginimage.jpg')}
				style={style.container}>
				<ScrollView>
					<Text style={style.welcome1}>Say Your Name in Voice</Text>
					<Text onPress={() => this.props.navigation.navigate('TermConditions')}
						style={{ color: 'mediumturquoise', marginLeft: 70 }}>Skip</Text>

					<TouchableOpacity style={style.buttonContainer}
					>
						<Text style={style.text}>Next</Text>
					</TouchableOpacity>


				</ScrollView>

			</ImageBackground>


		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1, padding: 10,
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	row: { flexDirection: 'row', padding: 20, justifyContent: 'space-around' },
	text: { color: '#ffffff', margin: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },

	buttonContainer: {
		height: 45,

		backgroundColor: '#cc0000',
		borderWidth: 1.0, width: 120,
		borderColor: 'black',
		borderRadius: 10, marginLeft: 100, marginTop: 300,
		color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 16,
	},
	welcome1: {
		fontSize: 18,
		borderColor: '#ffffff',
		color: '#ffffff', marginTop: 20, marginLeft: 70,
		borderWidth: 1.0, fontWeight: 'bold', width: 200,
		backgroundColor: 'rgba(80,80,110,.170)',
		textAlign: 'center',
		height: 40
	},

});
