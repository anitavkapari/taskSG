import PrefixForm from '../form/foundation/PrefixForm.js'

export default class BaseService {


	constructor() {
		this.BASE_URL
			= "http://smsapi-env.whuqucugij.us-east-2.elasticbeanstalk.com/rest/";
		//	= "http://devikas-env.um9vbjkh2m.ap-south-1.elasticbeanstalk.com/rest/";
		//= "192.168.1.11:8082/rest/";
	}

	post(serviceUrl, form, responseHandler) {
		var result =
		{
			code: -13,
			status: 'internal error!!'
		};

		var jsonData = JSON.stringify(form);
		//alert( jsonData );
		var debug = "";
		let url = this.BASE_URL + serviceUrl;
		//alert( url );

		fetch(url
			,
			{
				credentials: 'include',
				method: 'POST',
				headers:
				{
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: jsonData,
			}
		)
			.then((response) => {
				debug += " scuccess,response=" + response;
				return response.json()
			})
			.then((responseJson) => {
				debug += " scuccess,response=" + responseJson;
				result = responseJson;
				var jsonData = JSON.stringify(responseJson);
				//	result = jsonData ; 
				//	alert( result );
				//return result;
				responseHandler(responseJson);

			})
			.catch((error) => {
				debug += " error,=" + error;
				result.status = error;
				//return result;
				responseHandler(result);
				//alert('error='+error);
			});

		//result = debug; 
		//alert( result.code );
		//return result;
	}
}

