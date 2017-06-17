angularApp.controller("ResultsController",["$document", "$uibModal", "$log", "$scope", "detailsServices",
  function($document, $uibModal, $log, $scope, detailsServices){
  $scope.resultsDetail = detailsServices.getDetails();
  console.log($scope.resultsDetail);

  $scope.animationsEnabled = true;

  $scope.open = function (interestRate) {
    $scope.interestRate = interestRate;
    var parentElem = angular.element($document[0].querySelector('.modal-demo'));
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'emiCalculator.html',
      controller: 'ModalInstanceCtrl2',
      controllerAs: '$ctrl',
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $scope.interestRate;
        }
      }
    });

    modalInstance.result.then(function (details) {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}]);

angularApp.controller('ModalInstanceCtrl2',['$uibModalInstance', 'items', '$scope',  function ($uibModalInstance, items, $scope) {
  var $ctrl = this;
  console.log(items);
  $ctrl.interestRate = items;
  $ctrl.calculate = function(){
    console.log(items + " " + $ctrl.loanAmount + " " + $ctrl.tenure);
      ratePerMonth = $ctrl.interestRate / 1200;
      onePRate = Math.pow((1 + ratePerMonth),$ctrl.tenure);
      $ctrl.emi = $ctrl.loanAmount * ratePerMonth * onePRate / (onePRate - 1);
  }
  $ctrl.ok = function () {

    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
