import BaseRequestForm from '../BaseRequestForm.js' 
import VerificationRequest from '../VerificationRequest.js' 


export default class FoundationForm extends BaseRequestForm
	{
	constructor
		(sessionId 
                 ,foundationId,
                 foundationAppName,
                 adminFirstName,
                 adminMiddleName,
                 adminLastName,
                 foundationName,
                 adminLocalFirstName,
                 adminLocalMiddleName,
                 adminLocalLastName,
                 founderGender,
                 foundationOfficeAddr,
                 prefixId
		)
		{
		super(sessionId);
                 this.foundationId= foundationId;
                 this.foundationAppName=foundationAppName; 
                 this.adminFirstName= adminFirstName;
                 this.adminMiddleName=adminMiddleName;
                 this.adminLastName= adminLastName;
                 this.foundationName= foundationName;
                 this.adminLocalFirstName= adminLocalFirstName;
                 this.adminLocalMiddleName= adminLocalMiddleName;
                 this.adminLocalLastName= adminLocalLastName;
                 this.founderGender=founderGender;
                 this.foundationOfficeAddr= foundationOfficeAddr;
                 this.prefixId= prefixId;

		//this.verificationDetails = new VerificationRequest( shareUserList , publishTime ) ;
			
		}

	
	setVerificationDetails(	 shareUserList , publishTime	)
		{
		this.verificationDetails = new VerificationRequest( shareUserList , publishTime ) ;
		}

	
	setId(id )
		{
		this.id = id ;
		}
			
	}
