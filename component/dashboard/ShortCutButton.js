import React from "react";
import { Header } from "react-navigation";
import { StyleSheet, View, Platform, ImageBackground, TouchableOpacity, Text, Image } from "react-native";



const ShortCutButton = props => {
	return (
		<View style={style.container}>
			<View style={style.circle}>
				<Text style={[style.headline, { color: props.color }]}>{props.letter}</Text>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	circle: {
		width: 72
		, height: 72
		, borderRadius: 40
		, backgroundColor: 'whitesmoke'
		, justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	headline: {
		fontWeight: 'bold',
		fontSize: 48,
		marginTop: 0,
		width: 72,
		height: 72,
		color: 'yellow',
		//backgroundColor: 'red',
		//justifyContent: 'center',
		//alignItems: 'center',
		textAlign: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		//paddingTop: (Platform.OS === 'ios') ? 20 : 0

	},
	container2: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 40,

	},
	ImageStyle: {
		padding: 10,
		margin: 10,
		height: 80,
		width: 80,
		resizeMode: 'stretch',

	},

	inputBox: {
		width: 250,
		fontSize: 18,
		color: '#ffffff',
		borderWidth: 0.5,
		marginVertical: 10
	},
	SectionStyle: {
		width: 310,
		flexDirection: 'row',
		backgroundColor: 'black',
		borderColor: '#000',
		height: 100,
		borderRadius: 5,
		margin: 10,
	},
	separator: {
		padding: 10,
		marginTop: 5,
		fontSize: 18,
		height: 50,
		fontWeight: 'bold',
		color: "black",
		backgroundColor: 'orange',
	},
	button: { width: 110, height: 60, padding: 10 },
	buttontxt: {
		color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, padding: 5
	},
	seeAll: { marginLeft: 250, color: 'skyblue', fontWeight: 'bold', fontSize: 14 },
	seeAll1: { marginLeft: 250, color: 'gray', fontWeight: 'bold', fontSize: 14 },

	text: { backgroundColor: '#ffffff', marginTop: 5, color: 'black', fontWeight: 'bold', fontSize: 14, padding: 10 }
});

export default ShortCutButton;

