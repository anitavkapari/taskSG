import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';

export default class EditHome extends Component {

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View style={style.container}>
				<ScrollView>

					<View style={{ alignItems: 'flex-end' }}>
						<View style={{ flexDirection: 'row', marginLeft: 200, marginTop: 15 }}>
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/filetericon.png')} />
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/menutype.png')} />
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/selectallicon.png')} />
						</View>
					</View>

					<Text style={style.separator} onPress={() => this.props.controller({ screen: 1, subscreen: 0 })}>AddCapital</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 8, subscreen: 0 })}>UpdateCapital</Text>
					<Text style={style.separator}>Remove Capital</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 2, subscreen: 0 })}>Add New Foundation</Text>
					<Text style={style.separator}>Update Foundation info</Text>
					<Text style={style.separator}>Remove Foundation</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 3, subscreen: 0 })}>Add New Admin</Text>
					<Text style={style.separator}>Update Admin info</Text>
					<Text style={style.separator}>Remove Admin</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 4, subscreen: 0 })}>Allocate Admin Task</Text>
					<Text style={style.separator}>Allocate Task</Text>
					<Text style={style.separator}>Remove Task</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 5, subscreen: 0 })}>Allocate Role</Text>
					<Text style={style.separator}>Allocate Plan</Text>
					<Text style={style.separator}>Update Plan</Text>
					<Text style={style.separator}onPress={() => this.props.controller({ screen: 6, subscreen: 0 })}>Verification of registration Admin</Text>
					<Text style={style.separator}>Verification of non registration Admin</Text>
					<Text style={style.separator}>Voice Record</Text>
					<Text style={style.separator}>Update Voice Record</Text>
					<Text style={style.separator}>Remove Voice Record</Text>
				</ScrollView>
			</View>

		);
	}
}

const style = StyleSheet.create({
	container:
	{
		flex: 1,
		padding: 15,
		backgroundColor: '#b3ffda',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: (Platform.OS === 'ios') ? 20 : 0,

	},
	separator: {
		padding: 20,
		marginTop: 15,
		marginLeft: 10,
		fontSize: 18,
		height: 80, width: 300,
		borderWidth: 1.0,
		fontWeight: 'bold',
		borderColor: '#ffffff',
		color: "black",
		textAlign: 'center',
		backgroundColor: '#ccffe6',
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
