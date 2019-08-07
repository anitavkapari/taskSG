import PrefixForm from '../form/foundation/PrefixForm.js'
import BaseService from './BaseService.js'

export default class ProfessorService extends BaseService
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
	addProfessor( ProfessorForm , responseHandler )
		{
		this.post('personController/addProfessor/'
		 	, ProfessorForm 
			, responseHandler ); 
		}

	}
	