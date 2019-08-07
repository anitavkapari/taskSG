import PrefixForm from '../form/foundation/PrefixForm.js'
import BaseService from './BaseService.js'

export default class TaskService extends BaseService
	{

	constructor()
		{
		super();
		}

	listAllocatedTasks( allocatedTasksRequest , responseHandler )
		{
		this.post('taskController/allocatedTasks/'
		 	, allocatedTasksRequest
			, responseHandler ); 
		}

	allocateTasks( allocatedTasksRequest , responseHandler )
		{
		this.post('taskController/allocateTasks/'
		 	, allocatedTasksRequest
			, responseHandler ); 
		}
	}

