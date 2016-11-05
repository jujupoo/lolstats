angular.module('starter.controllers', [])


  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.auth = {
      summoner_name: null
    }

    $scope.submit = function () {
      $state.go("tab.champions", {summoner_name: $scope.auth.summoner_name})
    }
  })

  .controller('ChampionsCtrl', function ($scope, $stateParams, appConfig, Champions) {
    $scope.stats = null;

    var initStats = function () {

      var summoner_name = $stateParams.summoner_name;

      Champions.getIDBySummonerName(summoner_name)
        .then(
        function (result) {
          var sid = result[summoner_name].id();
          return Champions.getStats(sid);
        })
        .catch(function (e) {
          console.log(e);
        })
      
    }

    $scope.$on("$ionicView.enter", function (scopes, states) {
      initStats();
    });

  })

  .controller('AccountCtrl', function ($scope) {
    console.log("Account page");
    $scope.settings = {
      enableFriends: true
    };
  });
