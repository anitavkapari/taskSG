import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, View, Text, ListView, SectionList, ScrollView, Button, UIManager, LayoutAnimation,
	TextInput, Image, TouchableOpacity, FlatList,
	TouchableHighlight, ImageBackground
} from 'react-native';


export default class SelectRoles extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }
	constructor(props) {
		super(props);
		this.state = {
			// userID:this.props.navigation.state.params.NameOBJ,	 

		}
	}
	render() {

		return (
			<ImageBackground source={require('../../component/image/loginimage.jpg')}
				style={style.container}>
				<ScrollView>

					<Text style={style.text}>I Am</Text>
					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('PersonalInformationSearch')}>
						<Text style={style.separator}>Admin</Text>
					</TouchableHighlight>

					<Text style={style.separator}>Guest</Text>
					<Text style={style.separator}>Visitor</Text>
					<Text style={style.separator}>Developer</Text>
					<Text style={style.separator}>Employee</Text>
					<Text style={[style.separator, style.marginbottom]}>Inspector</Text>

				</ScrollView>

			</ImageBackground>


		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
	},

	text: { marginTop: 30, marginLeft: 170, color: 'black', fontWeight: 'bold', fontSize: 20 },
	marginbottom: {
		marginBottom: 10,
	},
	separator: {
		padding: 20,
		marginTop: 25,
		fontSize: 18,
		borderWidth: 1.0,
		fontWeight: 'bold',
		borderColor: '#ffffff',
		color: "black",
		backgroundColor: 'rgba(255,200,25,.30)',
	},
});
