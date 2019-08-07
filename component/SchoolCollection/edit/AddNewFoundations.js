import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator, Picker
} from 'react-native';
export default class AddNewFoundations extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }
	constructor(props) {
		super(props);
		this.state = {
			EfName: '',
			EmNmae: '',
			ElNmae: '',
			MfName: '',
			MmNmae: '',
			MlNmae: '',
			appName: '',
			lang: '',
			officeAddress: '',
			namefoundation: '',
			error: false
		}
	}
	state = {
		choosenIndex: 0
	};
	render() {
		return (
			<View style={style.container}>
				<Text style={style.welcome1}>Founadation/Add New Founadation</Text>

				<ScrollView>
					<View style={{ marginTop: 10 }}>
						<View style={{
							flexDirection: 'row', marginTop: 5, height: 40, justifyContent: 'space-around',
							alignItems: 'center', backgroundColor: '#808080', borderWidth: 1.0, borderColor: '#ffffff',
						}}>
							<Text>App Name</Text>
							<Text>id</Text>
							<Text>Date/Time</Text>
						</View>
					</View>

					<Picker
						mode="dropdown"
						style={style.inputBox}
						selectedValue={this.state.language}
						onValueChange={(lang) => this.setState({ language: lang })}>
						<Picker.Item label="10001" value="java" />
						<Picker.Item label="10002" value="js" />
					</Picker>


					<TextInput style={style.inputBox}
						onChangeText={appName => this.setState({ appName })}
						autoFocus={true}
						placeholder="Name App"
					/>


					<TextInput style={style.inputBox}
						onChangeText={namefoundation => this.setState({ namefoundation })}
						placeholder=" Name of Foundation "
					/>


					<Text style={{ fontWeight: 'bold', fontSize: 14 }}> Name of Founder-English</Text>
					<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
						<TextInput style={style.inputtxt}
							onChangeText={EfName => this.setState({ EfName })}
							placeholder="First Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={EmName => this.setState({ EmName })}
							placeholder="Middle Name"
						/>
						<TextInput style={[style.inputtxt, style.inputtxt1]}
							onChangeText={ElName => this.setState({ ElName })}
							placeholder="Last Name"
						/>
					</View>

					<Text style={{ fontWeight: 'bold', fontSize: 14 }}> Name of Founder-MotherTongue</Text>
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
							placeholder="Last Name" />
					</View>
					<View style={{
						flexDirection: 'row', backgroundColor: '#ccffe6', height: 60, marginTop: 15,
						width: 300, borderWidth: 1.0, borderColor: '#ffffff', marginLeft: 10
					}}>
						<TextInput onChangeText={officeAddress => this.setState({ officeAddress })}

							placeholder=" Office Address " />
						<Image style={{ width: 50, height: 50, padding: 5, marginLeft: 130 }}
							source={require('../../image/map.png')} />
					</View>
					<TouchableOpacity
						onPress={() => this.Save()}>
						<Text style={style.button}>Save</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>

		);
	}

	Save = () => {

		fetch('http://devikas-env.um9vbjkh2m.ap-south-1.elasticbeanstalk.com/rest/foundation/createFoundation'
			, {
				method: 'POST',
				headers:
				{
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{
						foundationId: this.state.lang,
						foundationAppName: this.state.appName,
						adminFirstName: this.state.EfName,
						adminMiddleName: this.state.EmNmae,
						adminLastName: this.state.ElNmae,
						foundationName: this.state.namefoundation,
						adminLocalFirstName: this.state.MfName,
						adminLocalMiddleName: this.state.MmNmae,
						adminLocalLastName: this.state.MlNmae,
						foundationOfficeAddr: this.state.officeAddress,

					})
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				const { EfName } = this.state;
				const { EmName } = this.state;
				const { ElName } = this.state;
				const { lang } = this.state;
				const { namefoundation } = this.state;
				const { appName } = this.state;

				const { MfName } = this.state;
				const { MmName } = this.state;
				const { MlName } = this.state;

				const { officeAddress } = this.state;

				this.setState({
					isLoading: false,
					dataSource: responseJson
				},
					function () {
						// In this block you can do something with new state.
					});
				alert(responseJson.status);
				this.props.navigation.navigate('DisplayAdmin');

			})

			.catch((error) => {
				alert('error=' + error);
			});
	};
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
	inputtxt: {
		color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 14, backgroundColor: '#ccffe6',
		width: 95, height: 40, borderWidth: 1.0, borderColor: '#ffffff',
	},
	inputtxt1: { marginLeft: 5 },
	inputBox: {
		marginTop: 15,
		marginLeft: 10,
		fontSize: 18,
		width: 300, height: 50,
		borderWidth: 1.0,
		borderColor: '#ffffff',
		backgroundColor: '#ccffe6',
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
	button: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center',
		height: 50,
		marginLeft: 110,
		fontWeight: 'bold',
		width: 130, height: 40,
		marginTop: 15,
		marginBottom: 5,
		backgroundColor: '#cc0000',
		borderRadius: 30,
	},
	welcome: {
		fontSize: 14,
		color: 'black',
		backgroundColor: '#cca300',
		borderWidth: 1.0,
		borderColor: '#ffffff',
		textAlign: 'center', marginTop: 30,
		marginLeft: 160,
	},
	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0,
		backgroundColor: '#527a7a',
		textAlign: 'center',
		height: 50, marginTop: 30,
	},

	pickerStyle: {
		height: 50,
		width: "100%",
		color: '#344953',
		justifyContent: 'center',

	}

});
