
//	============================================================================
//	============================================================================

//	Module Declarations 

	var searchApp = angular.module("searchApp", ['ngRoute']);

//	============================================================================
//	============================================================================

//	Routes 

	searchApp.config( function ($routeProvider) {

		$routeProvider

			.when('/', {

				controller : 'textController',
				templateUrl : 'http://localhost/partial.html'

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

	searchApp.filter(filters);

//	============================================================================
//	============================================================================
