
//	============================================================================
//	============================================================================

// Controller Declarations
	
	var controllers = {};


// Controller Definitions

	// this is simple text controller
	controllers.textController = function( $scope ) {

		$scope.hello = "Yo!";
		$scope.item = {
			name : "AngularJS",
			description : "is, awesome"
		};

	};


	// this is the controller that fetches URL
	controllers.urlController = function( $scope, $location ) {

		$scope.absUrl = $location.absUrl();

	};


	// this is the controller that fetches API data
	controllers.ajaxController = function ($scope, factoryDB, serviceDB) {

		$scope.factorydata = 'Loading...';
	    $scope.servicedata = 'Loading...';

	    getFactoryData();
	    getServiceData();


	    function getFactoryData() {

	        factoryDB.getFactoryData()

	            .success(function (factorydata) {

	                $scope.factorydata = factorydata;

	            })

	            .error(function (error) {

	                $scope.factorydata = 'Unable to load data: ' + error.message;

	            });
	    }


	    function getServiceData() {

	        serviceDB.getServiceData()

	            .success(function (servicedata) {

	                $scope.servicedata = servicedata;

	            })

	            .error(function (error) {

	                $scope.servicedata = 'Unable to load data: ' + error.message;

	            });
	    }
	    
	};


//  Controller Call
	
	testApp.controller(controllers);


//	============================================================================
//	============================================================================
