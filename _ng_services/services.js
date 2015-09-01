
//	============================================================================
//	============================================================================

//	Services Declarations 
	
	var services = {};


//	Services Definitions

	services.serviceDB = function ($http) {

		var apiPath = 'http://jsonplaceholder.typicode.com/posts/1';

		this.getServiceData = function () {

			return $http.get(apiPath);

		};

	};

	
//  Factory Call
	
	testApp.service(services);


//	============================================================================
//	============================================================================
