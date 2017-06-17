angularApp.controller('DashBoardController',['$scope', '$uibModal', '$log', '$document', '$state', 'detailsServices', function ($scope, $uibModal, $log, $document, $state, detailsServices) {
  var $ctrl = this;
  $ctrl.animationsEnabled = true;
  $ctrl.details = {};

  $ctrl.open = function (loanType) {
    $ctrl.details.loanType = loanType;
    var parentElem = angular.element($document[0].querySelector('.modal-demo'));
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'formDetails.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (details) {
      $ctrl.details.age = details.age;
      $ctrl.details.gender = details.gender;
      detailsServices.sendDetails($ctrl.details);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
}]);

angularApp.controller('ModalInstanceCtrl',['$uibModalInstance', 'items', '$scope', function ($uibModalInstance, items, $scope) {
  var $ctrl = this;
  $scope.details = {};
  $scope.details.gender = "";
  $scope.details.age = "";
  $scope.genderInvalid = false;
  $scope.ageInvalid = false;
  $ctrl.ok = function () {
    if($scope.details.gender == "" || $scope.details.gender == null){
      $scope.genderInvalid = true;
    }else{
      $scope.genderInvalid = false;
    }
    if($scope.details.age == "" || $scope.details.age == null || $scope.details.age < 18 || $scope.details.age > 100){
      $scope.ageInvalid = true;
    }else{
      $scope.ageInvalid = false;
    }
    if($scope.genderInvalid || $scope.ageInvalid){
      return;
    }
    console.log($scope.details);
    $uibModalInstance.close($scope.details);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
