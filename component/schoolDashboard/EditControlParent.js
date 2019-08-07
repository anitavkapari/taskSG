import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';


import EditParent from './EditParent.js';
import AddCapital from './editParent/AddCapital.js';
import AddNewParent from './editParent/AddNewParent.js';
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

export default class EditControlParent extends Component {

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
				<EditParent
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

					case 1:
						{
							{
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
									, taskTimestamp: ' 15 May 2019 11:12:13 am'
									, taskContent: this.state.props.shortName
								};

								return (
									<VerificationSummary
										controller={this.verificationSummaryHandler}
										onCancel={this.onShareCancel}
										state={this.state}

										summary={summaryDetails}
									/>
								);
							}
							break;
						}


					case 2:
						{
							{
								let shareMap =
								{
									categories:
										[
											{
												id: 0
												, name: 'Only Me'
												, userList:
													[

													]
											}
											,
											{
												id: 1
												, name: ' Editor'
												, userList:
													[
														{
															id: 1
															, name: 'Editor#1'
														}
														,
														{
															id: 2
															, name: 'Editor#2'
														}
													]

											}
											,
											{
												id: 2
												, name: ' Moderator'
												, userList:
													[
														{
															id: 3
															, name: 'Mod#1'
														}
														,
														{
															id: 4
															, name: 'Mod#2'
														}
													]
											}
											,
											{
												id: 3
												, name: ' Head'
												, userList:
													[
														{
															id: 5
															, name: 'Head#1'
														}
														,
														{
															id: 6
															, name: 'Head#2'
														}
													]
											}

										]
								};

								return (
									<VerificationShare
										controller={this.controller}
										onContinue={this.onShareContinue}
										onCancel={this.onContinueCancel}
										state={this.state}
										shareMap={shareMap}
									/>
								);
							}
							break;
						}


					case 3:
						{
							return (
								<VerificationConfirm
									controller={this.controller}
									onConfirm={this.onPrefixConfirm}
									onCancel={this.onPrefixCancel}
									state={this.state}
								/>
							);
							break;
						}
				}

			}
			else
				if (this.state.screen == 2) {
					return (
						<AddNewParent
							controller={this.controller}
						/>
					);
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

	controller = (args) => {
		this.setState({ screen: args.screen, subscreen: args.subscreen });
	}

	addCapitalHandler = (args) => {
		this.setState(previousState => ({ subscreen: previousState.subscreen + 1, props: args }));
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









