import BaseRequestForm from '../BaseRequestForm.js'

export default class VerificationRoles extends BaseRequestForm
	{
	constructor
		(	
			sessionId
			,roles 
		)
		{
		super( sessionId ); 
		this.roles = roles ;
		}
	}
