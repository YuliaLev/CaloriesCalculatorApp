var app = angular.module('myApp');

app.controller("mainController", function ($scope, productsConstant, productsFactory, productsListService) {
    $scope.productsList = productsConstant;
    $scope.flagNewProductForm = false;
    $scope.flagAdd = false;
    $scope.flagResult = false;

    $scope.addNewProductForm = function () {
        $scope.flagNewProductForm = !$scope.flagNewProductForm;
        $scope.flagAdd = false;
    };

     $scope.clearValues = function (){
        $scope.nameOfProduct = "";
        $scope.numberOfCarbohydrates = null;
        $scope.numberOfProteins = null;
        $scope.numberOfFats = null;
        $scope.numberOfCalories = null;
    };

    $scope.addNewProduct = function () {
        if (!($scope.numberOfCarbohydrates === undefined || $scope.nameOfProduct === undefined || $scope.typeOfUnit  === undefined || $scope.numberOfProteins === undefined || $scope.numberOfFats === undefined || $scope.numberOfCalories === undefined ||
            $scope.numberOfCarbohydrates === null || $scope.nameOfProduct === "" || $scope.typeOfUnit  === null || $scope.numberOfProteins === null || $scope.numberOfFats === null || $scope.numberOfCalories === null)){
            if ($scope.numberOfCarbohydrates >= 0 && $scope.numberOfProteins >= 0 && $scope.numberOfFats >= 0 && $scope.numberOfCalories >=0) {
                var numberInList = productsConstant.length;
                $scope.newProduct = new productsFactory.createNewProduct($scope.nameOfProduct, $scope.numberOfProteins, $scope.numberOfFats, $scope.numberOfCarbohydrates, $scope.numberOfCalories, $scope.typeOfUnit,  numberInList);
                productsConstant.push($scope.newProduct);
                $scope.clearValues();
                $scope.message = "Данный продукт добавлен в общий список";
            }
        }
    };

    $scope.add = function (id) {
        if(!$scope.flagResult){
            $scope.id = id;
            $scope.flagNewProductForm = false;
            $scope.selectedProduct = productsConstant[id];
            $scope.flagAdd = true;
        }
    };

    $scope.addToList = function (measureName) {
        var double = false;
        if((measureName === $scope.selectedProduct.unit) && $scope.valueOfProduct > 0 && $scope.valueOfProduct !== null && $scope.valueOfProduct !== undefined) {
            if ($scope.userList) {
                $scope.userList.forEach(function (item) {
                    if (item.id == $scope.selectedProduct.id) {
                        double = true;
                        console.log("такой продукт уже был добавлен в прием пищи, заменяем количество продукта в приеме пищи");
                        $scope.selectedProduct.value = +$scope.valueOfProduct;
                        $scope.selectedProduct.caloriesAmount = +($scope.selectedProduct.calories / 100 * $scope.selectedProduct.value).toFixed(7);
                        $scope.selectedProduct.proteinsAmount = +($scope.selectedProduct.proteins / 100 * $scope.selectedProduct.value).toFixed(7);
                        $scope.selectedProduct.fatsAmount = +($scope.selectedProduct.fats / 100 * $scope.selectedProduct.value).toFixed(7);
                        $scope.selectedProduct.carbohydratesAmount = +($scope.selectedProduct.carbohydrates / 100 * $scope.selectedProduct.value).toFixed(7);
                    }
                });
            }
            if (!double) {
                $scope.selectedProduct.value = +$scope.valueOfProduct;
                $scope.selectedProduct.caloriesAmount = +($scope.selectedProduct.calories / 100 * $scope.selectedProduct.value).toFixed(7);
                $scope.selectedProduct.proteinsAmount = +($scope.selectedProduct.proteins / 100 * $scope.selectedProduct.value).toFixed(7);
                $scope.selectedProduct.fatsAmount = +($scope.selectedProduct.fats / 100 * $scope.selectedProduct.value).toFixed(7);
                $scope.selectedProduct.carbohydratesAmount = +($scope.selectedProduct.carbohydrates / 100 * $scope.selectedProduct.value).toFixed(7);
                productsListService.addInUserList($scope.selectedProduct);
                $scope.userList = productsListService.getUserList();
            }
            $scope.valueOfProduct = "";
        }
    };

    $scope.calculateCalories = function () {
        if($scope.userList !== undefined && $scope.userList.length) {
            $scope.flagResult = true;
            $scope.flagAdd = false;
            $scope.result = {};
            var date = new Date();
            $scope.time = "Время " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            var caloriesTotalAmount = 0;
            var proteinsTotalAmount = 0;
            var fatsTotalAmount = 0;
            var carbohydratesTotalAmount = 0;
            $scope.userList.forEach(function (item) {
                caloriesTotalAmount += item.caloriesAmount;
                proteinsTotalAmount += item.proteinsAmount;
                fatsTotalAmount += item.fatsAmount;
                carbohydratesTotalAmount += item.carbohydratesAmount;
            });
            $scope.result.caloriesTotalAmount = +caloriesTotalAmount.toFixed(7);
            $scope.result.proteinsTotalAmount = +proteinsTotalAmount.toFixed(7);
            $scope.result.fatsTotalAmount = +fatsTotalAmount.toFixed(7);
            $scope.result.carbohydratesTotalAmount = +carbohydratesTotalAmount.toFixed(7);
            $scope.result.time = $scope.time;
            $scope.result.num =  productsListService.count;
            var clone = {};
            var allDayListClone = [];
            $scope.userList.forEach(function (item){
                for(var key in item){ clone[key] = item [key]; }
                allDayListClone.push(clone);
                clone= {};
            });
            productsListService.dayList.push(allDayListClone);
            productsListService.dayResults.push($scope.result);
            var totalDayProteins = 0;
            var totalDayFats = 0;
            var totalDayCarbohydrates = 0;
            var totalDayCalories = 0;
            productsListService.dayResults.forEach(function (i) {
                totalDayCalories += +i.caloriesTotalAmount.toFixed(7);
                totalDayProteins += +i.proteinsTotalAmount.toFixed(7);
                totalDayFats += +i.fatsTotalAmount.toFixed(7);
                totalDayCarbohydrates += +i.carbohydratesTotalAmount.toFixed(7);
            });
            productsListService.totalDayCalories = +totalDayCalories.toFixed(7);
            productsListService.totalDayProteins = +totalDayProteins.toFixed(7);
            productsListService.totalDayFats = +totalDayFats.toFixed(7);
            productsListService.totalDayCarbohydrates = +totalDayCarbohydrates.toFixed(7);
            productsListService.count++;
            productsListService.clearUserList();
        }
    };

    $scope.next = function () {
        $scope.flagResult = false;
    }

});



