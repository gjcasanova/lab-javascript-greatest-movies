// const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((movie) => movie.director);
  let unique_directors = [];
  directors.forEach((director) => {
    if (!unique_directors.includes(director)) {
      unique_directors.push(director);
    }
  });
  return unique_directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let steven_spielberg_drama_movies = movies.filter(
    (movie) =>
      movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return steven_spielberg_drama_movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) return 0;
  let scores = movies.map((movie) => movie.score || 0);
  let average = scores.reduce((x, y) => x + y, 0) / scores.length;
  return Math.round(average * 100 + Number.EPSILON) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies = []) {
  let drama_movies = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(drama_movies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const compare = (a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;

    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;

    return 0;
  };
  sorted_movies = [...movies].sort(compare);
  return sorted_movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // const compare = (a, b) => {
  //   if (a.title > b.title) return 1;
  //   if (a.title < b.title) return -1;
  //   return 0;
  // };
  titles = movies.map((movie) => movie.title);
  titles.sort();
  // sorted_movies = [...movies].sort(compare);
  return titles.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const parseToMinutes = (time = '') => {
    if (!time.includes('m')) time += ' 0m';
    [hours, minutes] = time
      .slice(0, -1)
      .split('h ')
      .map((e) => parseInt(e));
    return hours * 60 + minutes;
  };

  const replaceDuration = (movie) => {
    return { ...movie, duration: parseToMinutes(movie.duration) };
  };

  return movies.map(replaceDuration);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies = []) {
  const avg = (values = []) => {
    if (values.length == 0) return 0;
    return values.reduce((x, y) => x + y) / values.length;
  };

  const compare = (a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;

    if (parseInt(a[0]) > parseInt(b[0])) return 1;
    if (parseInt(a[0]) < parseInt(b[0])) return -1;

    return 0;
  };

  if (movies.length == 0) return null;

  let scores_per_year = {};
  movies.forEach((movie) => {
    let key = movie.year;
    if (scores_per_year[key]) {
      scores_per_year[key].push(movie.score);
    } else {
      scores_per_year[key] = [movie.score];
    }
  });

  let avg_scores = [];
  for (const key in scores_per_year) {
    let newElement = [key, avg(scores_per_year[key])];
    avg_scores.push(newElement);
  }

  avg_scores.sort(compare);
  let [year, avg_score] = avg_scores[0];

  return `The best year was ${year} with an average score of ${avg_score}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
