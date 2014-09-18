var app = angular.module('myApp', []);

app.controller('SillyController', function($scope){
	$scope.person = {
		name: 'Karen'
	};
});

app.controller('ScoreboardController', function($scope){
	var generatePlayer = function() {
		return {
			name: '',
			points: 0,
			score: function(amount){
				this.points += amount;
			}
		};
	};

	var names = ['Zvi', 'Alex', 'Sarina', 'Babar', 'Quincy', 'Charlotte', 'Wendell', 'Heidi'];

	$scope.players = names.map(function(name){
			// var newPlayer = {};
			var newPlayer = generatePlayer();
			newPlayer.name = name;
			newPlayer.points = parseInt(Math.random()*10, 10);
			return newPlayer;
		});

	// $scope.score = function(amount, player){
	//	player.score += amount;
	// };

	$scope.maxPoints = function(){
		var max = 0;
		for (var i=0; i < $scope.players.length; i++) {
			if ($scope.players[i].points > max) {
				max = $scope.players[i].points;
			}
		}
		return max;
	};
});

app.filter('hasA', function(){
	return function(input) {
		return input.filter(function(item){
			return item.name.toLowerCase().indexOf('a') != -1;
		});
	};
});

app.directive('aeroDirective', function(){
	return {
		restrict: 'A',
		replace: true,
		scope: false,
		templateUrl: 'static/partials/player.html'
	};
});