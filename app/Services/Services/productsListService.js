var app = angular.module('myApp');

app.service('productsListService',function () {
    this.dayList = [];
    this.dayResults = [];
    var list = [];
    this.count = 1;
    this.addInUserList = function (value) {
        list.push(value);
    };
    this.getUserList = function () {
        return list;
    };
    this.clearUserList = function () {
        list.length = 0;
    };
    this.totalDayProteins = 0;
    this.totalDayFats = 0;
    this.totalDayCarbohydrates = 0;
    this.totalDayCalories = 0;
});

