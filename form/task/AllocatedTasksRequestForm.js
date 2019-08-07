import BaseRequestForm from '../BaseRequestForm.js' 


export default class AllocatedTasksRequestForm  extends BaseRequestForm
	{
	constructor
		(	sessionId 
			, userId 
		)
		{
		super(sessionId);
		this.userId = userId ; 
		}
	}
