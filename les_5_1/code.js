let chessboard = document.createElement('div');
document.body.appendChild(chessboard);
chessboard.setAttribute('id', 'chessboarddiv')




let letters = ['first', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'last'];
let strings = ['first', 1, 2, 3, 4, 5, 6, 7, 8, 'last'];


//x - строк, 8 для игорового поля, 2 для подписи
//y - столбцы

for (let x = 0; x < 10; x++) {
    let row = document.createElement('div');
    document.getElementById('chessboarddiv').appendChild(row);
    row.setAttribute('id', strings[x]);
    row.setAttribute('class', 'mainrows');

    for (let y = 0; y < 10; y++) {
        let cage = document.createElement('div');
        document.getElementById(strings[x]).appendChild(cage);
        cage.setAttribute('id', letters[y] + strings[x]);
        cage.setAttribute('class', "black");
        if (x == 0 && y != 0 && y != 9 || x == 9 && y != 0 && y != 9) {
            cage.innerText = (letters[y]);//подписываем доску буквами
        }
        
        if (y == 0 && x != 0 && x != 9 || y == 9 && x != 0 && x != 9) {
            cage.innerText = (strings[x]);//подписываем доску цифрами
        }


        if (x % 2 == 1) {
            switch (y) {
                case 2:
                    cage.setAttribute('class', "white");
                    break;
                case 4:
                    cage.setAttribute('class', "white");
                    break;
                case 6:
                    cage.setAttribute('class', "white");
                    break;
                case 8:
                    cage.setAttribute('class', "white");
                    break;
            }
        } else {
            switch (y) {
                case 1:
                    cage.setAttribute('class', "white");
                    break;
                case 3:
                    cage.setAttribute('class', "white");
                    break;
                case 5:
                    cage.setAttribute('class', "white");
                    break;
                case 7:
                    cage.setAttribute('class', "white");
                    break;
            }
        }
        if (x == 0 || x == 9 || y == 0 || y == 9) {
            cage.setAttribute('class', "overboard");
        }
    }

}

/*document.getElementById('chessboarddiv').appendChild('div');
let row = document.createElement('div');
row.setAttribute('class', 'mainrows');*/




/*
let row = document.createElement('div');
document.body.appendChild(row);
row.setAttribute('id', "first");
row.setAttribute('class', 'mainrows');

let cage = document.createElement('div');
first.appendChild(cage);
cage.setAttribute('id', letters[1] + strings[1]);
cage.setAttribute("class", "cages");
*/



//chessboard = document.querySelector('body');
//documet.body.insertAdjacentHTML('afterbegin', "<body><>");
//chessboard.innerText = 'привет';
