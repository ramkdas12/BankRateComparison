angularApp.factory("detailsServices",["$http", "$state", function($http, $state){
  var detailsService = {};
  var resultsDetails = {};
  detailsService.getDetails = function(){
    return resultsDetails;
  }
  detailsService.sendDetails = function(details){
    $http({
      method: 'POST',
      url: '/sendDetails.json',
      data: details,
    }).then(function successCallback(response) {
      console.log(response.data);
      resultsDetails = response.data;
      $state.go("results");
    }, function errorCallback(response) {
      console.log(response);
      return false;
    });
  }
  return detailsService;
}]);
