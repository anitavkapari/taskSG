import BaseRequestForm from '../BaseRequestForm.js'
import VerificationRequest from '../VerificationRequest.js'


export default class AddStudentForm extends BaseRequestForm {
    constructor
        (sessionId
            , studentId
            , shortName
            , firstName
            , middleName
            , lastName
            , localFirstName
            , localMiddleName
            , localLastName
            , gender
            , mobile
            , aadharNo
            //,localDateTime
            , password
            , nameOfPlace
            , detailedAddress
            //,mapLoc

        ) {
        super(sessionId);
        this.studentId = studentId;
        this.shortName = shortName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.localFirstName = localFirstName;
        this.localMiddleName = localMiddleName;
        this.localLastName = localLastName;
        this.gender = gender;
        this.password = password;

        this.mobile = mobile;
        // this.aadharNo = aadharNo;

        this.nameOfPlace = nameOfPlace;
        this.detailedAddress = detailedAddress;
        //this.mapLoc = mapLoc;

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


    setVerificationDetails(shareUserList, publishTime) {
        this.verificationDetails = new VerificationRequest(shareUserList, publishTime);
    }

}
