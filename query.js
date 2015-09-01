angular.module('query', ['query.requestHandler'], 'ngRoute')


.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'queryController'
		})
})

.controller('queryController', function ($scope, QueryHandler){

	$scope.query = {};
	$scope.addQuery = function(query){
		QueryHandler.addQuery(query)
		.then(function(data){
			console.log('called addQuery', query)
			$scope.data.queries = data;

		});
	};


})
