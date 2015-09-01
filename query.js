angular.module('query', [], 'ngRoute')


.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'queryController'
		})
})

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
