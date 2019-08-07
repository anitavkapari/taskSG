import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, ScrollView, TextInput, Image, ImageBackground,
	TouchableOpacity, ActivityIndicator
} from 'react-native';

import FoundationService from '../../service/FoundationService.js'
import SearchForm from '../../form/foundation/SearchForm.js'
import FoundationAdminResponse from '../../form/foundation/FoundationAdminResponse.js'

export default class DisplayAllocateAdminTask extends Component {

	static navigationOptions =
		{
			header: null
		}

	constructor(props) {
		super(props);

		this.state =
			{
				name: ''
				, appName: ''
				, adminList: [{}]
			}
	}

	componentDidMount() { }

	render() {
		return (
			<View style={style.container}>

				<Text style={style.welcome1}>Founadation/DisplayAllocateAdminTask</Text>

				<ScrollView>

					<View style={style.SectionStyle}>

						<TextInput underlineColorAndroid="transparent"
							placeholder="---Search---"
							style={style.inputBox}
							onChangeText={name => this.setState({ name })}
						/>

						<TouchableOpacity
							onPress={this.search}
							style={style.Debug}
						>

							<Image source={require('../../component/image/search.png')}
								style={style.ImageStyle} />

						</TouchableOpacity>

					</View>

					<View style={{
						flexDirection: 'row'
						, justifyContent: 'center'
						, marginTop: 15, marginLeft: 15
						, alignItems: 'center'
					}} >

						<View>
							<Image style={{ width: 60, height: 60 }}
								source={require('../../component/image/qr.png')} />
						</View>

						<View>
							<Image style={{ width: 60, height: 60 }}
								source={require('../../component/image/qrcode.png')} />
						</View>

						<View>
							<Image style={{ width: 50, height: 50 }}
								source={require('../../component/image/calender.png')} />
						</View>

						<View>
							<Image style={{ width: 60, height: 60 }}
								source={require('../../component/image/voice.png')} />
						</View>

					</View>

					<View style={{ alignItems: 'flex-end', marginRight: 20 }}>

						<View style={{ flexDirection: 'row' }} >

							<View>

								<Image style={{ width: 50, height: 50 }}
									source={require('../../component/image/filetericon.png')} />
							</View>

							<View>
								<Image style={{ width: 50, height: 50 }}
									source={require('../../component/image/menutype.png')} />
							</View>

						</View>
					</View>

					{this.showAdminList()}

					<TouchableOpacity
						onPress={this.nextHandler}>

						<Text style={style.button}>Next</Text>

					</TouchableOpacity>

				</ScrollView>
			</View>

		);
	}


	showAdminList = () => {
		var list = [];

		this.state.adminList.map((admin) =>
		//for (var admin in this.state.adminList) 
		{
			list.push(
				<TouchableOpacity onPress={() => this.props.controller(admin)}>
					<View style={style.SectionStyle1}>
						<Image
							source={{
								uri:
									'https://i0.wp.com/www.sevenoaksacademy.ca/wp-content/uploads/2018/08/person-icon-5.png?ssl=1',
							}}
							style={style.ImageStyle1} />
						<View style={style.container2}>
							<Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10, color: '#ffffff', textAlign: 'center' }}>
								{this.state.appName}
							</Text>

							<Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 15, color: '#ffffff', textAlign: 'center' }}>
								{admin.adminFirstName}
								{admin.adminLastName}
							</Text>

						</View>
					</View>

				</TouchableOpacity>
			);

		});
		return list;
	}

	search = () => {
		form = new SearchForm(1, this.state.name);
		service = new FoundationService();
		service.searchPendingAdmin(form, this.listHandler);
	}

	listHandler = (response) => {

		/*
	var foundation = new FoundationAdminResponse(
						,response.id,
						response.adminId,
						response.adminFirstName,
						response.adminMiddleName,
						response.adminLastName
			);
			*/
		this.setState({ adminList: response.adminList });
	}

	nextHandler = () => {
		this.props.controller(this.state.foundation);
	}
}

const style = StyleSheet.create({
	container:
	{
		flex: 1,
		backgroundColor: '#99ffff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	button: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center',
		marginLeft: 80,
		fontWeight: 'bold',
		width: 130, height: 40,
		marginTop: 80,
		marginBottom: 5,
		backgroundColor: '#cc0000',
		borderRadius: 30,
	},
	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0,
		backgroundColor: '#e6ac00', width: 300,

		textAlign: 'center', marginBottom: 30,
		height: 60, marginTop: 70,
	},
	inputBox: {
		width: 190,
		backgroundColor: '#ffffff',
		fontSize: 18,
		color: 'black',
		height: 43,
		borderRadius: 25,
		textAlign: 'center', fontWeight: 'bold'
	},
	SectionStyle: {
		flexDirection: 'row',
		marginTop: 30,
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#000',
		height: 50,
		borderRadius: 30,
		width: 270,
		margin: 10,
	},
	ImageStyle: {
		padding: 10,
		margin: 5,
		resizeMode: 'stretch',
		alignItems: 'center',
		width: 40, height: 40
	},
	inputBox1: {
		width: 250,
		fontSize: 18,
		color: 'black',
		borderWidth: 0.5,
		marginVertical: 10
	},
	ImageStyle1: {
		padding: 10,
		margin: 10,
		height: 80,
		width: 80,
		resizeMode: 'stretch',
	},
	SectionStyle1: {
		width: 310,
		flexDirection: 'row',
		backgroundColor: '#c2d6d6',
		borderColor: '#000',
		height: 90,
		borderRadius: 5,
		margin: 10,
	},
});
