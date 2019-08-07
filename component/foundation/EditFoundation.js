import React, { Component } from 'react';
import {
	Platform,
	StyleSheet, Text, View, TextInput, Image, ScrollView,
	TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';


import EditHome from './edit/EditHome.js';
import AddCapital from './edit/AddCapital.js';
import UpdateCapital from './edit/UpdateCapital.js';
import AddNewFoundations from './edit/AddNewFoundations.js';
import AllocateAdminTask from './edit/AllocateAdminTask.js';
import DisplayAdmin from './DisplayAdmin.js';
import DisplayAllocateAdminTask from './DisplayAllocateAdminTask.js';
import DisplayAllocateRole from './DisplayAllocateRole.js';
import AllocateRole from './edit/AllocateRole.js';
import VerificationAdmin from './edit/VerificationAdmin.js';


import AddNewAdmin from './edit/AddNewAdmin.js';

import ProfAndEmpTask from './edit/ProfAndEmpTask.js';

import VerificationShare from './../verification/VerificationShare.js';
import VerificationSummary from './../verification/VerificationSummary.js';
import VerificationConfirm from './../verification/VerificationConfirm.js';

import FoundationService from '../../service/FoundationService.js'
import TaskService from '../../service/TaskService.js'

import PrefixForm from '../../form/foundation/PrefixForm.js'
import VerificationRequest from '../../form/VerificationRequest.js'

export default class EditFoundation extends Component {

	static navigationOptions =
		{
			header: null
		}

	constructor(props) {
		super(props);

		/*var param = this.props.navigation.getParam( 'tabIndex', '-1' );
                var msg = JSON.stringify( param );
                alert( param.tabIndex );
		*/

		this.state =
			{
				screen: 0
				, subscreen: 0
				, vStep: 0
				, props: {}
				, admin: {}
			}
	}
	render() {

		if (this.state.screen == 0) {
			return (
				<EditHome
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
					switch (this.state.subscreen) {
						case 0:
							{
								return (
									<AddNewFoundations
										controller={this.addFoundationHandler}
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
						switch (this.state.subscreen) {
							case 0:
								{
									return (
										<DisplayAdmin
											controller={this.onAdminNext}
										/>
									);
									break;
								}
							case 1:
								{
									return (
										<AddNewAdmin
											controller={this.addAdminHandler}
											foundation={this.state.foundation}
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
						if (this.state.screen == 4) {
							switch (this.state.subscreen) {
								case 0:
									{
										return (
											<DisplayAllocateAdminTask
												controller={this.onAdminSelection}
											/>
										);
										break;
									}
								case 1:
									{
										return (
											<AllocateAdminTask
												controller={this.allocationHandler}
												admin={this.state.admin}
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
							if (this.state.screen == 5) {
								switch (this.state.subscreen) {
									case 0:
										{
											return (
												<DisplayAllocateAdminTask
													controller={this.onAdminSelection}
												/>
											);
											break;
										}
									case 1:
										{
											return (
												<AllocateRole
													controller={this.allocationHandler}
													admin={this.state.admin}
												/>
											);
											break;
										}
									default:
										{
											//return this.verificationController(); 
											break;
										}
								}
							}
							else
							if (this.state.screen == 6) {
								switch (this.state.subscreen) {
									case 0:
										{
											return (
												<VerificationAdmin
													controller={this.onAdminSelection}
												/>
											);
											break;
										}
									case 1:
										{
											return (
												<AllocateRole
													controller={this.allocationHandler}
													admin={this.state.admin}
												/>
											);
											break;
										}
									default:
										{
											//return this.verificationController(); 
											break;
										}
								}
							}
							else
								if (this.state.screen == 6) {
									return (
										<AddNewAdmin
											controller={this.verificationController}
										/>
									);
								}
								else
									if (this.state.screen == 7) {
										return (
											<ProfAndEmpTask
												controller={this.verificationController}
											/>
										);
									}
									else
										if (this.state.screen == 8) {
											return (
												<UpdateCapital
													controller={this.verificationController}
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

		//for Foundation AddCapital Handler

	addCapitalHandler = (args) => {
		let desc = 'foundation/add capital ';
		//	+ this.state.props.isFoundation ? 'foundation': 'admin';
		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde sir'
			, userLocaleName: 'शिंदे '
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent: args.shortName
		};

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
			vStep: 0
			, subscreen: previousState.subscreen + 1
			, props: args
			, summaryDetails: summaryDetails
			, verificationHandler: verificationHandler
		}));
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

	//for Foundation Handler

	addFoundationHandler = (args) => {
		let desc = 'foundation/add foundation';
		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde sir'
			, userLocaleName: 'शिंदे '
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent: args.foundationName
		};

		let verificationHandler =
		{
			onSummaryContinue: this.verificationSummaryHandler
			, onSummaryCancel: this.onShareCancel
			, onShareContinue: this.onShareContinue
			, onShareCancel: this.onContinueCancel
			, onConfirm: this.onFoundationSave
			, onCancel: this.onFoundationCancel
		};

		this.setState(previousState => ({
			vStep: 0
			, subscreen: previousState.subscreen + 1
			, form: args
			, summaryDetails: summaryDetails
			, verificationHandler: verificationHandler
		}));
	}
onFoundationSave = (publishTime) => {
		//alert( 'save' );
		var sessionId = 1;// TODO take it from the login response
		service = new FoundationService();
		var form = this.state.form;
		form.setVerificationDetails(this.state.shareUserList, publishTime);
		service.addFoundation(form, this.foundationSaveHandler);

		//this.props.controller(this.props.screen, this.props.subscreen);
	}
	 foundationSaveHandler ( result )
                {
                //alert( JSON.stringify(result));
                if(result.code == 0)
                        {
                        //this.props.navigation.navigate('Password',{user:result});
                        alert('successfully added foundation');
                        }
                else
                        {
                        message = 'Error adding foundation' + result.code
                                 + ', details [' + result.status + ']'
                        //              + JSON.stringify(result)
                                ;
                        alert(message);
                        //        this.props.navigation.navigate('CreateAccount',{NameOBJ: this.state.userID});
                        }
				}
				
					//for Foundation  allocate task Handler

	allocationHandler = ( args ) =>
		{
		let desc = 'admin/allocate task';

		var taskSynopsis = '';

		for (var key in args.selection) 
			//this.state.roleUsersMap.map(() 
			{
			if (args.selection.hasOwnProperty(key)) 
				{
				var task = args.selection[key];
				if( task )
					{
					taskSynopsis += key + ',';
					}

					/*
				for (var subkey in task ) 
					{
					if (task.hasOwnProperty(subkey)) 
						{
						task[subkey].map( ( subtask ) =>  
							{
							if( subtask.allocated )
								{
								taskSynopsis += subtask.name + ',';
								}
							} );
						}
					}
					*/

				}
			}

		let summaryDetails =
				{
               			userDisplayId: 'asfg0001'
				,userName: 'shinde sir'
				,userLocaleName: 'शिंदे '
				, location: 'Office'
				, userId: '1234567890'
				, loginTimestamp: '1234567890'
				, taskDesc: desc
				, taskTimestamp: new Date() 
				, taskContent: taskSynopsis 
    				};

		let verificationHandler = 
				{
				onSummaryContinue:this.verificationSummaryHandler
				,onSummaryCancel:this.onShareCancel
				,onShareContinue:this.onShareContinue
				,onShareCancel:this.onContinueCancel
             			,onConfirm:this.onAllocationSave
             			,onCancel:this.onAllocationCancel
				};

		this.setState(previousState =>( {
						vStep:0
						,subscreen:previousState.subscreen + 1
						,form : args
						,summaryDetails:summaryDetails 
						,verificationHandler : verificationHandler 
						}));
		}

	verificationSummaryHandler = () =>
		{
		this.setState(previousState => ({vStep:1}));
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

	

	

	onAllocationSave= ( publishTime ) => 
                {
                //alert( 'save' );
		var sessionId = 1;// TODO take it from the login response
                service = new TaskService();
		var form = this.state.form;
		// build the new and deleted task list (comma separated)
		var csTaskIds = '';

		for (var key in form.taskMap) 
			//this.state.roleUsersMap.map(() 
			{
			if (form.taskMap.hasOwnProperty(key)) 
				{
				var task = form.taskMap[key];
				for (var subkey in task ) 
					{
					if (task.hasOwnProperty(subkey)) 
						{
						if( form.selection[subkey] )
							{
							task[subkey].map( ( subtask ) =>  
								{
								/*if( subtask.allocated )
									{
									csTaskIds += subtask.id + ',';
									}
									*/
								csTaskIds += subtask.taskId + ',';
								} );
							}
						}
					}

				}
			}


		// TODO removed tasks
		sessionId = 1;
		var verificationDetails 
		= new VerificationRequest( this.state.shareUserList, publishTime ); 
                service.allocateTasks( {
					"sessionId" : sessionId
					,"userId": this.state.admin.id
					,"csNewIds": csTaskIds 
					,"csRemovedIds": "" 
					,"verificationDetails": verificationDetails  
					} 
					, this.taskAllocateServiceResponseHandler );

                //this.props.controller(this.props.screen, this.props.subscreen);
                }
	
	onAllocationCancel= ( ) => 
		{
		this.setState({screen : 0, subscreen: 0});
		}


	onPrefixCancel = () =>
                {
		this.setState({screen : 0, subscreen: 0});
                }

	onContinueCancel = () => {
		this.setState({ subscreen: 0 });
	}

	onShareCancel = () => {
		this.setState({ screen: 1, subscreen: 0 });
	}



	
       

	taskAllocateServiceResponseHandler = ( result ) =>
		{
                //alert( JSON.stringify(result));
                if(result.code == 0)
                        {
                        //this.props.navigation.navigate('Password',{user:result});
                        alert('successfully allocated tasks');
                        }
                else
                        {
                        message = 'Error allocating tasks' + result.code
                                 + ', details [' + result.status + ']'
                        //              + JSON.stringify(result)
                                ;
                        alert(message);
                        //        this.props.navigation.navigate('CreateAccount',{NameOBJ: this.state.userID});
                        }
		}
	
	//
	// Admin notifications
	//

	// Notification that foundation details are found and admin can proceed with his/her 
	// registration
	onAdminNext = (foundationParam) => {
		this.setState((previousState) =>
			(
				{
					foundation: foundationParam
					, subscreen: previousState.subscreen + 1
				}
			));
	}

	addAdminHandler = (args) => {
		let desc = 'foundation/add admin';
		let summaryDetails =
		{
			userDisplayId: 'asfg0001'
			, userName: 'shinde sir'
			, userLocaleName: 'शिंदे '
			, location: 'Office'
			, userId: '1234567890'
			, loginTimestamp: '1234567890'
			, taskDesc: desc
			, taskTimestamp: new Date()
			, taskContent: args.adminFirstName + ' ' + args.adminLasName
		};

		let verificationHandler =
		{
			onSummaryContinue: this.verificationSummaryHandler
			, onSummaryCancel: this.onShareCancel
			, onShareContinue: this.onShareContinue
			, onShareCancel: this.onContinueCancel
			, onConfirm: this.onAdminSave
			, onCancel: this.onFoundationCancel
		};

		this.setState(previousState => ({
			vStep: 0
			, subscreen: previousState.subscreen + 1
			, form: args
			, summaryDetails: summaryDetails
			, verificationHandler: verificationHandler
		}));
	}

	onAdminSave = (publishTime) => {
		//alert( 'save' );
		var sessionId = 1;// TODO take it from the login response
		service = new FoundationService();
		var form = this.state.form;
		form.setVerificationDetails(this.state.shareUserList, publishTime);
		service.addAdmin(form, this.adminSaveHandler);

		//this.props.controller(this.props.screen, this.props.subscreen);
	}

	adminSaveHandler(result) {
		alert(JSON.stringify(result));
		if (result.code == 0) {
			//this.props.navigation.navigate('Password',{user:result});
			alert('successfully added Admin');
		}
		else {
			message = 'Error adding admin' + result.code
				+ ', details [' + result.status + ']'
				//              + JSON.stringify(result)
				;
			alert(message);
			//        this.props.navigation.navigate('CreateAccount',{NameOBJ: this.state.userID});
		}
	}
	//
	//
	// Admin Task Allocation
	//
	//

	// Notification that foundation details are found and admin can proceed with his/her 
	// registration
	onAdminSelection = (adminParam) => {
		this.setState((previousState) =>
			(
				{
					admin: adminParam
					, subscreen: previousState.subscreen + 1
				}
			));
	}

}



