import VerificationRequest from '../VerificationRequest.js' 


export default class FoundationAdminResponse 
	{
	constructor
		(id
		,adminId
        	,adminShortName
        	,adminFirstName
        	,adminMiddleName
        	,adminLastName
		)
		{
		this.adminId = adminId;
        	this.adminShortName= adminShortName;
        	this.adminFirstName = adminFirstName;
        	this.adminMiddleName = adminMiddleName;
        	this.adminLastName = adminLastName;
			
		}

	}
