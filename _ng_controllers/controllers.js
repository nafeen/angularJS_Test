
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

	controllers.jsonController = function ($scope, $http) {

		$scope.json = 'Loading...';

	    $http.get('http://jsonplaceholder.typicode.com/posts/1')
	    	.success(function(data) {
	        	$scope.json = '';
	        	$scope.userId = data.userId;
	        	$scope.title = data.title;
	    	});

	};


// Controller Call
	testApp.controller(controllers);

	testApp.controller('ajaxController', ['$scope', 'factoryDB', function ($scope, factoryDB) {

		$scope.status;
		$scope.customers;
		$scope.orders;
		
		getLeads();

	    function getLeads() {
	        dataFactory.getLeads()
	            .success(function (custs) {
	                $scope.leads = custs;
	            })
	            .error(function (error) {
	                $scope.status = 'Unable to load lead data: ' + error.message;
	            });
	    }

	}  ]);


//	============================================================================
//	============================================================================
