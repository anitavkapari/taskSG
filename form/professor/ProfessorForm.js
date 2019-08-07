import BaseRequestForm from '../BaseRequestForm.js' 
import VerificationRequest from '../VerificationRequest.js' 


export default class ProfessorForm extends BaseRequestForm
	{
	constructor
		(sessionId 
		,professorId
		,shortName
        ,firstName
        ,middleName
        ,lastName
        ,localFirstName
        ,localMiddleName
        ,localLastName
        ,gender
        ,mobile
		,password
        ,aadharNo
		,localDateTime
		,status
		,role
		,nickName
		,nickNameSuffix
		,localNickName
		,localNickNameSuffix
        ,nameOfPlace
        ,detailedAddress
		,mapLoc
		,curNameOfPlace
		,curDetailedAddress
        ,curMapLoc
       
		)
		{
		super(sessionId);
		this.professorId = professorId;
        this.shortName = shortName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.localFirstName = localFirstName;
        this.localMiddleName = localMiddleName;
        this.localLastName = localLastName;
        this.gender = gender;
        this.mobile = mobile;
		this.password = password;
        this.aadharNo = aadharNo;
        this.localDateTime = localDateTime;
        this.status = status;
        this.role = role;
        this.nickName = nickName;
        this.nickNameSuffix = nickNameSuffix;
        this.localNickName = localNickName;
        this.localNickNameSuffix = localNickNameSuffix;
        this.nameOfPlace = nameOfPlace;
        this.detailedAddress = detailedAddress;
        this.mapLoc = mapLoc;
        this.curNameOfPlace = curNameOfPlace;
        this.curDetailedAddress = curDetailedAddress;
        this.curMapLoc = curMapLoc;

               //  this.foundationId= foundationId;
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
