import React from "react";
import { Header } from "react-navigation";
import { StyleSheet, View, Platform, ImageBackground, TouchableOpacity, Text, Image } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';



const ThoughtForDay = props => {
	return (
		<View style={style.container}>

			<View style={style.row}>
				<Text style={style.column}>सुविचार</Text>
				<Text style={style.column}>दिनविशेष</Text>
				<Text style={style.column}>बोधकथा</Text>
				<Text style={style.column}>बातम्या</Text>
			</View>

			<Text style={style.headline}>नेहमी खरे बोलावे</Text>

		</View>

	);
};



const style = StyleSheet.create({
	headline: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 0,
		backgroundColor: 'pink',
		flex: .8,
		textAlign: 'center'
	},
	container: {
		height: 200,
		marginTop: 10
		, flex: 1,
		flexDirection: 'column'
		, backgroundColor: 'pink'

	},
	row: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: 15,
	},
	column: {
		flex: .25,
	},
});

export default ThoughtForDay;

