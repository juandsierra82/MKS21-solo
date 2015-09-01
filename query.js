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
			 var trusted = $sce.trustAsHtml('<gcse:searchbox gname="storesearch" webSearchQueryAddition="'+$scope.data.area+' '+$scope.data.text+'"></gcse:searchbox>'+'<br>'+'<gcse:searchresults gname="storesearch"></gcse:searchresults>');
			 $scope.myHtml = trusted;
			  (function() {
    		var cx = '003685054115916028387:npufk3pw1hq';
    		var gcse = document.createElement('script');
    		gcse.type = 'text/javascript';
    		gcse.async = true;
    		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    		var s = document.getElementsByTagName('script')[0];
    		s.parentNode.insertBefore(gcse, s);
    		console.log('Google Running!')
  			})();
			console.log('called addQuery', data, $scope.data)
			// $scope.myScript = script;
			console.log('value of bound scope', trusted)
		});
	};

// var trusted = $sce.trustAsHtml('<gcse:searchbox gname="storesearch" webSearchQueryAddition='+$scope.data.area+'></gcse:searchbox>'+'<br>'+'<gcse:searchresults gname="storesearch"></gcse:searchresults>');
// $scope.myHTML = trusted;
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

