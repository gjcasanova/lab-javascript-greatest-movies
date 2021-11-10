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
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
