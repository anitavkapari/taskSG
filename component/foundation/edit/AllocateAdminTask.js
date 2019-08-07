import React, {Component} from 'react';
import {Platform,
	StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
	TouchableOpacity,ActivityIndicator,CheckBox,UIManager, LayoutAnimation} from 'react-native';

import TaskService from '../../../service/TaskService.js'
import AllocatedTasksRequestForm from '../../../form/task/AllocatedTasksRequestForm.js'

/*
class Expandable_ListView extends Component 
{

	constructor( props ) 
	{

		super(props);

		this.state = {
			isSelected: true, 
			checked:[],
			layout_Height: 0

		}
	}

	componentWillReceiveProps(nextProps) {
		var selected  = !this.state.isSelected; 
		if (nextProps.item.allocated) {
		//if ( this.state.isSelected ) {
			this.setState(() => {
				return {
					layout_Height: null
				}
			});
		}
		else {
			this.setState(() => {
				return {
					layout_Height: 0
				}
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.layout_Height !== nextState.layout_Height) {
		//if (true) {
			return true;
		}
		return false;
	}
	manageVisibility = (nextProps, nextState) =>
	{
		this.setState({ isSelected: !this.state.isSelected });

	}
	show_Selected_Category = (item) => {

		// Write your code here which you want to execute on sub category selection.
		alert(item);

	}

	render() 
	*/

export default class AllocateAdminTask extends Component 
{
	listTask = ( category, task ) =>
		{
		return (
			<View style={style.Panel_Holder}>

			<TouchableOpacity activeOpacity={0.8} 
		//	onPress={this.props.onClickFunction}
			style={style.category_View}>

			<Text style={style.category_Text}>{category}</Text>
			<TouchableOpacity activeOpacity = { 0.8 }
			style = { style.visibilityBtn } 
	//		onPress = { this.manageVisibility }
			>

			<Image source = { ( this.state.isSelected ) 
				? require('../../image/up.png') : 
				require('../../image/down.png') }style={style.iconStyle} />
			</TouchableOpacity>

			</TouchableOpacity>

			<View style={{ height: 200, overflow: 'hidden' }}>

			{
			this.listSubTasks( task )
			}

			</View>

			</View>

		);
		}

	listSubTasks = ( task ) =>
		{
		var list = [];

		var debug = '';
		for (var subkey in task ) 
			{
			debug += subkey;
			if (task.hasOwnProperty(subkey)) 
				{
				this.state.taskList[subkey] = false;

				task[subkey].map( ( subtask ) =>  
					{
					debug += JSON.stringify( subtask ) + ',';
					// if any subtask is allocated, we assume the task is also
					// allocated
					if(subtask.isAllocated)
						{
						this.state.taskList[subkey] = true;
						}
					}
					);

				list.push
					(
					<TouchableOpacity key={subkey} style={style.sub_Category_Text} 
					//onPress={this.show_Selected_Category.bind(this, subtask.name)}
					>
					<View  style={style.chechbox}>
					<Text> {subkey} </Text>

					<CheckBox style={{justifyContent:'flex-end'}} 
					//value={this.state.checked1}			
					value={	this.state.taskList[subkey] } 
					//checked="true"
					//checked={this.state.checked[subkey]} 
					//onCheckBoxPressed={this.onCheckBoxPressed(subkey)}/>
					///onValueChange={()=>{this.onTaskSelection(subtask)}}
					onValueChange={()=>{this.onTaskSelection(task,subkey)}}
					/>

					</View>
					<View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

					</TouchableOpacity>

					);

				}
			}
		//alert( debug );
		return list;
		}

	/*
	onTaskSelection=( subtask )=>
		{
		subtask.isAllocated = !subtask.isAllocated;  
		}
		*/

	onTaskSelection=( task,subkey )=>
		{
		//task.isTaskAllocated = !task.isTaskAllocated ; 
		this.state.taskList[subkey] = !this.state.taskList[subkey] ;
		}

//	}


	static navigationOptions = 
		{
			header: null
		}

	componentDidMount()
	{
		form = new AllocatedTasksRequestForm ( 1, this.props.admin.id );

		//alert(  JSON.stringify( form ) );

		service = new TaskService();
		service.listAllocatedTasks(form, this.tasksHandler);
	}

	constructor(props)
	{
		super(props);


		this.state={
			checked1: true,
			checked2: true,
			toggle:true
			, taskMap : {}
			,taskList:[]
		}
	}

	tasksHandler = ( response ) =>
		{
		//alert( JSON.stringify( response ));
		//response.roleUsersMap.forEach(this.handleRoleUsers); 
		/*
		for (var key in response.roleUsersMap) 
			{
			if (response.roleUsersMap.hasOwnProperty(key)) 
				{
					//alert(key + " -> " + response.roleUsersMap[key]);
				}
			}
			*/
		this.setState( {taskMap : response.taskMap });
		}

	update_Layout = (key) => 
	{
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		//var taskMap = this.state.taskMap;
		//var task = taskMap[key];
		//const array = [...this.state.AccordionData];
		//array[index]['expanded'] = !array[index]['expanded'];
		const array = [...this.state.taskMap];
		/*
		if( undefined === typeof(array[key]['expanded'] ))
		{
			array[key]['expanded'] = false; 
		}
		*/

		//array[key].allocated = array[key].allocated || true;

		/*
		this.setState(() => {
			return {
				taskMap : array  
			}
		});
		*/
	}

	render() 
	{
		return (
			<View style={style.container}>
			<Text style={style.welcome1}>Founadation/Allocate Admin Task</Text>
			<ScrollView>

			<View  style={{flexDirection: 'row',marginTop:10}} >
			<Text style={style.text}>App Name</Text>
			<Text style={{fontSize: 16,color: 'black',fontWeight: 'bold',marginLeft:50}}>Id</Text>
			</View>

			<View  style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:10}} >

			<Text style={style.text}>{this.props.admin.adminFirstName}{this.props.admin.adminLastName}</Text>
			<Text style={style.text}>{this.props.admin.adminId}</Text>

			<CheckBox
			value={this.state.checked1}			
			onValueChange={() => this.setState({ checked1: !this.state.checked1 })}/>

			</View>


			<View  style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:10}} >
			<Text style={style.text}>Profile</Text>

			<TouchableOpacity onPress={() => this.save()}
			style={{justifyContent: 'center',backgroundColor:'#e65c00',
					width: 90, height: 40,borderRadius: 5,marginTop:10}}>

			<Text style={{justifyContent: 'center'
					,textAlign:'center'
					, fontWeight: 'bold'
					,  color:'black'
					,fontSize: 14}}>
			Save
			</Text>

			</TouchableOpacity>
			</View>


			<ScrollView 
			contentContainerStyle={{ paddingHorizontal: 10
					, paddingVertical: 5 }}>
			{
				this.listTasks()
			}

			</ScrollView>


			</ScrollView>

			</View>
		);
	} 


	listTasks = () =>
		{
		var list = [];

		for (var key in this.state.taskMap) 
			//this.state.roleUsersMap.map(() 
			{
			if (this.state.taskMap.hasOwnProperty(key)) 
				{
				//alert( this.state.taskMap[category]);
				//alert( category );
				//this.state.taskMap[category].map( ( task ) =>  
				var task = 
				this.state.taskMap[key];
				//alert( JSON.stringify( task ) );
				list.push(
					this.listTask( key,task )
						/***
							<Expandable_ListView key={key} 
							onClickFunction={this.update_Layout.bind(this, key)} item={task} 
							/>
						****/
					);


				}
			//alert( msg );
			}
		return list;
		}

	save = () =>
		{
		//this.setState( {taskMap : response.taskMap });
		//alert( 'save' );	
		//this.props.controller( { taskMap: this.state.taskMap } );
		this.props.controller( { taskMap: this.state.taskMap
					,selection: this.state.taskList } );
		}

	}



const style = StyleSheet.create({
	container:
	{
		flex: 1,
		padding:5,
		backgroundColor: '#99ffff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: (Platform.OS === 'ios') ? 20 : 0,

	},
	chechbox:{ justifyContent: 'space-between',    flexDirection: 'row',},

	visibilityBtn:
	{
		position: 'absolute',
		right: 3,
		height: 40,
		width: 35,
		padding: 5
	},
	separator: {  
		marginTop:15,
		marginLeft: 10,
		fontSize: 18,  
		height: 40,	 width:300,
		fontWeight: 'bold',  
		color: "red",  
		backgroundColor: '#ccffe6',
	}, 
	separator1: {  
		marginTop:15,
		marginLeft: 10,
		fontSize: 18,  
		height: 40,	 width:300,
		fontWeight: 'bold',  
		color: "black",  
		backgroundColor: '#b3ffff',
	}, 
	welcome1: {
		fontSize: 20,
		borderColor: '#ffffff',
		color: 'black',
		borderWidth: 1.0,width:310,
		backgroundColor:'#e6ac00',
		textAlign: 'center',
		height: 50,marginTop:30,
	},
	text: {
		fontSize: 16,
		color: 'black',
		fontWeight: 'bold',  
	},
	iconStyle: {

		width: 30,
		height: 30,
		justifyContent: 'flex-end',
		alignItems: 'center',

	},

	sub_Category_Text: {
		fontSize: 18,
		color: '#000',
		padding: 10
	},

	category_Text: {
		textAlign: 'center',
		color: 'red',
		fontWeight:'bold',
		fontSize: 18,
		padding: 10
	},

	category_View: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: "red",  
		backgroundColor: '#ccffe6',		height: 40,	 width:300,
	},

	Btn: {
		padding: 10,
		backgroundColor: '#FF6F00'
	}
});
