import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';

export default class EditProfessor extends Component {

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View style={style.container}>
				<ScrollView>
					<Text style={style.welcome1}>Professor/Employee</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 1, subscreen: 0 })}>Add Capital</Text>
					<Text style={style.separator}>UpdateCapital</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 2, subscreen: 0 })}>Add New Profssor</Text>
					<Text style={style.separator} onPress={() => this.props.controller(3)}>Add new Employee </Text>
					<Text style={style.separator} onPress={() => this.props.controller(4)}>Add New Trasty</Text>
					<Text style={style.separator} onPress={() => this.props.controller(5)}>Add New Inspector</Text>
					<Text style={style.separator}>Add New Gest</Text>
					<Text style={style.separator} onPress={() => this.props.controller(8)}>Allocat Task</Text>

					<Text style={style.separator} onPress={() => this.props.controller(6)}>Update Information</Text>
					<Text style={style.separator} onPress={() => this.props.controller(7)}>Allocat Plan</Text>
					<Text style={style.separator} onPress={() => this.props.controller(9)}>Verification of Profssor</Text>
					<Text style={style.separator} onPress={() => this.props.controller(10)}>Verification of Employee</Text>
					<Text style={style.separator}>Update Voice Record</Text>
					<Text style={style.separator}>Voice Record</Text>
				</ScrollView>
			</View>

		);
	}
}
const style = StyleSheet.create({
	container:
	{
		flex: 1,
		backgroundColor: '#99ffff'
	},
	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0, width: 250,
		backgroundColor: '#e6ac00',
		textAlign: 'center', marginLeft: 20,
		height: 40, marginTop: 20,
	},
	separator: {
		padding: 5,
		marginTop: 15,
		fontSize: 18,
		height: 50,

		borderWidth: 1.0,
		fontWeight: 'bold',
		borderColor: '#ffffff',
		color: "black",
		textAlign: 'center',
		backgroundColor: 'rgba(80,80,110,.170)',
	},
	inputBox: {
		width: 200,
		backgroundColor: '#ffffff',
		fontSize: 16,
		color: 'black',
		borderRadius: 30,
		borderWidth: 0.5,
		marginVertical: 10
	}
});


