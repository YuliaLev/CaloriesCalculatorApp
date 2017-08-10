var app = angular.module('myApp');

app.controller("statisticsController", function ($scope, productsListService, typesOfTrainingConstant) {
    $scope.dayList = productsListService.dayList;
    $scope.dayResults = productsListService.dayResults;
    $scope.totalDayProteins = productsListService.totalDayProteins;
    $scope.totalDayFats = productsListService.totalDayFats;
    $scope.totalDayCarbohydrates = productsListService.totalDayCarbohydrates;
    $scope.totalDayCalories = productsListService.totalDayCalories;
    $scope.flagShowMore = false;
    $scope.trainings = typesOfTrainingConstant;
    $scope.showTotalResult = false;

    $scope.next = function () {
        productsListService.clearUserList();
    };

    $scope.showMore = function (num) {
        $scope.flagShowMore = true;
        $scope.showResult = $scope.dayList[num-1];
    };

    $scope.recommendCalc = function () {
        if($scope.weight > 0 && $scope.weight !== undefined && $scope.weight !== null && $scope.typeOfTraining !== '0' && $scope.typeOfTraining !== '' && $scope.typeOfTraining !== null){
            var i = +$scope.typeOfTraining;
            var inHour = $scope.weight * $scope.trainings[i].value;
            $scope.resultInHours = +($scope.totalDayCalories / inHour).toFixed(2);
            $scope.resultInMinutes = +($scope.resultInHours * 60).toFixed(2);
            $scope.showTotalResult = true;
        }
    }

});


