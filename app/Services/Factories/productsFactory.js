var app = angular.module('myApp');

app.factory('productsFactory',function () {
    function Product(product, proteins, fats, carbohydrates, calories, unit, id) {
        this.product = product;
        this.proteins = proteins;
        this.fats = fats;
        this.carbohydrates = carbohydrates;
        this.calories = calories;
        this.unit = unit;
        this.id =id;
    }
    return {
        createNewProduct: Product
    }
});
