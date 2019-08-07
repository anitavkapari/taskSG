import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';


import EditStudent from './EditStudent.js';
import AddCapital from './editStudent/AddCapital.js';
import AddNewStudent from './editStudent/AddNewStudent.js';
/*import AddNewEmployee from './editProfessor/AddNewEmployee.js';
import AddNewTrasty from './editProfessor/AddNewTrasty.js';
import AddNewGest from './editProfessor/AddNewGest.js';
import AddNewInspector from './editProfessor/AddNewInspector.js';
/*import UpdateMedium from './editProfessor/UpdateMedium.js';
import AddSubject from './edit/AddSubject.js';
import AllocateTeacher from './edit/AllocateTeacher.js';
import AllocateStudent from './edit/AllocateStudent.js';*/

import VerificationShare from './../verification/VerificationShare.js';
import VerificationSummary from './../verification/VerificationSummary.js';
import VerificationConfirm from './../verification/VerificationConfirm.js';
import FoundationService from '../../service/FoundationService.js'
import PrefixForm from '../../form/foundation/PrefixForm.js'
import StudentService from '../../service/StudentService.js'

export default class EditControlStudent extends Component {

	static navigationOptions =
		{
			header: null
		}

	constructor() {
		super();

		this.state =
			{
				screen: 0
				, subscreen: 0
				, vStep: 0
				, props: {
				}
			}
	}
	render() {

		if (this.state.screen == 0) {
			return (
				<EditStudent
					controller={this.controller}
				/>
			);
		}
		else
			if (this.state.screen == 1) {
				switch (this.state.subscreen) {
					case 0:
						{
							return (
								<AddCapital
									controller={this.addCapitalHandler}
								/>
							);
							break;
						}

					default:
						{
							return this.verificationController();
							break;
						}
				}
			}
			else
				/* if( this.state.screen == 2 )
				{
					return (
					<AddNewStudent
								controller={this.addStudentHandler}
					/>
						);
				} */
				if (this.state.screen == 2) {
					switch (this.state.subscreen) {
						case 0:
							{
								return (
									<AddNewStudent
										controller={this.addStudentHandler}
									/>
								);
								break;
							}
						default:
							{
								return this.verificationController();
								break;
							}
					}
				}
				else
					if (this.state.screen == 3) {
						return (
							<AddNewEmployee
								controller={this.controller}
							/>
						);
					}
					else
						if (this.state.screen == 4) {
							return (
								<AddNewTrasty
									controller={this.controller}
								/>
							);
						}
						else
							if (this.state.screen == 5) {
								return (
									<AddNewGest
										controller={this.controller}
									/>
								);
							}

							else
								if (this.state.screen == 6) {
									return (
										<AddNewInspector
											controller={this.controller}
										/>
									);
								}
								else
									if (this.state.screen == 7) {
										return (
											<UpdateMedium
												controller={this.controller}
											/>
										);
									}
									else
										if (this.state.screen == 8) {
											return (
												<AddSubject
													controller={this.controller}
												/>
											);
										}
										else
											if (this.state.screen == 9) {
												return (
													<AllocateTeacher
														controller={this.controller}
													/>
												);
											}
											else
												if (this.state.screen == 10) {
													return (
														<AllocateStudent
															controller={this.controller}
														/>
													);
												}
	}

	verificationController = () => {
		switch (this.state.vStep) {
			case 0:
				{
					return (
						<VerificationSummary
							controller={this.state.verificationHandler.onSummaryContinue}
							onCancel={this.state.verificationHandler.onSummaryCancel}
							//state={this.state}
							summary={this.state.summaryDetails}
						/>
					);
					break;
				}


			case 1:
				{
					return (
						<VerificationShare
							//controller={this.controller}
							onContinue={this.state.verificationHandler.onShareContinue}
							onCancel={this.state.verificationHandler.onShareCancel}
						//state={this.state}
						/>
					);
					break;
				}


			case 2:
				{
					return (
						<VerificationConfirm
							//controller={this.controller}
							onConfirm={this.state.verificationHandler.onConfirm}
							onCancel={this.state.verificationHandler.onCancel}
						//state={this.state}
						/>
					);
					break;
				}
		}
	}
	controller = (args) => {
		this.setState({ screen: args.screen, subscreen: args.subscreen });
	}

	addCapitalHandler = (args) => {
		let desc = 'student/add capital ';
		//+this.state.props.isStudent ? 'student' : 'add capital';

		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde'
			, userLocaleName: 'शिंदे '
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent:args.shortName 

		}
		let verificationHandler =
		{
			onSummaryContinue: this.verificationSummaryHandler
			, onSummaryCancel: this.onShareCancel
			, onShareContinue: this.onShareContinue
			, onShareCancel: this.onContinueCancel
			, onConfirm: this.onPrefixConfirm
			, onCancel: this.onPrefixCancel
		};

		this.setState(previousState => ({
			subscreen: previousState.subscreen + 1
			, props: args
			, summaryDetails: summaryDetails
			, verificationHandler: verificationHandler
		}));
	}
	verificationSummaryHandler = () => {
		this.setState(previousState => ({ vStep: 1 }));
	}

	onShareContinue = (userList) => {
		//var props = this.state.props;
		//props.subscreen = props.subscreen + 1;
		this.setState((previousState) =>
			(
				{
					shareUserList: userList
					, vStep: 2
				}
			));
	}
	onPrefixConfirm = (publishTime) => {
		//alert( 'save' );
		var sessionId = 1;// TODO take it from the login response
		service = new FoundationService();
		form = new PrefixForm(sessionId
			//, 'admin' // TODO remove this parameter after testing
			, this.state.props.shortName
			, 6 //this category for student prefix
			, this.state.shareUserList
			, publishTime);
		service.addPrefix(form, this.saveHandler);

		//this.props.controller(this.props.screen, this.props.subscreen);
	}


	onPrefixCancel = () => {
		this.setState({ screen: 0, subscreen: 0 });
	}
	onContinueCancel = () => {
		this.setState({ subscreen: 0 });
	}
	onShareCancel = () => {
		this.setState({ screen: 1, subscreen: 0 });
	}

	saveHandler(result) {
		//alert( JSON.stringify(result));
		if (result.code == 0) {
			//this.props.navigation.navigate('Password',{user:result});
			alert('successfully added prefix');
		}
		else {
			message = 'Error adding prefix ' + result.code
				+ ', details [' + result.status + ']'
				//              + JSON.stringify(result)
				;
			alert(message);
			//        this.props.navigation.navigate('CreateAccount',{NameOBJ: this.state.userID});
		}
	}
	addStudentHandler = (args) => {
		let desc = 'student/add student';
		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde sir'
			, userLocaleName: 'शिंदे'
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent: args.firstName + ' ' + args.lastName
		};

		let verificationHandler =
		{
			onSummaryContinue: this.verificationSummaryHandler
			, onSummaryCancel: this.onShareCancel
			, onShareContinue: this.onShareContinue
			, onShareCancel: this.onContinueCancel
			, onConfirm: this.onStudentSave
			, onCancel: this.onStudentCancel
		};

		this.setState(previousState => ({
			vStep: 0
			, subscreen: previousState.subscreen + 1
			, form: args
			, summaryDetails: summaryDetails
			, verificationHandler: verificationHandler
		}));
	}

	onStudentSave = (publishTime) => {
		//alert( 'save' );
		var sessionId = 1;// TODO take it from the login response
		service = new StudentService();
		var form = this.state.form;
		form.setVerificationDetails(this.state.shareUserList, publishTime);
		service.addNewStudent(form, this.studentSaveHandler);

		//this.props.controller(this.props.screen, this.props.subscreen);
	}
	studentSaveHandler(result) {
		alert(JSON.stringify(result));
		/* if (result.code == 0) {
			//this.props.navigation.navigate('Password',{user:result});
			alert('successfully added student');
		}
		else {
			message = 'Error adding student' + result.code
				+ ', details [' + result.status + ']'
				//              + JSON.stringify(result)
				;
			alert(message);
			//        this.props.navigation.navigate('CreateAccount',{NameOBJ: this.state.userID});
		} */
	}


}











