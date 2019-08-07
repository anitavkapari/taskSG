import PrefixForm from '../form/foundation/PrefixForm.js'
import BaseService from './BaseService.js'

export default class StudentService extends BaseService
	{

	constructor()
		{
		super();
		}
	/* addPrefix(prefixForm, responseHandler) {
		this.post('personController/addShortName/'
			, prefixForm
			, responseHandler);
	} */
	listOfStudent(baseRequestForm, responseHandler) {
		this.post('personController/listOfStudent/'
			, baseRequestForm
			, responseHandler);
	}
	addNewStudent( AddStudentForm , responseHandler )
		{
		this.post('personController/addStudent/'
		 	, AddStudentForm 
			, responseHandler ); 
		}

	}
	