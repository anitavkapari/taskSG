import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity, Button, PanResponder, CheckBox, StyleSheet, ScrollView, Platform } from 'react-native';

//import PrefixForm from '../../../form/foundation/PrefixForm.js'

import DatePicker from 'react-native-datepicker'


export default class VerificationConfirm extends Component {
	constructor(props) {
		super(props);

		var publishTime = new Date();

		this.state =
			{
				datetime: '',
				datetime1: '',
				checked: false,
				checked1: false,
				date: '',

				role: 'Foundation'
				, shortName: ''
				, publishTime: publishTime.getTime()
			}
	}

	componentDidMount() {

	}

	setShortName(name) {
		this.setState({ shortName: name });
	}

	changeState() {
		this._panResponder = PanResponder.create(
			{
				onStartShouldSetPanResponder: (e) => { console.log('onStartShouldSetPanResponder'); return true; },
				onMoveShouldSetPanResponder: (e) => { console.log('onMoveShouldSetPanResponder'); return true; },
				onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
				onPanResponderMove: (e) => console.log('onPanResponderMove'),
				onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
				onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
			});

		var that = this;
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear(); //Current Year
		var hours = new Date().getHours(); //Current Hours
		var min = new Date().getMinutes(); //Current Minutes
		var sec = new Date().getSeconds(); //Current Seconds

		that.setState(
			{
				//Setting the value of the date time
				date:
					date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={{ flexDirection: 'row', padding: 5, marginTop: 20 }}>
						<Button onPress={() => this.changeState()} title="Now" />
						<Text style=
							{{ color: 'black', marginLeft: 15, fontWeight: 'bold', fontSize: 16 }}>
							{this.state.date}
						</Text>
					</View>

					<View style={styles.hoursContainer}>
						<CheckBox
							value={this.state.checked1}
							onValueChange={() => this.setState({ checked1: !this.state.checked1 })} />
						<Text style={styles.text}>After hour</Text>
						{
							this.renderTimeSlots()
						}
					</View>

					<DatePicker
						style={{ width: 250, marginLeft: 50, marginTop: 20 }}
						date={this.state.datetime1}
						mode="datetime"
						placeholder="Select Date/Time"
						format="YYYY-MM-DD HH:mm"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles=
						{{
							dateIcon:
							{
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 0
							},

						}}

						minuteInterval={10}
						onDateChange={(datetime) => { this.setState({ datetime1: datetime }); }}
					/>

					<View style={{
						flexDirection: 'row', justifyContent: 'space-around'
						, marginTop: 170
					}}>
						<TouchableOpacity style={styles.buttonContainer}
							onPress={() => this.onConfirm()}>
							<Text style={{ fontWeight: 'bold' }}>Confirm</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonContainer}
							onPress={() => this.props.onCancel()}>
							<Text style={{ fontWeight: 'bold' }}>Not Now</Text>
						</TouchableOpacity>
					</View>

				</ScrollView>

			</View>

		);
	}

	renderTimeSlots() {
		var numbers = [1, 2, 3, 4, 5, 6, 7];

		return numbers.map((index) => {
			return (<TouchableOpacity style={styles.hour}>
				<Text style={styles.text}
					onPress={() => this.onLater(index)}>{index}</Text>
			</TouchableOpacity>
			);
		});
	}

	onLater(hour) {
		let publishTime = new Date();
		publishTime.setHours(publishTime.getHours() + hour);
		this.setState({ publishTime: publishTime.getTime() });
	}

	onSelectDate() {
	}

	onSelectTime() {
	}

	onConfirm() {
		this.props.onConfirm(this.state.publishTime);
	}

}

const styles = StyleSheet.create(
	{
		buttonContainer: {
			height: 40,
			backgroundColor: "#ffbf00",
			borderWidth: 1.0, width: 120,
			borderColor: '#cc6600',
			borderRadius: 5,
			color: 'black', justifyContent: 'center',
			alignItems: 'center', fontWeight: 'bold', fontSize: 14
		},
		text: {
			color: 'black', margin: 5, fontWeight: 'bold', fontSize: 16
		},
		container:
		{
			flex: 1,
			backgroundColor: '#99ffff',
			paddingTop: (Platform.OS === 'ios') ? 20 : 0
		},

		hoursContainer:
		{
			flexDirection: 'row', padding: 5, marginTop: 20
		},
		hour: {
			height: 35,
			justifyContent: 'center',
			alignItems: 'center',
			width: 35,
			color: 'black', textAlign: 'center'
		},
		welcome: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10
		},
		instructions: {
			textAlign: 'center',
			color: '#333333',
			marginBottom: 5
		}
	});
