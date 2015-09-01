
//	============================================================================
//	============================================================================

// 	Factory Declarations
	var factories = {};


// 	Factory Definitions
	factories.factoryDB = function ($http) {

		var apiPath = 'http://jsonplaceholder.typicode.com/posts/1';
		var factoryDB = {};

		factoryDB.getData = function () {

			return $http.get(apiPath);

		};

		return factoryDB;

	};

	
//  Factory Call
	testApp.factory(factories);

//	============================================================================
//	============================================================================
