angular.module('ideas.requestHandler', [])

.factory('QueryHandler', function($http){

var addQuery = function(question){
return $http({
	method: 'POST',
	url: '/api/index',
	data: question
}).then(function(resp){
	console.log('queried')
	return resp.data;
})
}

return {
	addQuery: addQuery
}
})

