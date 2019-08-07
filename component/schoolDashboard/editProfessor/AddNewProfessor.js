import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator, Picker
} from 'react-native';
import ProfessorService from '../../../service/ProfessorService.js'
import BaseRequestForm from '../../../form/BaseRequestForm.js'
import ProfessorForm from '../../../form/professor/ProfessorForm.js'

export default class AddNewProfessor extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }
	constructor(props) {
		super(props);
		this.state = {
			sessionId: ''
			, professorId: ''
			, shortName: ''
			, firstName: ''
			, middleName: ''
			, lastName: ''
			, localFirstName: ''
			, localMiddleName: ''
			, localLastName: ''
			, gender: ''
			, mobile: ''
			, password: ''
			, nameOfPlace: ''
			, detailedAddress: ''

			/* , aadharNo: ''
			, localDateTime: ''
			, status: ''
			, role: ''
			, nickName: ''
			, nickNameSuffix: ''
			, localNickName: ''
			, localNickNameSuffix: ''
			, mapLoc: ''
			, curNameOfPlace: ''
			, curDetailedAddress: ''
			, curMapLoc: '' */
		}
	}
	
	render() {
		return (
			<View style={style.container}>
				<Text style={style.welcome1}>Professor/Employee/Add New Professor</Text>

				<ScrollView>
					<View style={{ marginTop: 10 }}>
						<View style={{
							flexDirection: 'row', marginTop: 5, height: 40, justifyContent: 'space-around',
							alignItems: 'center', backgroundColor: '#808080', borderWidth: 1.0, borderColor: '#ffffff',
						}}>
							<Text>id</Text>
							<Text>Last Added Professor</Text>
							<Text>Date/Time</Text>
						</View>
					</View>



					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name of Professor English</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
						<TextInput style={style.inputtxt}
							onChangeText={firstName => this.setState({ firstName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={middleName => this.setState({ middleName })}
							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={lastName => this.setState({ lastName })}
							placeholder="last Name"
						/>
					</View>
					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name of Professor  2nd Language</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
						<TextInput style={style.inputtxt}
							onChangeText={localFirstName => this.setState({ localFirstName })}
							placeholder="First Name"
						/>
					<TextInput style={style.inputtxt}
							onChangeText={localMiddleName => this.setState({ localMiddleName })}
							placeholder="Middle Name"
						/>
						<TextInput style={style.inputtxt}
							onChangeText={localLastName => this.setState({ localLastName })}
							placeholder="Last Name"
						/>
						
					</View>

					<Text style={style.txt1} >Gender</Text>
					<TextInput style={style.inputtxt} onChangeText={gender => this.setState({ gender })} placeholder=" Gender " />
					<Text style={style.txt1} >Password</Text>
					<TextInput style={style.inputtxt} onChangeText={password => this.setState({ password })} placeholder=" Password " />


					<Text style={style.txt1} >Address</Text>
					<TextInput style={style.inputtxt} onChangeText={nameOfPlace => this.setState({ nameOfPlace })}
						placeholder="Location " />
					<TextInput style={style.inputtxt}
						onChangeText={detailedAddress => this.setState({ detailedAddress })}
						placeholder="Details " />

					<Text style={style.txt1} >Mobile Number</Text>

					<TextInput style={[style.inputtxt, style.inputtxt1]}
						onChangeText={mobile => this.setState({ mobile })}
						placeholder=" +91 Mobile Number"
						keyboardType={'numeric'}
						maxLength={10}
						size="10"
					/>
				</ScrollView>

				<TouchableOpacity
					onPress={() => this.Save()}>
					<Text style={style.button}>Save</Text>
				</TouchableOpacity>
			</View>

		);
	}

	Save = () => {
		var form = new ProfessorForm(
			1,

			this.state.firstName,
			this.state.middleName,
			this.state.lastName,
			this.state.localFirstName,
			this.state.localMiddleName,
			this.state.localLastName,
			this.state.gender,
			this.state.password,
			this.state.nameOfPlace,
			this.state.mobile,
			this.state.detailedAddress,
		);

		this.props.controller(form);

	}
}
const style = StyleSheet.create({
	container:
	{
		flex: 1,
		backgroundColor: '#99ffff',
	},
	txt1: { marginTop: 15, fontWeight: 'bold', paddingLeft: 10, fontSize: 14 },

	txt: { color: 'black', fontWeight: 'bold', paddingLeft: 10, fontSize: 14 },
	inputtxt: {
		marginTop: 15,
		fontSize: 18, paddingLeft: 10,
		borderWidth: 1.0,
		borderColor: '#ffffff',
		backgroundColor: '#ccffe6',
	},

	button: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center',
		height: 50, padding: 5,
		marginLeft: 110,
		fontWeight: 'bold',
		width: 130, height: 40,
		marginTop: 15,
		marginBottom: 5,
		backgroundColor: '#ffbf00',
		borderRadius: 5,
	},

	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0,
		backgroundColor: '#e6ac00',
		textAlign: 'center',
		marginTop: 30,
	},



});
