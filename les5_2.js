/*4_2. Продолжить работу с интернет-магазином, а именно, перенести функционал
подсчета корзины на объектно-ориентированную базу:
• создать объект Basket с полем goodList и методами countTotalPrice,
countTotalNumber и putProduct (методы должны считать общую стоимость того,
что в goodList, общее количество того, что в goodList и добавлять товар в
корзину)
• создать массив товаров с полями name и price
• после этого пройтись по нему в цикле и положить в корзину по одному
товару на четной позиции и по 2 товара на нечетной позиции
• внутри корзины в массиве goodList у каждого товара должно быть поле
count – количество товаров этого вида в корзине (например, 5 красных шаров)
• вывести общую стоимость корзины и общее количество товаров в корзине*/

/*5_2. Сделать генерацию корзины динамической: верстка корзины не должна находиться
в HTML-структуре. Там должен быть только div, в который будет вставляться
корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/



let basketDiv = document.createElement('div');
document.body.appendChild(basketDiv);
basketDiv.setAttribute('id', 'basketDiv');


let Basket = {
    goodList: [],
    countTotalPrice() {
        let summary = 0;
        for (i = 0; i < Basket.goodList.length; i++) {
            summary += Basket.goodList[i].count * Basket.goodList[i].price;
        };

        console.log("общая сумма заказа: " + summary);
        let sumText = document.createElement('p');
        document.querySelector('div#basketDiv').appendChild(sumText);
        if (summary > 0) {
            sumText.innerText = "общая сумма заказа: " + summary;
        };
    }, //считает общую стоимость того, что в goodList 
    countTotalNumber() {
        let totalNumber = 0;
        for (i = 0; i < Basket.goodList.length; i++) {
            totalNumber += Basket.goodList[i].count;
        };
        console.log("количество товаров: " + totalNumber);

        let countText = document.createElement('p');
        document.querySelector('div#basketDiv').appendChild(countText);
        if (totalNumber > 0) {
            countText.innerText = "количество товаров: " + totalNumber;
        } else {
            countText.innerText = "Корзина пуста!";
        };
    }, // считает общее количество того, что в goodList 
    putProduct() {
        for (i = 0; i < goods.length; i++) {
            Basket.goodList.push(goods[i]);
            if (i % 2 == 1) {
                Basket.goodList[i].count = +2;
            } else {
                Basket.goodList[i].count = +1;
            };
        };
    } // добавить товар в корзину

};

let goods = [
    {
        productname: "glasses",
        price: 100
    },
    {
        productname: "pants",
        price: 156
    },
    {
        productname: "t-shirt",
        price: 135
    },
    {
        productname: "cup",
        price: 400
    },
    {
        productname: "bread",
        price: 1000
    },
    {
        productname: "wine",
        price: 1030
    },
    {
        productname: "notebook",
        price: 50
    },
    {
        productname: "headphones",
        price: 100
    },
    {
        productname: "iphone",
        price: 100000
    },
    {
        productname: "pensil",
        price: 40
    },
    {
        productname: "pen",
        price: 50
    },
    {
        productname: "spoon",
        price: 10
    },
    {
        productname: "chear",
        price: 10000
    },
    {
        productname: "table",
        price: 50000
    },
    {
        productname: "socks",
        price: 100
    },
    {
        productname: "freezer",
        price: 100000
    },
    {
        productname: "knife",
        price: 5000
    },
    {
        productname: "towel",
        price: 10000
    },
    {
        productname: "egg",
        price: 119
    }
];



Basket.putProduct();
Basket.countTotalNumber();
Basket.countTotalPrice();
console.log(Basket);
