import BaseRequestForm from '../BaseRequestForm.js' 
import VerificationRequest from '../VerificationRequest.js' 


export default class FoundationAdminForm extends BaseRequestForm
	{
	constructor
		(sessionId 
		, foundationId
		,adminId
        	,adminShortName
        ,adminFirstName
        ,adminMiddleName
        ,adminLastName
        ,adminLocalFirstName
        ,adminLocalMiddleName
        ,adminLocalLastName
        ,adminGender
        ,mobileNo
        ,aadharNo
        ,nameOfPlace
        ,detailedAddress
        ,mapLoc
        ,referenceFirstName
        ,referenceMiddleName
        ,referenceLastName
        ,referenceLocalFirstName
        ,referenceLocalMiddleName
        ,referenceLocalLastName
        ,referenceGender
        ,referenceMobileNo
        ,localDateTime
		)
		{
		super(sessionId);
		this.adminId = adminId;
        this.adminShortName= adminShortName;
        this.adminFirstName = adminFirstName;
        this.adminMiddleName = adminMiddleName;
        this.adminLastName = adminLastName;
        this.adminLocalFirstName = adminLocalFirstName;
        this.adminLocalMiddleName = adminLocalMiddleName;
        this.adminLocalLastName = adminLocalLastName;
        this.adminGender = adminGender;
        this.mobileNo = mobileNo;
        this.aadharNo = aadharNo;

        this.nameOfPlace = nameOfPlace;
        this.detailedAddress = detailedAddress;
        this.mapLoc = mapLoc;
        this.referenceFirstName = referenceFirstName;
        this.referenceMiddleName = referenceMiddleName;
        this.referenceLastName = referenceLastName;
        this.referenceLocalFirstName = referenceLocalFirstName;
        this.referenceLocalMiddleName = referenceLocalMiddleName;
        this.referenceLocalLastName = referenceLocalLastName;
        this.referenceGender = referenceGender;
        this.referenceMobileNo = referenceMobileNo;
        this.localDateTime= localDateTime;

                 this.foundationId= foundationId;
			/*
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
		 */

		//this.verificationDetails = new VerificationRequest( shareUserList , publishTime ) ;
			
		}

	
	setVerificationDetails(	 shareUserList , publishTime	)
		{
		this.verificationDetails = new VerificationRequest( shareUserList , publishTime ) ;
		}
			
	}
