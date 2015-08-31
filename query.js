angular.module('ideas.query', [])


.controller('queryController', function($scope, $location, QueryHandler){

	$scope.query = {};
	$scope.addQuery = function(query){
		QueryHandler.addQuery(query).then(function(data){
			console.log('called addQuery', query)
			$scope.data.queries = data;

		});
	};

});