import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, View, Text, ListView, SectionList, ScrollView, Button, UIManager, LayoutAnimation,
	TextInput, Image, TouchableOpacity,
	TouchableHighlight, ImageBackground
} from 'react-native';
export default class TaskList extends Component {

	static navigationOptions = {
		header: null
	}
	componentDidMount() { }

	constructor(props) {
		super(props);
		this.state = {
			sections: [{}]
			, TaskList: ([
				{ title: 'Quick', data: ['First Aid', 'Drinking Water', 'Bus', 'Parking', 'Foundation', 'School', 'Lab', 'Hostal', 'Ground'] },
				{ title: 'Live', data: ['Camera', 'Photo', 'Video', 'Bell'] },
				{ title: 'Personal', data: ['Alart', 'Reminder', 'Photo', 'Video''Document', 'Certificate', 'Time Table', 'Class'] },
				{ title: 'Professional/School', data: ['Gate/ClassRoom', 'Clenning', 'Drinking Water', 'Pick Up', 'Droup', 'Bell', 'Employee Attaindancy', 'Home Work', 'Syllabus', 'Extra Class', 'Invoice', 'InWord/Outword Register', 'Salary Register', 'Sport', 'Camp', 'Trip', 'Gathering', 'Get Togather', 'Send Up'] },
				{ title: 'Professional/Academy', data: ['General Knowledge', 'E-Learning', 'E-Tution', 'Online Exam', 'English Speaking', 'Grammar', 'Sports', 'Career Guidance', 'History', 'Science', 'Geography', 'Animals', 'Birds', 'Trees', 'Inspirational Quotes', 'Health Tips', 'Scholarship Exam Tips', 'Government Exam Tips', 'CET Exam Tips', 'Wold/Country'] },
				{ title: 'Professional/Enterprices', data: ['Book', 'NoteBook', 'Stationary', 'Offers'] },
				{ title: 'Professional/Company', data: ['Plan', 'Collections'] },
				{ title: 'Information', data: ['Foundation', 'School', 'Dashbord', 'WebSite', 'Customer Care', 'Uniform', 'School Bag', 'Launch', 'Professor/employee', 'TimeTable', 'Bus', 'Lab', 'Hostal', 'Holidays', '15 August', '26 Janubary', 'Anniversary', 'festiva', 'Activity'] },
				{ title: 'User', data: ['Student', 'Parents', 'Trasty', 'Teachers', 'Empolyee', 'Inspector', 'Guest', 'Visit'] },
			]),
		};
	}


	render() {
		const allTaskList = ['All', 'Only', 'edit', 'Modarater', 'test', 'Head', 'Professor', 'Employee', 'Trasty', 'Inspector', 'Guest', 'Visiter', 'Student', 'Parents'],
		const Tab = ['New', 'Save', 'Log', 'Work', 'Edit', 'InCharge', 'History']

		return (

			<ImageBackground source={require('../../component/image/login.png')}
				style={style.container}>
				<ScrollView>

					<SectionList sections={this.state.sections}

						renderItem={({ item }) => <Text style={style.separator} onPress={() => this.showTab(3)}>{item}</Text>}
						renderSectionHeader={({ section }) => <Text style={style.text}>{section.title}</Text>}
						keyExtractor={(item, index) => index}
					/>
				</ScrollView>
			</ImageBackground>

		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	separator: {
		padding: 20,
		marginTop: 15,
		fontSize: 18,
		height: 80,
		borderWidth: 1.0,
		fontWeight: 'bold',
		borderColor: '#ffffff',
		color: "black", textAlign: 'center',
		backgroundColor: 'rgba(255,200,25,.45)',
	},
	text: { borderWidth: 1.0, borderColor: 'black', backgroundColor: '#ffffff', marginTop: 5, color: 'black', fontWeight: 'bold', fontSize: 14, padding: 10 },

});
