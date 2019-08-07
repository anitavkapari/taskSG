import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';


import EditSchoolHome from './EditSchoolHome.js';
import AddCapital from './edit/AddCapital.js';
import AddNewSchool from './edit/AddNewSchool.js';
import AddNewStandard from './edit/AddNewStandard.js';
import AddNewDivision from './edit/AddNewDivision.js';
import UpdateInfoEducationalYear from './edit/UpdateInfoEducationalYear.js';
import UpdateBoard from './edit/UpdateBoard.js';
import UpdateMedium from './edit/UpdateMedium.js';
import AddSubject from './edit/AddSubject.js';
import AllocateTeacher from './edit/AllocateTeacher.js';
import AllocateStudent from './edit/AllocateStudent.js';

import VerificationShare from './../verification/VerificationShare.js';
import VerificationSummary from './../verification/VerificationSummary.js';
import VerificationConfirm from './../verification/VerificationConfirm.js';
import FoundationService from '../../service/FoundationService.js'
import PrefixForm from '../../form/foundation/PrefixForm.js'
export default class EditControl extends Component {

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
				, props: {
				}
			}
	}


	render() {

		if (this.state.screen == 0) {
			return (
				<EditSchoolHome
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
				if (this.state.screen == 2) {
					return (
						<AddNewSchool
							controller={this.verificationController}
						/>
					);
				}
				else
					if (this.state.screen == 3) {
						return (
							<AddNewStandard
								controller={this.verificationController}
							/>
						);
					}
					else
						if (this.state.screen == 4) {
							return (
								<AddNewDivision
									controller={this.verificationController}
								/>
							);
						}
						else
							if (this.state.screen == 5) {
								return (
									<UpdateInfoEducationalYear
										controller={this.verificationController}
									/>
								);
							}

							else
								if (this.state.screen == 6) {
									return (
										<UpdateBoard
											controller={this.verificationController}
										/>
									);
								}
								else
									if (this.state.screen == 7) {
										return (
											<UpdateMedium
												controller={this.verificationController}
											/>
										);
									}
									else
										if (this.state.screen == 8) {
											return (
												<AddSubject
													controller={this.verificationController}
												/>
											);
										}
										else
											if (this.state.screen == 9) {
												return (
													<AllocateTeacher
														controller={this.verificationController}
													/>
												);
											}
											else
												if (this.state.screen == 10) {
													return (
														<AllocateStudent
															controller={this.verificationController}
														/>
													);
												}
	}

	verificationController = () => {
		switch (this.state.subscreen) {
			case 1:
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


			case 2:
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


			case 3:
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
		let desc = 'foundation/add capital/ for '
			+ this.state.props.isFoundation ? 'foundation'
			: 'admin';
		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde sir'
			, userLocaleName: '????? ?? '
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent: this.state.props.shortName
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
		this.setState(previousState => ({ subscreen: previousState.subscreen + 1 }));
	}

	onShareContinue = (userList) => {
		//var props = this.state.props;
		//props.subscreen = props.subscreen + 1;
		this.setState((previousState) =>
			(
				{
					shareUserList: userList
					, subscreen: previousState.subscreen + 1
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
			, this.state.props.category
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

}



