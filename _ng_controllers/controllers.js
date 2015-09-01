
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

		// printing URL to the console
		$scope.absUrl = $location.absUrl();
		console.log($scope.absUrl);

	};


// Controller Call
	searchApp.controller(controllers);

	searchApp.controller('ajaxController', ['$scope', 'factoryDB', function ($scope, factoryDB) {

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

	searchApp.controller('jsonController', function ($scope, $http) {
		$scope.json = 'Cities not yet loaded.';
	    $http.get('http://localhost/cities.json')
	      .success(function(data) {
	        $scope.json = data;
	      });
	});

//	============================================================================
//	============================================================================
