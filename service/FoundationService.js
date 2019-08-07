import PrefixForm from '../form/foundation/PrefixForm.js'
import BaseService from './BaseService.js'

export default class FoundationService extends BaseService {

	constructor() {
		super();
	}

	addPrefix(prefixForm, responseHandler) {
		this.post('foundation/addShortName/'
			, prefixForm
			, responseHandler);
	}

	listRolewiseUsers(rolesForm, responseHandler) {
		this.post('user/verificationRolewiseUsers/'
			, rolesForm
			, responseHandler);
	}

	listPrefix(baseRequestForm, responseHandler) {
		this.post('foundation/listPrefix/'
			, baseRequestForm
			, responseHandler);
	}


	addFoundation(foundationForm, responseHandler) {
		this.post('foundation/createFoundation/'
			, foundationForm
			, responseHandler);
	}

	searchFoundation(foundationSearchForm, responseHandler) {
		this.post('foundation/foundationSearchDetails/'
			, foundationSearchForm
			, responseHandler);
	}

	searchPendingAdmin(foundationSearchForm, responseHandler) {
		this.post('adminController/listPending/'
			, foundationSearchForm
			, responseHandler);
	}



	addAdmin(foundationAdminForm, responseHandler) {
		this.post('adminController/adminRegistration/'
			, foundationAdminForm
			, responseHandler);
	}
}


