(function() {
  'use strict';

  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', LunchCheckerController)

    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope) {
    $scope.inputs = "";
    $scope.message = "";

    $scope.Calculate = function() {
        var input = $scope.inputs;
        if (input == "") {
          $scope.message = "Please enter data first!";
        }
        else {
          var inputstr = input.split(",");
          if(inputstr.length <=3) {
            $scope.message = "Enjoy!";
          }
          else {
            $scope.message = "Too Much!";
          }
        }
    };

  };

})();
