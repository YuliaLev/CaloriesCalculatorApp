var app = angular.module('myApp');

app.constant('productsConstant', [
    {
        product: "Сок ананасовый",
        proteins: 0.2,
        fats: 0.2,
        carbohydrates: 11.4,
        calories: 48,
        id:0,
        unit: "гр"
    },
    {
        product: "Сок апельсиновый",
        proteins: 0.9,
        fats: 0.1,
        carbohydrates: 8.4,
        calories: 36,
        id:1,
        unit: "гр"
    },
    {
        product: "Сок виноградный",
        proteins: 0.3,
        fats: 0,
        carbohydrates: 14.5,
        calories: 56,
        id:2,
        unit: "гр"
    },
    {
        product: "Сок вишнёвый",
        proteins: 0.5,
        fats: 0,
        carbohydrates: 10.6,
        calories: 49,
        id:3,
        unit: "гр"
    },
    {
        product: "Сок яблочный",
        proteins: 0.5,
        fats: 0.4,
        carbohydrates: 9.7,
        calories: 42,
        id:4,
        unit: "гр"
    },
    {
        product: "Кофе без сахара и молока",
        proteins: 0.2,
        fats: 0,
        carbohydrates: 0.3,
        calories: 2,
        id:5,
        unit: "гр"
    },
    {
        product: "Кофе c молоком и сахаром",
        proteins: 0.7,
        fats: 1,
        carbohydrates: 11.2,
        calories: 56,
        id:6,
        unit: "гр"
    },
    {
        product: "Чай зелёный",
        proteins: 0,
        fats: 0,
        carbohydrates:0,
        calories: 1,
        id:7,
        unit: "гр"
    },
    {
        product: "Чай чёрный",
        proteins: 0,
        fats: 0,
        carbohydrates:0,
        calories: 1,
        id:8,
        unit: "гр"
    },
    {
        product: "Каша овсяная",
        proteins: 3.2,
        fats: 1.8,
        carbohydrates:15.4,
        calories: 93,
        id:9,
        unit: "гр"
    },
    {
        product: "Каша манная",
        proteins: 2.5,
        fats: 0.3,
        carbohydrates:16.4,
        calories: 77,
        id:10,
        unit: "гр"
    },
    {
        product: "Колбаса вареная Докторская",
        proteins: 13.4,
        fats: 22.9,
        carbohydrates: 0,
        calories: 257,
        id:11,
        unit: "гр"
    },
    {
        product: "Колбаса сырокопченая",
        proteins: 24.3,
        fats: 41.6,
        carbohydrates: 0,
        calories: 476,
        id:12,
        unit: "гр"
    },
    {
        product: "Салями",
        proteins: 21.3,
        fats: 53.6,
        carbohydrates: 1.1,
        calories: 577,
        id:13,
        unit: "гр"
    },
    {
        product: "Сосиски свиные",
        proteins: 9.2,
        fats: 23.2,
        carbohydrates: 4.5,
        calories: 284,
        id:14,
        unit: "гр"
    },
    {
        product: "Сосиски куриные",
        proteins: 10.6,
        fats: 22.1,
        carbohydrates: 3.3,
        calories: 242,
        id:15,
        unit: "гр"
    },
    {
        product: "Майонез 67%",
        proteins: 3.3,
        fats: 67,
        carbohydrates: 2.4,
        calories: 624,
        id:16,
        unit: "гр"
    },
    {
        product: "Масло подсолнечное",
        proteins: 0,
        fats: 99.9,
        carbohydrates: 0,
        calories: 899,
        id:17,
        unit: "гр"
    },
    {
        product: "Масло сливочное 82,5%",
        proteins: 0.5,
        fats: 82.5,
        carbohydrates: 1,
        calories: 747,
        id:18,
        unit: "гр"
    },
    {
        product: "Масло сливочное 82,5%",
        proteins: 0.5,
        fats: 82.5,
        carbohydrates: 1,
        calories: 747,
        id:19,
        unit: "гр"
    },
    {
        product: "Йогурт 1.5%",
        proteins: 4.3,
        fats: 1.5,
        carbohydrates: 8.4,
        calories: 65,
        id:20,
        unit: "гр"
    },
    {
        product: "Йогурт 3.2%",
        proteins: 5,
        fats: 3.2,
        carbohydrates: 8.9,
        calories: 87,
        id: 21,
        unit: "гр"
    },
    {
        product: "Кефир 1%",
        proteins: 2.8,
        fats: 1,
        carbohydrates: 4,
        calories: 37,
        id: 22,
        unit: "гр"
    },
    {
        product: "Кефир 2,5%",
        proteins: 3,
        fats: 2.5,
        carbohydrates: 4,
        calories: 51,
        id: 23,
        unit: "гр"
    },
    {
        product: "Молоко 2,5%",
        proteins: 2.8,
        fats: 2.5,
        carbohydrates: 4.6,
        calories: 53,
        id: 24,
        unit: "гр"
    },
    {
        product: "Молоко 3,2%",
        proteins: 2.8,
        fats: 3.2,
        carbohydrates: 4.6,
        calories: 58,
        id: 25,
        unit: "гр"
    },
    {
        product: "Сметана 10%",
        proteins: 3,
        fats: 10,
        carbohydrates: 2.9,
        calories: 118,
        id: 26,
        unit: "гр"
    },
    {
        product: "Сметана 20%",
        proteins: 3,
        fats: 20,
        carbohydrates: 2.9,
        calories: 208,
        id: 27,
        unit: "гр"
    },
    {
        product: "Сырки из творожной массы",
        proteins: 7.3,
        fats: 23,
        carbohydrates: 27.6,
        calories: 344,
        id: 28,
        unit: "гр"
    },
    {
        product: "Сыр голландский",
        proteins: 26.4,
        fats: 26.5,
        carbohydrates: 0,
        calories: 352,
        id: 29,
        unit: "гр"
    },
    {
        product: "Сыр пошехонский",
        proteins: 26.4,
        fats: 26.3,
        carbohydrates: 0,
        calories: 348,
        id: 30,
        unit: "гр"
    },
    {
        product: "Сыр российский",
        proteins: 24.1,
        fats: 29.8,
        carbohydrates: 0.4,
        calories: 366,
        id: 31,
        unit: "гр"
    },
    {
        product: "Сыр сулугуни",
        proteins: 20,
        fats: 24.2,
        carbohydrates: 0,
        calories: 293,
        id: 32,
        unit: "гр"
    },
    {
        product: "Творог полужирный",
        proteins: 16.5,
        fats: 9,
        carbohydrates: 1.9,
        calories: 156,
        id: 33,
        unit: "гр"
    },
    {
        product: "Творог жирный",
        proteins: 14,
        fats: 18,
        carbohydrates: 1.9,
        calories: 236,
        id: 34,
        unit: "гр"
    },
    {
        product: "Творог нежирный",
        proteins: 18.2,
        fats: 0.6,
        carbohydrates: 1.8,
        calories: 89,
        id: 35,
        unit: "гр"
    },
    {
        product: "Баранина",
        proteins: 16.2,
        fats: 15.3,
        carbohydrates: 0,
        calories: 201,
        id: 36,
        unit: "гр"
    },
    {
        product: "Говядина",
        proteins: 18.7,
        fats: 12.6,
        carbohydrates: 0,
        calories: 191,
        id: 37,
        unit: "гр"
    },
    {
        product: "Свинина нежирная",
        proteins: 16.3,
        fats: 27.9,
        carbohydrates: 0,
        calories: 318,
        id: 38,
        unit: "гр"
    },
    {
        product: "Свинина жирная",
        proteins: 11.6,
        fats: 49.1,
        carbohydrates: 0,
        calories: 484,
        id: 39,
        unit: "гр"
    },
    {
        product: "Телятина",
        proteins: 19.9,
        fats: 1.1,
        carbohydrates: 0,
        calories: 91,
        id: 40,
        unit: "гр"
    },
    {
        product: "Индейка",
        proteins: 21.1,
        fats: 12.3,
        carbohydrates: 0.6,
        calories: 192,
        id: 41,
        unit: "гр"
    },
    {
        product: "Куриная грудка",
        proteins: 23.6,
        fats: 1.9,
        carbohydrates: 0.4,
        calories: 113,
        id: 42,
        unit: "гр"
    },
    {
        product: "Горошек зеленый",
        proteins: 5.4,
        fats: 0.2,
        carbohydrates: 13.6,
        calories: 75,
        id: 43,
        unit: "гр"
    },
    {
        product: "Кабачки",
        proteins: 0.8,
        fats: 0.3,
        carbohydrates: 5.9,
        calories: 30,
        id: 44,
        unit: "гр"
    },
    {
        product: "Капуста белокочанная",
        proteins: 1.9,
        fats: 0,
        carbohydrates: 5.7,
        calories: 31,
        id: 45,
        unit: "гр"
    },
    {
        product: "Капуста цветная",
        proteins: 2.7,
        fats: 0,
        carbohydrates: 5.2,
        calories: 30,
        id: 46,
        unit: "гр"
    },
    {
        product: "Картофель вареный",
        proteins: 2,
        fats: 0.3,
        carbohydrates: 16.5,
        calories: 80,
        id: 47,
        unit: "гр"
    },
    {
        product: "Картофель жареный",
        proteins: 2.6,
        fats: 9.7,
        carbohydrates: 23.5,
        calories: 198,
        id: 48,
        unit: "гр"
    },
    {
        product: "Лук порей",
        proteins: 3.2,
        fats: 0,
        carbohydrates: 7.1,
        calories: 38,
        id: 49,
        unit: "гр"
    },
    {
        product: "Лук репчатый",
        proteins: 1.6,
        fats: 0,
        carbohydrates: 9.3,
        calories: 41,
        id: 50,
        unit: "гр"
    },
    {
        product: "Морковь",
        proteins: 1.3,
        fats: 0.1,
        carbohydrates: 6.3,
        calories: 29,
        id: 51,
        unit: "гр"
    },
    {
        product: "Огурец",
        proteins: 0.7,
        fats: 0,
        carbohydrates: 1.6,
        calories: 9,
        id: 52,
        unit: "гр"
    },
    {
        product: "Перец зеленый сладкий",
        proteins: 1.2,
        fats: 0,
        carbohydrates: 4.8,
        calories: 24,
        id: 53,
        unit: "гр"
    },
    {
        product: "Перец красный сладкий",
        proteins: 1.2,
        fats: 0,
        carbohydrates: 5.5,
        calories: 26,
        id: 54,
        unit: "гр"
    },
    {
        product: "Редис",
        proteins: 1.5,
        fats: 0,
        carbohydrates: 4.2,
        calories: 22,
        id: 55,
        unit: "гр"
    },
    {
        product: "Салат",
        proteins: 1.6,
        fats: 0,
        carbohydrates: 2.1,
        calories: 15,
        id: 56,
        unit: "гр"
    },
    {
        product: "Свекла",
        proteins: 1.7,
        fats: 0,
        carbohydrates: 10.5,
        calories: 46,
        id: 57,
        unit: "гр"
    },
    {
        product: "Томат",
        proteins: 0.7,
        fats: 0,
        carbohydrates: 2.6,
        calories: 12,
        id: 58,
        unit: "гр"
    },
    {
        product: "Фасоль",
        proteins: 4.4,
        fats: 0,
        carbohydrates: 4.4,
        calories: 36,
        id: 59,
        unit: "гр"
    },
    {
        product: "Арахис",
        proteins: 26.2,
        fats: 45.3,
        carbohydrates: 9.9,
        calories: 555,
        id: 60,
        unit: "гр"
    },
    {
        product: "Грецкий орех",
        proteins: 13.5,
        fats: 61.5,
        carbohydrates: 10.6,
        calories: 662,
        id: 61,
        unit: "гр"
    },
    {
        product: "Миндаль",
        proteins: 18.3,
        fats: 57.9,
        carbohydrates: 13.5,
        calories: 643,
        id: 62,
        unit: "гр"
    },
    {
        product: "Фисташки",
        proteins: 20.1,
        fats: 50.5,
        carbohydrates: 7.3,
        calories: 552,
        id: 63,
        unit: "гр"
    },
    {
        product: "Карп",
        proteins: 16,
        fats: 3.5,
        carbohydrates: 0,
        calories: 95,
        id: 64,
        unit: "гр"
    },
    {
        product: "Кальмар",
        proteins: 18.2,
        fats: 0.2,
        carbohydrates: 0,
        calories: 77,
        id: 65,
        unit: "гр"
    },
    {
        product: "Лосось",
        proteins: 19.2,
        fats: 13.8,
        carbohydrates: 0,
        calories: 200,
        id: 66,
        unit: "гр"
    },
    {
        product: "Минтай",
        proteins: 15.7,
        fats: 0.6,
        carbohydrates: 0,
        calories: 67,
        id: 67,
        unit: "гр"
    },
    {
        product: "Окунь",
        proteins: 18.3,
        fats: 0.7,
        carbohydrates: 0,
        calories: 80,
        id: 68,
        unit: "гр"
    },
    {
        product: "Сельдь",
        proteins: 17.3,
        fats: 19.9,
        carbohydrates: 0,
        calories: 248,
        id: 69,
        unit: "гр"
    },
    {
        product: "Семга",
        proteins: 20.9,
        fats: 15.3,
        carbohydrates: 0,
        calories: 222,
        id: 70,
        unit: "гр"
    },
    {
        product: "Зефир",
        proteins: 0.7,
        fats: 0,
        carbohydrates: 77.3,
        calories: 295,
        id: 71,
        unit: "гр"
    },
    {
        product: "Мёд",
        proteins: 0.6,
        fats: 0,
        carbohydrates: 80.5,
        calories: 312,
        id: 72,
        unit: "гр"
    },
    {
        product: "Печенье овсяное",
        proteins: 6.5,
        fats: 14,
        carbohydrates: 61.5,
        calories: 430,
        id: 73,
        unit: "гр"
    },
    {
        product: "Халва подсолнечная",
        proteins: 11.5,
        fats: 29.3,
        carbohydrates: 54.6,
        calories: 519,
        id: 74,
        unit: "гр"
    },
    {
        product: "Банан",
        proteins: 1.7,
        fats: 0,
        carbohydrates: 22.1,
        calories: 87,
        id: 75,
        unit: "гр"
    },
    {
        product: "Киви",
        proteins: 1,
        fats: 0.7,
        carbohydrates: 9.7,
        calories: 46,
        id: 76,
        unit: "гр"
    },
    {
        product: "Мандарин",
        proteins: 1,
        fats: 0,
        carbohydrates: 8.8,
        calories: 39,
        id: 77,
        unit: "гр"
    },
    {
        product: "Персик",
        proteins: 0.9,
        fats: 0,
        carbohydrates: 10.8,
        calories: 42,
        id: 78,
        unit: "гр"
    },
    {
        product: "Хурма",
        proteins: 0.7,
        fats: 0,
        carbohydrates: 15.7,
        calories: 61,
        id: 79,
        unit: "гр"
    },
    {
        product: "Яблоко",
        proteins: 0.5,
        fats: 0,
        carbohydrates: 11.4,
        calories: 48,
        id: 80,
        unit: "гр"
    },
    {
        product: "Хлеб пшеничный",
        proteins: 7.4,
        fats: 2.2,
        carbohydrates: 53,
        calories: 246,
        id: 81,
        unit: "гр"
    },
    {
        product: "Яйцо куриное",
        proteins: 12.7,
        fats: 11.1,
        carbohydrates: 0.6,
        calories: 153,
        id: 82,
        unit: "гр"
    },
    {
        product: "Батон",
        proteins: 9.4,
        fats: 2.7,
        carbohydrates: 50.7,
        calories: 261,
        id: 83,
        unit: "гр"
    }
]);
