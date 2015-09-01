angular.module('query', ['ngRoute'])


//sets up POST request
.factory('QueryHandler', function ($http){

var addQuery = function(question){

	return $http({
								method: 'POST',
								url: '/',
								data: question
							})
							.then(function (resp) {
								console.log('queried', question);
								return resp.data
							})
	}		

	return {
		addQuery: addQuery
	}
})

//calls postrequest from indexhtml
.controller('queryController', function ($scope, $location, QueryHandler){

	$scope.query = {};
	$scope.addQuery = function(query){
		QueryHandler.addQuery(query)
		.then(function(data){
			console.log('called addQuery', query)
			$scope.data.queries = data;

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

console.log('angular!')