angular.module('query', ['ngRoute', 'ngSanitize'])


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
.controller('queryController', function ($scope, $location, $sce, QueryHandler){

	$scope.data= {};
	$scope.addQuery = function(data){
		QueryHandler.addQuery(data)
		.then(function(data){
			console.log('called addQuery', data, $scope.data)
			var trusted = $sce.trustAsHtml('<gcse:searchbox gname="storesearch" webSearchQueryAddition='+$scope.data.area+'></gcse:searchbox>'+'<br>'+'<gcse:searchresults gname="storesearch"></gcse:searchresults>');

			$scope.myHTML = trusted;
		});
	};
console.log('radio: '+ $scope.data.area);



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

