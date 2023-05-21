const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели ?', '');

const personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов ?', ''),
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

console.log(personaMovieDB);

if (personaMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personaMovieDB.movies > 10 && personaMovieDB.movies < 30) {
	console.log('Вы класический зритель');
} else if (personaMovieDB.movies > 30) {
	console.log('Вы киноман');
} else {
	console.log('error');
}