angular.module('starter.services', [])

.factory('LOLauth', function() {

})

.factory('Champions', function($http,appConfig) {

    var svc = {}

    svc.getStats = function(summonerID) {
        var url = appConfig.baseurl + "/api/lol/na/v1.3/stats/by-summoner/" + summonerID + "/ranked";
        url += "?api_key="+appConfig.key;
        return $http.get(url);
    };
    svc.getIDBySummonerName = function(summoner_name){
      var url = appConfig.baseurl + "/api/lol/na/v1.4/summoner/by-name/" + summoner_name + "/ranked";
      url += "?api_key="+appConfig.key;
      return $http.get(url);
    };

    return svc;
})



