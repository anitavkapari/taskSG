import BaseRequestForm from '../BaseRequestForm.js' 
import VerificationRequest from '../VerificationRequest.js' 


export default class PrefixForm extends BaseRequestForm
	{
	constructor
		(	sessionId 
			//, role
			, shortName 
			,category
                          , shareUserList
                            , publishTime
		)
		{
		super(sessionId);
		this.id=0;
		//this.createdBy = 'admin';
		//this.role = role;// todo - list
		this.shortName = shortName; // todo - list
		this.category =category; 

		this.verificationDetails = new VerificationRequest( shareUserList , publishTime ) ;
			
		}
	}
