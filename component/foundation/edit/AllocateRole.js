import React, {Component} from 'react';
import {Platform,
	StyleSheet, Text, View,  ScrollView, TextInput,Image,ImageBackground,
	TouchableOpacity,ActivityIndicator,CheckBox,UIManager, LayoutAnimation} from 'react-native';

import TaskService from '../../../service/TaskService.js'
import AllocatedTasksRequestForm from '../../../form/task/AllocatedTasksRequestForm.js'

export default class AllocateRole extends Component 
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

				if( this.state.taskList[subkey] )
					{
					list.push
					(
					<TouchableOpacity key={subkey} style={style.sub_Category_Text} 
					onPress={() => this.onTaskSelection(task,  subkey)}
					>
					<View  style={style.chechbox}>
					<Text> {subkey} </Text>

					</View>
					<View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

					</TouchableOpacity>

					);
					}

				}
			}
		//alert( debug );
		return list;
		}

	selectSubtasks = ( ) =>
		{
		var list = [];

		var debug = '';
		var task = this.state.task;
		var subkey = this.state.subkey;

		var tabGroupMap = new Map();
		task[subkey].map( ( subtask ) =>  
			{
			//debug += JSON.stringify( subtask ) + ',';

			var subtaskList = []; 
			if( tabGroupMap.has(subtask.tabGroup) )
				{
				subtaskList = tabGroupMap.get(subtask.tabGroup); 
				}

			subtaskList.push( subtask ); 
			tabGroupMap.set(subtask.tabGroup, subtaskList ); 
			} );

		//debug += JSON.stringify(tabGroupMap );

		for (const [key, value] of tabGroupMap.entries()) 
			{
			var tabGroup = key;
		//	debug += tabGroup ;
  			//console.log(key, value);
		//	}

			/*
		for (var tabGroup in tabGroupMap ) 
			{
			debug += tabGroup ;
			if (tabGroupMap.hasOwnProperty(tabGroup )) 
				{
				*/
				var tabGroupLabel = this.getTabGroupLabel( tabGroup );
				//debug += tabGroupLabel ;
				list.push( 
					<Text style={style.category_Text}>{tabGroupLabel}</Text>
					);

				//tabGroupMap[tabGroup].map( ( subtask ) =>  
				//for( subtask in tabGroupMap[tabGroup])   
				//for( subtask in value)   
				value.map( ( subtask ) =>   
					{
				//	debug += JSON.stringify(subtask);
					list.push
					(
					<TouchableOpacity key={subkey} style={style.sub_Category_Text} 
					//onPress={() => this.onSubtaskSelection(subkey)}
					>
					<View  style={style.chechbox}>
					<Text> {subtask.name} </Text>

					<CheckBox style={{justifyContent:'flex-end'}} 
					value={	subtask.isAllocated } 
					onValueChange={()=>{this.onSubtaskSelection(subtask)}}
					/>

					</View>
					<View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

					</TouchableOpacity>

					);

					if(subtask.isAllocated)
						{
						this.state.taskList[subkey] = true;
						}
					}
					);
				//}
			}
		//alert( debug );
		return list;
		}


	 getTabGroupLabel = ( tabGroup ) =>
		{
		var label = 'TAB#';
		switch( tabGroup )
			{
			case 0:
				{
				label = 'NEW';
				break;
				}
			case 1:
				{
				label = 'Save';
				break;
				}
			case 2:
				{
				label = 'Recent';
				break;
				}
			case 3:
				{
				label = 'WORK';
				break;
				}
			case 4:
				{
				label = 'EDIT';
				break;
				}
			case 5:
				{
				label = 'AUTHORITY';
				break;
				}
			case 6:
				{
				label = 'SETTING';
				break;
				}
			case 7:
				{
				label = 'NA';
				break;
				}
			}
		return label ;
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
		//this.state.taskList[subkey] = !this.state.taskList[subkey] ;
		//alert( 'onTaskSelectiona' + task + subkey);
		this.setState( {subtaskView : true, task: task, subkey:subkey});
		}

	onSubtaskSelection=( subtask )=>
		{
		subtask.isAllocated = !subtask.isAllocated;
		//this.state.taskList[subkey] = !this.state.taskList[subkey] ;
	//	this.setState( {subtaskView : false});
		}

	back=()=>
		{
	//	this.state.taskList[subkey] = !this.state.taskList[subkey] ;
		this.setState( {subtaskView : false});
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
			,subtaskView : false
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

	renderHeader() 
		{
		if(this.state.subtaskView )
			{
			return this.renderHeaderSubtask();
			}
		else
			{
			return this.renderHeaderTask();
			}
		}

	renderHeaderSubtask() 
		{
		return(	<View>
			<Text style={style.welcome1}>Founadation/Allocate Admin Task</Text>

			<TouchableOpacity onPress={() => this.back()}
			style={{justifyContent: 'center',backgroundColor:'#e65c00',
					width: 90, height: 40,borderRadius: 5,marginTop:10}}>

			<Text style={{justifyContent: 'center'
					,textAlign:'center'
					, fontWeight: 'bold'
					,  color:'black'
					,fontSize: 14}}>
			Back
			</Text>
			</TouchableOpacity>
			<ScrollView>
			{
			this.selectSubtasks()
			}
			</ScrollView>
			</View>
		);
		}

	renderHeaderTask() 
		{
		return(<View>	
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

	render() 
		{
		return this.renderData();
		} 


	renderData = () =>
		{
		//alert('renderData');
		if(this.state.subtaskView )
			{
			return this.renderHeaderSubtask(); 
			}
		else
			{
			return this.renderHeader();
			}
		}

	listTasks = () =>
		{
		//alert('listTasks');
		var list = [];

		//alert( JSON.stringify( this.state.taskMap ) );
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
