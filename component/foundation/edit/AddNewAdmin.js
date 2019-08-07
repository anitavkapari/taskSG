import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator, Picker, CheckBox, Dopdown
} from 'react-native';


import FoundationService from '../../../service/FoundationService.js'
import FoundationAdminForm from '../../../form/foundation/FoundationAdminForm.js'

export default class AddNewAdmin extends Component {

	static navigationOptions = {
		header: null
	}

	componentDidMount() { }

	constructor(props) {
		super(props);
		this.state = {
			id: '23459',
			prefix: 'FFAD',
			gender: 'male',
			place: 'Pune',
			mapLocation: 'lat,lon',
			referenceGender: 'male',
			EfName: '',
			EmNmae: '',
			ElNmae: '',
			MfName: '',
			MmNmae: '',
			MlNmae: '',
			RfName: '',
			RmNmae: '',
			RlNmae: '',
			RMfName: '',
			RMmNmae: '',
			RMlNmae: '',
			mobnumber: '',
			adherNumber: '',
			PerAddress: '',
			RmobNumber: '',
			PickerValueHolder: '',
			isLoading: false,

			error: false,
			checked: false,
			selected: false
		}
	}

	render() {

		return (
			<View style={style.container}>
				<Text style={style.welcome1}>Founadation/Add New Admin</Text>

				<ScrollView>
					<View style={style.SectionStyle}>
						<Image
							source={{
								uri:
									'https://i0.wp.com/www.sevenoaksacademy.ca/wp-content/uploads/2018/08/person-icon-5.png?ssl=1',
							}}
							style={style.ImageStyle} />
						<View style={style.container2}>
							<Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 35, color: 'black' }}>
								{this.props.foundation.foundationAppName}
							</Text>
						</View>
					</View>

					<Text style={{ color: 'black', marginLeft: 250 }}>
						Change
			</Text>

					<View style={{ marginTop: 10 }}>
						<View style={{
							flexDirection: 'row', height: 40, justifyContent: 'space-around',
							alignItems: 'center', backgroundColor: '#808080', borderWidth: 1.0, borderColor: '#ffffff',
						}}>
							<Text>
								{this.props.foundation.foundationAppName}
							</Text>
							<Text>
								{this.props.foundation.prefixId}
							</Text>
						</View>
					</View>



					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name of Admin-English</Text>
					<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
						<TextInput style={style.inputtxt}
							onChangeText={EfName => this.setState({ EfName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={EmNmae => this.setState({ EmNmae })}

							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={ElNmae => this.setState({ ElNmae })}
							placeholder="Last Name"
						/>
					</View>
					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Name of Admin-MotherTongue</Text>
					<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
						<TextInput style={style.inputtxt}
							onChangeText={MfName => this.setState({ MfName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={MmName => this.setState({ MmName })}
							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={MlName => this.setState({ MlName })}
							placeholder="Last Name"
						/>
					</View>
					<TextInput style={style.inputBox}
						onChangeText={mobnumber => this.setState({ mobnumber })}
						placeholder=" Mobile Number "
						keyboardType={'numeric'}
						maxLength={10}
					/>
					<TextInput style={style.inputBox}
						onChangeText={adherNumber => this.setState({ adherNumber })}
						placeholder=" Adhar Number " />

					<View style={{
						flexDirection: 'row', backgroundColor: '#ccffe6', height: 60, marginTop: 15,
						width: 300, borderWidth: 1.0, borderColor: '#ffffff', marginLeft: 10
					}}>
						<TextInput
							onChangeText={PerAddress => this.setState({ PerAddress })}
							placeholder=" Parmanent Address " />
						<Image style={{ width: 50, height: 50, padding: 5, marginLeft: 100 }}
							source={require('../../image/map.png')} />
					</View>

					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>Reffrence by Name-English</Text>
					<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
						<TextInput style={style.inputtxt}
							onChangeText={RfName => this.setState({ RfName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={RmName => this.setState({ RmName })}
							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={RlName => this.setState({ RlName })}
							placeholder="Last Name"
						/>
					</View>
					<Text style={{ fontWeight: 'bold', fontSize: 14 }}>>Reffrence by Name-MotherTongue</Text>
					<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
						<TextInput style={style.inputtxt}
							onChangeText={RMfName => this.setState({ RMfName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={RMmName => this.setState({ RMmName })}
							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={RMlName => this.setState({ RMlName })}
							placeholder="Last Name"
						/>
					</View>
					<TextInput style={style.inputBox}
						onChangeText={RmobNumber => this.setState({ RmobNumber })}
						placeholder=" Reffrence Mobile Number " />

					<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
						<CheckBox
							value={this.state.checked}
							onValueChange={() => this.setState({ checked: !this.state.checked })} />
						<Text>Server</Text>
						<CheckBox
							value={this.state.selected}
							onValueChange={() => this.setState({ selected: !this.state.selected })} />
						<Text>Device</Text>
					</View >

					<TouchableOpacity onPress={() => this.Save()} >
						<Text style={style.button}>Save</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>

		);
	}

	Save = () => {
		var form = new FoundationAdminForm(
			1
			, this.props.foundation.id
			, this.state.id
			, this.state.prefix
			, this.state.EfName,
			this.state.EmNmae,
			this.state.ElNmae,
			this.state.MfName,
			this.state.MmNmae,
			this.state.MlNmae,
			this.state.gender,
			this.state.mobnumber,
			this.state.adherNumber,
			this.state.place,
			this.state.PerAddress,
			this.state.mapLocation,
			this.state.RfName,
			this.state.RmName,
			this.state.RlName,
			this.state.RMfNmae,
			this.state.RMmName,
			this.state.RMlName,
			this.state.referenceGender,
			this.state.RmobNumber,
			+ new Date(),
		);
		this.props.controller(form);

	}

}

const style = StyleSheet.create({
	container:
	{
		flex: 1,
		backgroundColor: '#99ffff',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	inputBox: {
		marginTop: 15,
		marginLeft: 10,
		fontSize: 18,
		width: 300, height: 50,
		borderWidth: 1.0,
		borderColor: '#ffffff',
		backgroundColor: '#ccffe6',
	},
	inputtxt: {
		color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, backgroundColor: '#ccffe6',
		width: 95, height: 40, borderWidth: 1.0, borderColor: '#ffffff',
	},
	inputtxt1: { marginLeft: 5 },

	button: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center',
		marginLeft: 100,
		fontWeight: 'bold',
		width: 130, height: 40,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#cc0000',
		borderRadius: 30,
	},
	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0, width: 300,
		backgroundColor: '#e6ac00',
		textAlign: 'center', marginBottom: 30,
		height: 50, marginTop: 40,
	},
	SectionStyle: {
		width: 300,
		flexDirection: 'row',
		backgroundColor: '#527a7a',
		borderColor: '#000',
		height: 100,
		borderRadius: 5,
		margin: 10,
	},
	ImageStyle: {
		padding: 10,
		margin: 10,
		height: 80,
		width: 80,
		resizeMode: 'stretch',

	},
});
