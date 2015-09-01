
//	============================================================================
//	============================================================================

// Factory Declarations
	var factories = {};


// Factory Definitions
	testApp.factory('factoryDB', ['$http', function ($http) {

		// create an AJAX call
		// connect to DB
		// pull listing information

		var apiPath = 'http://jsonplaceholder.typicode.com/posts/1';
		var factoryDB = {};

		factoryDB.getLeads = function () {
			return $http.get(apiPath);
		};

		return factoryDB;

	}]);


// Factory Call
	

//	============================================================================
//	============================================================================
