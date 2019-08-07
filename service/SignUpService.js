import PrefixForm from '../form/foundation/PrefixForm.js'

export default class FoundationService
	{

	constructor()
		{
		}

	registrationUser(  )
		{
		var result = 
				{
				code : -13,
				status: 'internal error!!'
				};

                var jsonData =  JSON.stringify( prefixForm );
		///alert( jsonData );
		var debug = "";

		fetch('http://devikas-env.um9vbjkh2m.ap-south-1.elasticbeanstalk.com/rest/foundation/addShortName/'
                        ,
                        {
			credentials: 'include', 
                        method: 'POST',
                        headers:
                                {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                },
                        body:  jsonData ,
                        }
                        )
                 .then((response) =>  
			 	{ 
				debug += " scuccess,response=" + response;
				return response.json() 
				})
			.then((responseJson) =>
                        {
			debug += " scuccess,response=" + responseJson;
			result = responseJson; 
                	var jsonData =  JSON.stringify( responseJson );
		//	result = jsonData ; 
		//	alert( result );
			//return result;
			responseHandler(responseJson ); 

                        })
                .catch((error) =>
                        {
			debug += " error,=" + error;
			result.status = error; 
			//return result;
			responseHandler( result ); 
                        //alert('error='+error);
                        });

		//result = debug; 
		//alert( result.code );
		//return result;
                }
				
				
				
				addNewAdmin( prefixForm , responseHandler )
		{
		var result = 
				{
				code : -13,
				status: 'internal error!!'
				};

                var jsonData =  JSON.stringify( prefixForm );
		///alert( jsonData );
		var debug = "";

fetch('http://devikas-env.um9vbjkh2m.ap-south-1.elasticbeanstalk.com/rest/adminController/adminRegistration'
                        ,
                        {
			credentials: 'include', 
                        method: 'POST',
                        headers:
                                {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                },
                        body:  jsonData ,
                        }
                        )
                 .then((response) =>  
			 	{ 
				debug += " scuccess,response=" + response;
				return response.json() 
				})
			.then((responseJson) =>
                        {
			debug += " scuccess,response=" + responseJson;
			result = responseJson; 
                	var jsonData =  JSON.stringify( responseJson );
		//	result = jsonData ; 
		//	alert( result );
			//return result;
			responseHandler(responseJson ); 

                        })
                .catch((error) =>
                        {
			debug += " error,=" + error;
			result.status = error; 
			//return result;
			responseHandler( result ); 
                        //alert('error='+error);
                        });

		//result = debug; 
		//alert( result.code );
		//return result;
                }


	}

