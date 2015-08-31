angular.module('ideas', [
	'ideas.requestHandler',
	'ideas.query',
	'ngRoute'
	])

.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {
			controller: 'queryController'
		})

})