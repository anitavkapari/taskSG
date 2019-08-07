import BaseRequestForm from '../BaseRequestForm.js' 


export default class SearchForm extends BaseRequestForm
	{
	constructor
		(	sessionId 
			, foundationName 
		)
		{
		super(sessionId);
		this.foundationName = foundationName ; 
		}
	}
