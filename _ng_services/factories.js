
//	============================================================================
//	============================================================================

// Factory Declarations
	var factories = {};


// Factory Definitions
	searchApp.factory('factoryDB', ['$http', function ($http) {

		// create an AJAX call
		// connect to DB
		// pull listing information

		var apiPath = '';
		var factoryDB = {};

		factoryDB.getLeads = function () {
			return $http.get(apiPath);
		};

		return factoryDB;

	}]);


// Factory Call
	

//	============================================================================
//	============================================================================
