import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator, Picker, CheckBox
} from 'react-native';

// yes There is me
export default class PersonalInformationDisplayUpdate extends Component {

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
		return (
			<ImageBackground source={require('../../component/image/loginimage.jpg')} style={style.container}>
				<ScrollView>
					<View style={{ alignItems: 'center', }}>
						<Text style={style.lable}>You</Text>
						<Text style={style.lable}></Text>
						<Text style={style.lable}>SelectRole</Text>
						<Text style={style.lable}>Location: Kharadi</Text>
						<Text style={style.lable}>create Account</Text>
						<Text style={style.lable}>Name Not Found Search</Text>
						<Text style={style.lable}>Full Name</Text>
						<Text style={style.lable}>Marathi</Text>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
						<TouchableOpacity style={style.button}>
							<Text style={style.buttontxt}>Conform</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[style.button, style.margin]}>
							<Text style={style.buttontxt}>edit</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[style.button, style.margin]}>
							<Text style={style.buttontxt}>not Now</Text>
						</TouchableOpacity>
					</View>


					<TextInput style={style.inputtxt}
						placeholder="Nick Name (English)"
					/>
					<TextInput style={style.inputtxt}
						placeholder="Nick Name (Mother Tongue) "
					/>

					<View style={{ flexDirection: 'column', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
						<Text style={style.lable}>Permanent Address</Text>
						<Text style={style.lable}>Name of Place.....</Text>
						<Text style={style.lable}>Detail address.....</Text>

						<View style={{ flexDirection: 'row', backgroundColor: '#ff9966' }}>
							<Text style={{ color: 'black', margin: 10, fontWeight: 'bold', fontSize: 18 }}>
								Now I am Current Location</Text>
							<Image style={{ width: 40, height: 40, padding: 10, margin: 10, marginLeft: 40 }}
								source={require('../../component/image/map.png')} />
						</View>
					</View>

					<View style={{ flexDirection: 'column', marginTop: 20, backgroundColor: '#ffffff', padding: 5 }}>
						<Text style={style.lable}>Permanent Address</Text>
						<Text style={style.lable}>Name of Place.....</Text>
						<Text style={style.lable}>Detail address.....</Text>

						<View style={{ flexDirection: 'row', backgroundColor: '#ff9966' }}>
							<Text style={{ color: 'black', margin: 10, fontWeight: 'bold', fontSize: 18 }}>
								Now I am Current Location</Text>
							<Image style={{ width: 40, height: 40, padding: 10, margin: 10, marginLeft: 40 }}
								source={require('../../component/image/map.png')} />
						</View>
					</View>

					<TouchableOpacity style={style.buttonContainer}
						onPress={() => this.props.navigation.navigate('SayInVoice', { NameOBJ: this.state.userID })}>

						<Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffffff' }}>Next</Text>
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

	button: {
		borderWidth: 1.0,
		borderColor: '#ffffff',
		width: 90, height: 40, padding: 5,
		backgroundColor: 'rgba(255,200,25,.30)',
	},
	inputtxt: {
		color: 'black', fontWeight: 'bold', marginTop: 10, fontSize: 14, backgroundColor: '#ffffff',
		height: 40, borderWidth: 1.0, borderColor: '#ffffff',
	},
	buttontxt: { color: 'black', fontWeight: 'bold', fontSize: 14 },
	buttonContainer: {
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#cc0000',
		borderWidth: 1.0, width: 120,
		borderColor: 'black',
		borderRadius: 10, marginLeft: 120, marginTop: 50,
	},
	lable: { color: 'black', fontWeight: 'bold', fontSize: 14, marginTop: 20 },


	row: { flexDirection: 'row', padding: 20, marginTop: 10, justifyContent: 'space-around' },
	margin: { marginLeft: 10 },
});
