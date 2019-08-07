import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, View, Text, ListView, SectionList, ScrollView, Button, UIManager, LayoutAnimation,
	TextInput, Image, TouchableOpacity,
	TouchableHighlight, ImageBackground
} from 'react-native';

import CustomHeader from './CustomHeader.js';

export default class DashboardSummary extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }
	constructor(props) {
		super(props);
		this.state = {
			toggle: true
		};
	}
	showTab(currentClass) {
		//	alert(tabIndex);
		this.props.navigation.navigate('FoundationTab', { currentClass: { currentClass } });
	}
	_onPress() {
		const newState = !this.state.toggle;
		this.setState({ toggle: newState })
	}
	/* ShowHideComponent = () => {
	  this.setState({ show: !this.state.show });
 };*/
	render() {
		const { toggle } = this.state;
		const textValue = toggle ? "See" : "SeeAll";
		const buttonBg = toggle ? "red" : 'white'
		return (

			<ImageBackground source={require('../../component/image/login.png')}
				style={style.container}>
				<ScrollView>

					<CustomHeader />

					<View style={{ alignItems: 'flex-end' }}>
						<View style={{ flexDirection: 'row' }}>
							<View>
								<Image style={{ width: 50, height: 50 }} source={require('../../component/image/arrow.png')} />
							</View>
							<View>
								<Image style={{ width: 50, height: 50 }} source={require('../../component/image/menutype.png')} />
							</View>
						</View>
					</View>
					<Text style={style.text}
					>Quick</Text>



					<TouchableHighlight>
						<Text style={style.separator} >First Aid</Text>
					</TouchableHighlight>

					<TouchableHighlight>
						<Text style={style.separator}>Parking</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>

					<Text style={style.text}>Live</Text>
					<Text style={style.separator}>Camera</Text>
					<Text style={style.separator}>SampleText</Text>


					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>

					<Text style={style.text}>Personal</Text>
					<Text style={style.separator}>Alert</Text>
					<Text style={style.separator}>Reminder</Text>
					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>
					<Text style={style.text}>Professional</Text>
					<Text style={{ textAlign: 'center' }}>School</Text>
					<Text style={style.separator} onPress={() => this.showTab(0)}>Foundation</Text>
					<Text style={style.separator}>Plan</Text>
					<Text style={style.separator} onPress={() => this.showTab(1)}>Collection</Text>
					<Text style={style.separator}>Report</Text>
					<Text style={{ textAlign: 'center' }}>Academy</Text>
					<Text style={style.separator}>Intstitute</Text>
					<Text style={style.separator}>Plan</Text>
					<Text style={style.separator}>Collection</Text>
					<Text style={style.separator}>Report</Text>
					<Text style={{ textAlign: 'center' }}>Enterprices</Text>
					<Text style={style.separator}>Tradars</Text>
					<Text style={style.separator}>Plan</Text>
					<Text style={style.separator}>Collection</Text>
					<Text style={style.separator}>Report</Text>


					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>
					<Text style={style.text}>Informations</Text>
					<Text style={style.separator}>Developer</Text>
					<Text style={style.separator}>Employee</Text>

					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>
					<Text style={style.text}>Visitor</Text>
					<Text style={style.separator}>Gest</Text>
					<Text style={style.separator}>Visitor</Text>

					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>
					<Text style={style.text}>Settings</Text>
					<Text style={style.separator}>Theme</Text>
					<Text style={style.separator}>Recycle</Text>
					<Text style={style.separator} onPress={() => this.showTab(2)}>TermsConditions</Text>

					<TouchableHighlight onPress={() => this._onPress()}>
						<Text style={style.seeAll}>{textValue}</Text>
					</TouchableHighlight>
				</ScrollView>


			</ImageBackground>

		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
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
	iconStyle: {

		width: 15,
		height: 15,
		marginLeft: 250,
		justifyContent: 'flex-end',
		alignItems: 'center',
		tintColor: '#fff'

	},
	separator: {
		padding: 20,
		marginTop: 15,
		fontSize: 18,
		height: 80,
		borderWidth: 1.0,
		fontWeight: 'bold',
		borderColor: '#ffffff',
		color: "black",
		backgroundColor: 'rgba(255,200,25,.45)',
	},
	visibilityBtn:
	{
		position: 'absolute',
		right: 3,
		height: 40,
		width: 35,
		padding: 5
	},
	btnImage:
	{
		resizeMode: 'contain',
		height: '100%',
		width: '100%'
	},
	button: { width: 110, height: 60, padding: 10 },
	buttontxt: {
		color: 'black', fontWeight: 'bold', fontSize: 14, padding: 5, textAlign: 'center'
	},
	seeAll: { marginLeft: 250, color: 'skyblue', fontWeight: 'bold', fontSize: 14 },
	seeAll1: { marginLeft: 250, color: 'gray', fontWeight: 'bold', fontSize: 14 },

	text: { borderWidth: 1.0, textAlign: 'center', borderColor: 'black', backgroundColor: '#ffffff', marginTop: 5, color: 'black', fontWeight: 'bold', fontSize: 14, padding: 10 },
	iconStyle: {

		width: 20,
		height: 20,
		justifyContent: 'flex-end',
		alignItems: 'center',
		tintColor: '#fff'

	},

	sub_Category_Text: {
		fontSize: 18,
		color: '#000',
		padding: 10
	},

	category_Text: {
		textAlign: 'center',
		color: 'black',
		fontWeight: 'bold',
		fontSize: 18,
		padding: 10
	},

	category_View: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'orange',
		height: 80,
		borderWidth: 1.0, borderColor: '#ffffff'
	},

	Btn: {
		padding: 10,
		backgroundColor: '#FF6F00'
	}
});
