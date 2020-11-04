app.controller('timeCtrl', ['$scope', '$interval', function($scope, $interval) {
		$scope.theTime = new Date().toLocaleTimeString();
		$interval(function(){
			$scope.theTime = new Date().toLocaleTimeString();
		},1000);
	
}]);
