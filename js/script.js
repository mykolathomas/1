'use strict';


const personalFimsDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalFimsDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalFimsDB.count == '' || personalFimsDB.count == null  || isNaN(personalFimsDB.count)) {
            personalFimsDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalFimsDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error'); 
            i--;
    
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalFimsDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalFimsDB.count >= 10 && personalfimsDB < 30) {
            console.log("Вы классический зритель");
        } else if (personalFimsDB.count >= 30) {
            console.log("Вы киноман"); 
        } else  {
            console.log("Произошла ошибка");
        }
    },
    showDB: function(hidden){
        if(!hidden){
            console.log(personalFimsDB);
        }
    },

    toggleVisibleMyDB: function(){
        if (personalFimsDB.privat){
            personalFimsDB.privat = false;
        } else{
            personalFimsDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            // let ganre = prompt(`Ваш любимый жан под номером ${i}`);
            // if(ganre === '' || ganre === null){
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе ');
            //     i--;
            // } else {
            //     personalFimsDB.genres[i - 1] = ganre;
            // }

            let genres = prompt(`Введите ваши любимые фильмы через запятую`).toLowerCase();
            if (genres === '' || genres == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе ');
                i--;
            } else {
                personalFimsDB.genres = genres.split(', ');
                personalFimsDB.genres.sort();
            }

        }
        personalFimsDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i +1} - это ${item}`);
    });
    }
};


