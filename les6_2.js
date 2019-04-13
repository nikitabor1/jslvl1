/*
Продолжаем реализовывать модуль корзины: •Добавлять в объект корзины выбранные товары по клику на кнопке« Купить» без
перезагрузки страницы;•
Привязать к событию покупки товара пересчет корзины и обновление ее внешнего
вида.*/


let Basket = {
    goodList: [],
    countTotalPrice() {
        //считает общую стоимость того, что в goodList 
        let summary = 0;
        for (i = 0; i < Basket.goodList.length; i++) {
            summary += Basket.goodList[i].count * Basket.goodList[i].price;
        };
        return summary;


    },
    countTotalNumber() {
        // считает общее количество того, что в goodList
        let totalNumber = 0;
        for (i = 0; i < Basket.goodList.length; i++) {
            totalNumber += Basket.goodList[i].count;
        };
        return totalNumber;

    },
    putProduct(item) {
        проверить есть ли такой товар в корзине: если есть, то не добавлять а добавить +1 в свойство count,добавить товар в корзину
        let ind = this.goodList.findIndex(function (elem) {
            return elem.productname === item.productname;
        });

        if (ind === -1) {
            this.goodList.push(Object.assign({}, item));
            this.goodList[this.goodList.length - 1].count = 1;
        } else {
            this.goodList[ind].count += 1;
        }
    },
    printHTML() {
        //создаем div
        let basketDiv = document.createElement('div');
        document.body.appendChild(basketDiv);
        basketDiv.setAttribute('id', 'basketDiv');
        basketDiv.innerText = "Вот твоя корзина, дружок!"
        //добавляем список товаров
        let goodlistcontaner = document.createElement('ul');
        document.querySelector('div#basketDiv').appendChild(goodlistcontaner);
        for (x = 0; x < this.goodList.length; x++) {
            let listOfGoods = document.createElement('li');
            document.querySelector('ul').appendChild(listOfGoods);
            listOfGoods.innerText = this.goodList[x].productname + " " + this.goodList[x].price + " руб.," + " " + this.goodList[x].count + " шт.," + " на сумму " + this.goodList[x].count * this.goodList[x].price + " руб.";
        }
        //добавляем общую сумму и кол-во товаров
        let sumText = document.createElement('p');
        document.querySelector('div#basketDiv').appendChild(sumText);
        if (this.countTotalPrice() > 0) {
            sumText.innerText = "общая сумма заказа: " + this.countTotalPrice();
        };
        let countText = document.createElement('p');
        document.querySelector('div#basketDiv').appendChild(countText);
        if (this.countTotalNumber() > 0) {
            countText.innerText = "количество товаров: " + this.countTotalNumber();
        } else {
            countText.innerText = "Корзина пуста!";
        };

    },
    removeCartList() {
        //удаляет целиком div в котором прорисовывается корзина
        let remover = document.querySelector('div#basketDiv');
        remover.remove();
    }
};

Basket.printHTML();

//Кнопки товаров

let but1 = document.querySelector('button#buyglasses');
but1.addEventListener('click', function (event) {
    Basket.putProduct({
        productname: "glasses",
        price: 100
    });
    Basket.removeCartList();
    Basket.countTotalNumber();
    Basket.countTotalPrice();
    Basket.printHTML();
});

let but2 = document.querySelector('button#buyfreezer');
but2.addEventListener('click', function (event) {
    Basket.putProduct({
        productname: "freezer",
        price: 100000
    });
    Basket.removeCartList();
    Basket.countTotalNumber();
    Basket.countTotalPrice();
    Basket.printHTML();
});

let but3 = document.querySelector('button#buypensil');
but3.addEventListener('click', function (event) {
    Basket.putProduct({
        productname: "pensil",
        price: 40
    });
    Basket.removeCartList();
    Basket.countTotalNumber();
    Basket.countTotalPrice();
    Basket.printHTML();
});



