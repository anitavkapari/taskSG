//mport PrefixForm from '../component/Login.js'

export default class UserService
	{

	constructor()
		{
		}
	getUserId(userID,responseHandler, navigation)
		{
			var result = 
				{
				code : -13,
				status: 'internal error!!'
				};

               var jsonData =  JSON.stringify(userID);
		///alert( jsonData );
		var debug = "";
		
		fetch('http://smsapi-env.whuqucugij.us-east-2.elasticbeanstalk.com/rest/user/login/'
 			,	
 			{
   			method: 'POST',
   			headers: 
 				{
     				Accept: 'application/json',
     				'Content-Type': 'application/json',
   				},
   			body: JSON.stringify(
 				{
     				userId: userID,
     				password: 'admin',
   				}),
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
							//alert( jsonData );

					responseHandler(userID,responseJson,navigation ); //

                        })
                .catch((error) =>
                        {
			debug += " error,=" + error;
			result.status = error; 
			//return result;
			responseHandler( userID,result,navigation ); 
                        //alert('error='+error);
                       
	});
	}
	
	getRole(responseHandler, navigation)
		{
			var result = 
				{
				code : -13,
				status: 'internal error!!'
				};

               var jsonData =  JSON.stringify();
		///alert( jsonData );
		var debug = "";
		
		fetch('http://smsapi-env.whuqucugij.us-east-2.elasticbeanstalk.com/rest/user/userroles/'
 			,	
 			{
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
