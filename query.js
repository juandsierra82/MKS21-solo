angular.module('query', ['ngRoute'])

//sets up router
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'queryController'
		})
})

//sets up POST request
.factory('QueryHandler', function($http){

var addQuery = function(question){
return $http({
	method: 'POST',
	url: '/',
	data: question
}).then(function(resp){
	console.log('queried', question)
	return resp.data;
})
}

return {
	addQuery: addQuery
}
})

//calls postrequest from indexhtml
.controller('queryController', function ($scope){

	$scope.query = {};
	$scope.addQuery = function(query){
		QueryHandler.addQuery(query)
		.then(function(data){
			console.log('called addQuery', query)
			$scope.data.queries = data;

		});
	};

})
