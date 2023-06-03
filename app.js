let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while(numberOfFilm === '' || numberOfFilm === null || isNaN(numberOfFilm)) {
       numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '')
          b = prompt('На сколько оцените его?', '')

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
  }
}

//rememberMyFilm();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
  }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if(hidden.privat === false) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();