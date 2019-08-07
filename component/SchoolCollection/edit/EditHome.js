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
					<Text style={style.welcome1}>School/Collection</Text>


					<View style={{ alignItems: 'flex-end' }}>
						<View style={{ flexDirection: 'row', marginLeft: 200, marginTop: 10 }}>
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/filetericon.png')} />
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/menutype.png')} />
							<Image style={{ width: 50, height: 50 }}
								source={require('../../image/selectallicon.png')} />
						</View>
					</View>

					<Text style={style.separator} onPress={() => this.props.controller({ screen: 1, subscreen: 0 })}>Add Capital</Text>
					<Text style={style.separator}>UpdateCapital</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 2, subscreen: 0 })}>Add New Standard</Text>
					<Text style={style.separator}>Update Standard Info</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 3, subscreen: 0 })}>Add New Board</Text>
					<Text style={style.separator}>Update Standard info</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 4, subscreen: 0 })}>Add New Division</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 5, subscreen: 0 })}>Add Medium</Text>
					<Text style={style.separator} onPress={() => this.props.controller({ screen: 6, subscreen: 0 })}>Add Subject</Text>
					<Text style={style.separator}>Voice Record</Text>
					<Text style={style.separator}>Update Voice Record</Text>
				</ScrollView>
			</View>

		);
	}
}
const style = StyleSheet.create({
	container:
	{
		flex: 1,
		backgroundColor: '#99ffff',

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


