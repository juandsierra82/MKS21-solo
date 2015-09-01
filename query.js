angular.module('query', ['ngRoute'])


//sets up POST request
.factory('QueryHandler', function ($http){

var addQuery = function(query){

	return $http({
								method: 'POST',
								url: '/',
								data: query
							})
							.then(function (resp) {
								console.log('queried', resp.data);
								return resp.data
							})
	}		
	//returns post request as a method
	return {
		addQuery: addQuery
	}
})

//calls postrequest from indexhtml
.controller('queryController', function ($scope, $location, QueryHandler){

	$scope.data= {};
	$scope.addQuery = function(data){
		QueryHandler.addQuery(data)
		.then(function(data){
			console.log('called addQuery', data, $scope.data)

		});
	};

})

//sets up router
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'queryController'
		})
		console.log('router set up')
})

