
//	============================================================================
//	============================================================================

//	Module Declarations 

	var testApp = angular.module("testApp", ['ngRoute']);

//	============================================================================
//	============================================================================

//	Routes 

	testApp.config( function ($routeProvider) {

		$routeProvider

			.when('/', {

				controller : 'textController',
				templateUrl : '/'

			})

			.otherwise({ redirectTo: '/' });

	} );

//	============================================================================
//	============================================================================

//	Filter Declarations 

	var filters = {};


//	Filter Definitions 

	filters.subString = function () {

		return function(input, splitChar, splitIndex) {

	        // do some bounds checking here to ensure it has that index
	        
	        return input.split(splitChar)[splitIndex];

	    }
	};


//	Filter Call 

	testApp.filter(filters);

//	============================================================================
//	============================================================================
