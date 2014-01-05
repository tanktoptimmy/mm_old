function MissingMenController($scope, $http, $timeout) {
  $scope.matches = [];
  $scope.newMatch = {
    matchName   :'',
    formation   : '442',
    homeMatch   : true,
    date        : '',
    description : ''
  };

  $scope.doneFilter = { done : true };
  $scope.notDoneFilter = { done : false };

  $scope.setMatches = function(matches) {
    $scope.matches = matches;
  };

  $scope.update = function(todo) {
    $http.put('/match/' + match._id + '.json', match).success(function(data) {
      if (!data.match) {
        alert(JSON.stringify(data));
      }
    });
  };

  $scope.updateList = function() {
    $http.get('/matches.json').success(function(data) {
      $scope.matches = data.matches;
    });

    $timeout(function() {
      $scope.updateList();
    }, 30 * 60 * 1000); // update every 30 minutes;
  };

  $timeout(function() {
    $scope.updateList();
  }, 30 * 60 * 1000); // update every 30 minutes;

  $scope.updateList();

  $scope.addNewMatch = function() {
    $http.post('/match.json', $scope.newMatch).success(function(data) {
      if (data.match) {
        $scope.matches.push(data.match);
        $scope.newMatch.description = '';
        $scope.newMatch.matchName = '';
      } else {
        alert(JSON.stringify(data));
      }
    });
  };
}