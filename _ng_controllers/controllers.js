
//	============================================================================
//	============================================================================

// Controller Declarations
	var controllers = {};


// Controller Definitions
	controllers.textController = function( $scope ) {

		$scope.hello = "Yo!";
		$scope.item = {
			name : "AngularJS",
			description : "is, awesome"
		};

	};

	controllers.urlController = function( $scope, $location ) {

		$scope.absUrl = $location.absUrl();

	};

	controllers.ajaxController = function ($scope, factoryDB) {

	    $scope.data;
	    $scope.status;

	    getData();

	    function getData() {

	        factoryDB.getData()

	            .success(function (data) {

	                $scope.data = data;

	            })

	            .error(function (error) {

	                $scope.status = 'Unable to load data: ' + error.message;

	            });
	    }

	};


// Controller Call
	testApp.controller(controllers);

//	============================================================================
//	============================================================================
