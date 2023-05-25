let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели ?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели ?', '');
	}
}

start();

const personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов ?', '').trim(),
			b = prompt('На сколько оцените его ?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personaMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
		personaMovieDB.movies[a] = b;
	}
}

rememberMyFilms();

function detectPersonalevel() {
	if (personaMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personaMovieDB.movies > 10 && personaMovieDB.movies < 30) {
		console.log('Вы класический зритель');
	} else if (personaMovieDB.movies > 30) {
		console.log('Вы киноман');
	} else {
		console.log('error');
	}
}

detectPersonalevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personaMovieDB);
	}
}

showMyDB(personaMovieDB.private);

function writeYourGenres() {
	for (let i = 0; i <= 3; i++) {
		personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

// Функции
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
	console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

//Методы и свойства строк и чисел
const str = 'teSt';

console.log(str.toLocaleLowerCase());

const num = 12.2;

console.log(Math.round(num));

const test = '12.22px';
console.log(parseInt(test));
console.log(parseFloat(test));