'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null  || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();



const personalfimsDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalfimsDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error'); 
//         i--;

//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel(){
//     if(personalfimsDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalfimsDB.count >= 10 && personalfimsDB < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalfimsDB.count >= 30) {
//         console.log("Вы киноман"); 
//     } else  {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();


function showDB (hidden){
    if(!hidden){
        console.log(personalfimsDB);
    }
}

showDB(personalfimsDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalfimsDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();