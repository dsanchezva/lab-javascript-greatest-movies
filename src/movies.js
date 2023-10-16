// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let onlyDirectors = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });
  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let StevenMovies = moviesArray.filter((eachMovie) => {
    if (eachMovie.director === "Steven Spielberg") {
      return true;
    } else {
      return false;
    }
  });
  if (StevenMovies.length === 0) {
    return 0;
  }
  let StevenDrama = StevenMovies.filter((eachMovie) => {
    if (eachMovie.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return StevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let averaScrore = moviesArray.reduce((save, element) => {
    if (element.score) {
      return save + element.score;
    } else {
      return save;
    }
  }, 0);
  return Math.round((averaScrore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let drama = moviesArray.filter((eachMovie) => {
    if (eachMovie.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayClone = JSON.parse(JSON.stringify(moviesArray));

  moviesArrayClone.sort((elem1, elem2) => {
    if (elem1.year < elem2.year) {
      return -1;
    } else if (elem1.year > elem2.year) {
      return 1;
    } else {
      return elem1.title.localeCompare(elem2.title);
    }
  });
  return moviesArrayClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayClone = JSON.parse(JSON.stringify(moviesArray));

  moviesArrayClone.sort((elem1, elem2) => {
    if (elem1.title < elem2.title) {
      return -1;
    } else if (elem1.title > elem2.title) {
      return 1;
    } else {
      return 0;
    }
  });
  let title = moviesArrayClone.map((eachMovie) => {
    return eachMovie.title;
  });

  return title.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
