const movies = [
  {
    id: 1,
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    imageSrc: "images.jpeg",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    rate: 9,
    categories: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    duration: 152,
    director: "Christopher Nolan",
    boxOffice: "$1.005 billion",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    id: 2,
    movieName: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    imageSrc: "inception.jpg",
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into the mind of a CEO.",
    rate: 9,
    categories: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2010,
    duration: 148,
    director: "Christopher Nolan",
    boxOffice: "$836.8 million",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: 3,
    movieName: "Toy Story",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    imageSrc: "Toy_Story.jpg",
    description:
      "A cowboy doll is profoundly affected by the new toy, a spaceman action figure, that becomes his rival.",
    rate: 8,
    categories: ["Animation", "Adventure", "Comedy"],
    releaseYear: 1995,
    duration: 81,
    director: "John Lasseter",
    boxOffice: "$373.6 million",
    trailerLink: "https://www.youtube.com/watch?v=KYz2wyBy3kc",
  },
  {
    id: 4,
    movieName: "Parasite",
    actors: ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
    imageSrc: "Parasite.jpg",
    description:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Park family for their livelihood until they get entangled in an unexpected incident.",
    rate: 9,
    categories: ["Comedy", "Drama", "Thriller"],
    releaseYear: 2019,
    duration: 132,
    director: "Bong Joon-ho",
    boxOffice: "$263.1 million",
    trailerLink: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
  },
  {
    id: 5,
    movieName: "The Conjuring",
    actors: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    imageSrc: "The_Conjuring.jpg",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
    rate: 8,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2013,
    duration: 112,
    director: "James Wan",
    boxOffice: "$319.5 million",
    trailerLink: "https://www.youtube.com/watch?v=k10ETZ41q5o",
  },
  {
    id: 6,
    movieName: "Spirited Away",
    actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    imageSrc: "Spirited_Away.jpg",
    description:
      "During her family's move to the suburbs, a 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    rate: 9,
    categories: ["Animation", "Adventure", "Fantasy"],
    releaseYear: 2001,
    duration: 125,
    director: "Hayao Miyazaki",
    boxOffice: "$395.8 million",
    trailerLink: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
  },
  {
    id: 7,
    movieName: "Avengers: Endgame",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    imageSrc: "Avengers_Endgame.jpg",
    description:
      "The Avengers assemble once more in order to reverse Thanos' actions and restore order to the universe.",
    rate: 9,
    categories: ["Action", "Adventure", "Drama"],
    releaseYear: 2019,
    duration: 181,
    director: "Anthony and Joe Russo",
    boxOffice: "$2.798 billion",
    trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    id: 8,
    movieName: "The Hangover",
    actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    imageSrc: "The_Hangover.jpg",
    description:
      "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and must retrace their steps to find their missing friend.",
    rate: 8,
    categories: ["Comedy"],
    releaseYear: 2009,
    duration: 100,
    director: "Todd Phillips",
    boxOffice: "$469.3 million",
    trailerLink: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
  },
  {
    id: 9,
    movieName: "Get Out",
    actors: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
    imageSrc: "Get_Out.jpg",
    description:
      "A young African-American man visits his white girlfriend's parents for the weekend where his reception from the family turns increasingly hostile.",
    rate: 9,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2017,
    duration: 104,
    director: "Jordan Peele",
    boxOffice: "$255.4 million",
    trailerLink: "https://www.youtube.com/watch?v=DzfpyUB60YY",
  },
  {
    id: 10,
    movieName: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    imageSrc: "The_Matrix.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rate: 9,
    categories: ["Action", "Sci-Fi"],
    releaseYear: 1999,
    duration: 136,
    director: "The Wachowskis",
    boxOffice: "$466.6 million",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    id: 11,
    movieName: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    imageSrc: "Pulp_Fiction.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rate: 9,
    categories: ["Crime", "Drama"],
    releaseYear: 1994,
    duration: 154,
    director: "Quentin Tarantino",
    boxOffice: "$213.9 million",
    trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
  },
  {
    id: 12,
    movieName: "Finding Nemo",
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    imageSrc: "Finding_Nemo.jpg",
    description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    rate: 8,
    categories: ["Animation", "Adventure", "Comedy"],
    releaseYear: 2003,
    duration: 100,
    director: "Andrew Stanton",
    boxOffice: "$940.3 million",
    trailerLink: "https://www.youtube.com/watch?v=wZdpNglLbt8",
  },
  {
    id: 13,
    movieName: "Shutter Island",
    actors: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
    imageSrc: "Shutter_Island.jpg",
    description:
      "A U.S. Marshal investigates the disappearance of a murderer who escaped from a mental institution.",
    rate: 8,
    categories: ["Mystery", "Thriller"],
    releaseYear: 2010,
    duration: 138,
    director: "Martin Scorsese",
    boxOffice: "$294.8 million",
    trailerLink: "https://www.youtube.com/watch?v=5iaYLCiq5RM",
  },
  {
    id: 14,
    movieName: "A Quiet Place",
    actors: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    imageSrc: "A_Quiet_Place.jpg",
    description:
      "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    rate: 8,
    categories: ["Drama", "Horror", "Sci-Fi"],
    releaseYear: 2018,
    duration: 90,
    director: "John Krasinski",
    boxOffice: "$340.9 million",
    trailerLink: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
  },
  {
    id: 15,
    movieName: "My Neighbor Totoro",
    actors: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
    imageSrc: "My_Neighbor_Totoro.jpg",
    description:
      "Two young sisters move to the countryside where they encounter friendly forest spirits, including the giant Totoro.",
    rate: 9,
    categories: ["Animation", "Family", "Fantasy"],
    releaseYear: 1988,
    duration: 86,
    director: "Hayao Miyazaki",
    boxOffice: "$41 million",
    trailerLink: "https://www.youtube.com/watch?v=92a7Hj0ijLs",
  },
  {
    id: 16,
    movieName: "Guardians of the Galaxy",
    actors: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    imageSrc: "Guardians_of_the_Galaxy.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    rate: 8,
    categories: ["Action", "Adventure", "Comedy"],
    releaseYear: 2014,
    duration: 121,
    director: "James Gunn",
    boxOffice: "$772.8 million",
    trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA",
  },
  {
    id: 17,
    movieName: "It",
    actors: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
    imageSrc: "It.jpg",
    description:
      "A group of kids face their fears and band together to destroy a shape-shifting entity that emerges from the sewers every 27 years.",
    rate: 8,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2017,
    duration: 135,
    director: "Andy Muschietti",
    boxOffice: "$701.8 million",
    trailerLink: "https://www.youtube.com/watch?v=hAUTdjf9rko",
  },
  {
    id: 18,
    movieName: "Your Name",
    actors: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
    imageSrc: "Your_Name.jpg",
    description:
      "Two teenagers who swap bodies discover a connection between them as they uncover a series of mysterious events.",
    rate: 9,
    categories: ["Animation", "Drama", "Fantasy"],
    releaseYear: 2016,
    duration: 106,
    director: "Makoto Shinkai",
    boxOffice: "$380.1 million",
    trailerLink: "https://www.youtube.com/watch?v=xU47nhruN-Q",
  },
  {
    id: 19,
    movieName: "Deadpool",
    actors: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    imageSrc: "Deadpool.jpg",
    description:
      "A former special forces operative turned mercenary undergoes experimental treatment to become the antihero Deadpool.",
    rate: 8,
    categories: ["Action", "Adventure", "Comedy"],
    releaseYear: 2016,
    duration: 108,
    director: "Tim Miller",
    boxOffice: "$782.6 million",
    trailerLink: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
  },
  {
    id: 20,
    movieName: "The Shining",
    actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    imageSrc: "The_Shining.jpg",
    description:
      "A family heads to an isolated hotel for the winter where an evil presence influences the father into violence.",
    rate: 9,
    categories: ["Drama", "Horror"],
    releaseYear: 1980,
    duration: 146,
    director: "Stanley Kubrick",
    boxOffice: "$47.3 million",
    trailerLink: "https://www.youtube.com/watch?v=S014oGZiSdI",
  },
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
let currentFavoritesMovies =
  JSON.parse(localStorage.getItem("currentFavoritesMovies")) || [];
let currentWatchlistMovies =
  JSON.parse(localStorage.getItem("currentWatchlistMovies")) || [];

// Code:

const main = $(`main`);

let nav = "";

let rate = $(`<div class="rate"></div>`);

for (let i = 1; i <= 5; i++) {
  let star = $(
    `<button class="star" id="star"><span class="fa fa-star"></span></button>`
  );

  star.on("click", function () {
    rate.children(".star").find(".fa-star").removeClass("checked");

    rate.children(".star").slice(0, i).find(".fa-star").addClass("checked");
  });

  rate.append(star);
}

const categoryDiv = $(`<div class="category_area"></div>`);
main.append(categoryDiv);

const movieListsDiv = $(`<div class="movieListsDiv"></div>`);
categoryDiv.append(movieListsDiv);

const myListsDiv = $(`<div class="myListsDiv"></div>`);
categoryDiv.append(myListsDiv);

const mainPageBtn = $(`<button>Main Page</button>`);
const actionBtn = $(`<button>Action</button>`);
const comedyBtn = $(`<button>Comedy</button>`);
const horrorBtn = $(`<button>Horror</button>`);
const dramaBtn = $(`<button>Drama</button>`);
const animeBtn = $(`<button>Animation</button>`);
const favoritesBtn = $(`<button>Favorites</button>`);
const watchlistBtn = $(`<button>Watchlist</button>`);
movieListsDiv.append(
  mainPageBtn,
  actionBtn,
  comedyBtn,
  horrorBtn,
  dramaBtn,
  animeBtn
);

myListsDiv.append(favoritesBtn, watchlistBtn);

const mainScreenDiv = $(`<div class="mainScreenDiv"></div>`);
main.append(mainScreenDiv);

const moviesheaderDiv = $(`<div class="moviesheaderDiv"></div>`);
mainScreenDiv.append(moviesheaderDiv);

const moviesDiv = $(`<div class="moviesDiv"></div>`);
mainScreenDiv.append(moviesDiv);

const searchDiv = $(`<div class="searchDiv_area"></div>`);
moviesheaderDiv.append(searchDiv);

const filterDiv = $(`<div class="filterDiv_area"></div>`);
moviesheaderDiv.append(filterDiv);

const subFilterDiv = $(`<div class="subFilterDiv_area"></div>`);
filterDiv.append(subFilterDiv);

const filterHeadingDiv = $(`<div class="filterHeadingDiv_area"></div>`);
subFilterDiv.append(filterHeadingDiv);

const showedMoviesDiv = $(`<div class="showedMoviesDiv_area"></div>`);
filterDiv.append(showedMoviesDiv);

function showMovieDetails(movie) {
  moviesDiv.empty();
  filterDiv.hide();
  searchDiv.hide();
  const movieDetailDiv = $(`
      <div class="movie_detail_area">
        <img src=${movie.imageSrc} width="200" height="200">        
        <h2>${movie.movieName}</h2>
        <p><strong>Actors: </strong>${movie.actors.join(", ")}</p>
        <p><strong>Description: </strong>${movie.description}</p>
        <p><strong>releaseYear: </strong>${movie.releaseYear}</p>
        <p><strong>Duration: </strong>${movie.duration} min.</p>
        <p><strong>Rate: </strong>${movie.rate}</p>
        <p><strong>Categories: </strong>${movie.categories.join(", ")}</p>
        <p><strong>Director: </strong>${movie.director}</p>
        <p><strong>BoxOffice: </strong>${movie.boxOffice}</p>
        <p><a href=${
          movie.trailerLink
        } target="_blank" class="trailer-link"><strong>Trailer</strong></a></p>
        <button id="backBtn">Back to List</button>
        <button class="favBtn" id ="favBtn">${
          favorites.includes(movie.id) ? "Remove from Favorites" : "Favorite"
        }</button>
        <button class="watchlistBtn" id="watchlistBtn">${
          watchlist.includes(movie.id) ? "Remove from Watchlist" : "Watchlist"
        }</button>
      </div>
    `);

  movieDetailDiv.append(rate);
  moviesDiv.append(movieDetailDiv);

  const backBtn = $("#backBtn");
  backBtn.on("click", () => {
    filterDiv.show();
    searchDiv.show();
    displayMovies(currentMovies);
  });

  const favBtn = $(".favBtn");
  favBtn.on("click", () => {
    toggleFavorite(movie.id);
    favBtn.text(
      favorites.includes(movie.id) ? "Remove from Favorites" : "Favorite"
    );
  });

  const watchlistBtn = $(".watchlistBtn");
  watchlistBtn.on("click", () => {
    toggleWatchlist(movie.id);
    watchlistBtn.text(
      watchlist.includes(movie.id) ? "Remove from Watchlist" : "Watchlist"
    );
  });
}

function displayMovies(movies) {
  moviesDiv.empty();
  showedMoviesDiv.empty();
  const numberOfShowedMovies = "Showed Movies : " + currentMovies.length;
  showedMoviesDiv.append(numberOfShowedMovies);
  movies.forEach((movie) => {
    const movieDiv = $(`
        <div class="movie_area">
        <div class="movieinfo_area">
          <img src=${movie.imageSrc} width="200" height="200">        
          <h2>${movie.movieName}</h2>
          <p><strong>releaseYear: </strong>${movie.releaseYear}</p>
          <p><strong>Rate: </strong>${movie.rate}</p>
          <p><strong>Categories: </strong>${movie.categories.join(", ")}</p>
          </div>
        <div class="movieBtns_area">
          <button class="detailsBtn">Details</button>
          <button class="favBtn">${
            favorites.includes(movie.id) ? "Remove from Favorites" : "Favorite"
          }</button>
          <button class="watchlistBtn">${
            watchlist.includes(movie.id) ? "Remove from Watchlist" : "Watchlist"
          }</button>
        </div>
        </div>
      `);
    moviesDiv.append(movieDiv);

    const detailsBtn = movieDiv.find(".detailsBtn");
    detailsBtn.on("click", () => {
      nav = "other";
      showMovieDetails(movie);
    });

    const favBtn = movieDiv.find(".favBtn");
    favBtn.on("click", () => {
      toggleFavorite(movie.id);
      if (nav === "other") {
        displayMovies(currentMovies);
      } else if (nav === "favorites") {
        displayMovies(currentFavoritesMovies);
      } else {
        displayMovies(currentWatchlistMovies);
      }
    });

    const watchlistBtn = movieDiv.find(".watchlistBtn");
    watchlistBtn.on("click", () => {
      toggleWatchlist(movie.id);
      if (nav === "other") {
        displayMovies(currentMovies);
      } else if (nav === "favorites") {
        displayMovies(currentFavoritesMovies);
      } else {
        displayMovies(currentWatchlistMovies);
      }
    });
  });
}

function toggleFavorite(movieId) {
  if (favorites.includes(movieId)) {
    favorites = favorites.filter((id) => id !== movieId);
  } else {
    favorites.push(movieId);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  currentFavoritesMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  localStorage.setItem(
    "currentFavoritesMovies",
    JSON.stringify(currentFavoritesMovies)
  );
}

function toggleWatchlist(movieId) {
  if (watchlist.includes(movieId)) {
    watchlist = watchlist.filter((id) => id !== movieId);
  } else {
    watchlist.push(movieId);
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  currentWatchlistMovies = movies.filter((movie) =>
    watchlist.includes(movie.id)
  );
  localStorage.setItem(
    "currentWatchlistMovies",
    JSON.stringify(currentWatchlistMovies)
  );
}

let currentMovies = movies;
displayMovies(currentMovies);

let currentCategory = "Main Page";

function filterMoviesByCategory(category) {
  if (category === "Main Page") {
    currentMovies = movies;
    currentCategory = "Main Page";
  } else if (category === "Favorites") {
    currentCategory = "Favorites";
    currentMovies = movies.filter((movie) => favorites.includes(movie.id));
  } else if (category === "Watchlist") {
    currentCategory = "Watchlist";
    currentMovies = movies.filter((movie) => watchlist.includes(movie.id));
  } else if (category === "Action") {
    currentCategory = "Action";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Comedy") {
    currentCategory = "Comedy";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Horror") {
    currentCategory = "Horror";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Drama") {
    currentCategory = "Drama";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Animation") {
    currentCategory = "Animation";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Search") {
    const searchTerm = searchInput.val().toLowerCase();
    currentMovies = movies.filter((movie) =>
      movie.movieName.toLowerCase().includes(searchTerm)
    );
  }
  displayMovies(currentMovies);
}

function getcurrentMoviesByCategory(category) {
  if (category === "Main Page") {
    currentMovies = movies;
    currentCategory = "Main Page";
  } else if (category === "Favorites") {
    currentCategory = "Favorites";
    currentMovies = movies.filter((movie) => favorites.includes(movie.id));
  } else if (category === "Watchlist") {
    currentCategory = "Watchlist";
    currentMovies = movies.filter((movie) => watchlist.includes(movie.id));
  } else if (category === "Action") {
    currentCategory = "Action";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Comedy") {
    currentCategory = "Comedy";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Horror") {
    currentCategory = "Horror";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Drama") {
    currentCategory = "Drama";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Animation") {
    currentCategory = "Animation";
    currentMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );
  } else if (category === "Search") {
    const searchTerm = searchInput.val().toLowerCase();
    currentMovies = movies.filter((movie) =>
      movie.movieName.toLowerCase().includes(searchTerm)
    );
  }
}

mainPageBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Main Page");
});
actionBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Action");
});
comedyBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Comedy");
});
horrorBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Horror");
});
dramaBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Drama");
});
animeBtn.on("click", () => {
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Animation");
});
favoritesBtn.on("click", () => {
  $("#filter").val("");
  nav = "favorites";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Favorites");
});
watchlistBtn.on("click", () => {
  $("#filter").val("");
  nav = "watchlist";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Watchlist");
});

const searchInput = $(`<input type="text" id="searchInput">`);
const searchBtn = $(`<button id="searchBtn">Search</button>`);
searchDiv.prepend(searchInput);
searchDiv.prepend(searchBtn);

searchBtn.on("click", () => {
  subFilterDiv.empty();
  $("#filter").val("");
  currentCategory = "Search";
  filterMoviesByCategory("Search");
});

const filter = $('<select id="filter"></select>');
filterDiv.prepend(filter);

const itemsFilter = [
  { value: "", text: "No filter" },
  { value: "2", text: "Release Year" },
  { value: "3", text: "Minimum Rating" },
  { value: "4", text: "Duration" },
];

itemsFilter.forEach((item) => {
  const option = $("<option></option>").val(item.value).text(item.text);
  filter.append(option);
});

$("#filter").on("change", function () {
  selectedItem = $(this).val();

  if (selectedItem === `2`) {
    subFilterDiv.empty();
    filterHeadingDiv.empty();
    subFilterDiv.append(filterHeadingDiv);
    const releaseYearFilter = $('<select id="releaseYearFilter"></select>');
    subFilterDiv.append(releaseYearFilter);

    const defaultYearOption = $("<option></option>")
      .val("")
      .text("Choose Year");
    releaseYearFilter.append(defaultYearOption);

    for (let i = 1980, j = 1; i < 2025; i++, j++) {
      const releaseYearoption = $("<option></option>").val(i).text(i);
      releaseYearFilter.append(releaseYearoption);
    }

    releaseYearFilter.on("change", function () {
      filterHeadingDiv.empty();
      const selectedYear = $(this).val();
      getcurrentMoviesByCategory(currentCategory);
      currentMovies = currentCategory.filter(
        (movie) => movie.releaseYear == selectedYear
      );
      displayMovies(currentMovies);
      const releasedYearHeading = "Filtered by: Release Year";
      filterHeadingDiv.append(releasedYearHeading);
    });
  } else if (selectedItem === `3`) {
    subFilterDiv.empty();
    filterHeadingDiv.empty();
    subFilterDiv.append(filterHeadingDiv);

    const ratingFilter = $('<select id="ratingFilter"></select>');
    subFilterDiv.append(ratingFilter);

    const defaultRatingOption = $("<option></option>")
      .val("")
      .text("Choose Rate");
    ratingFilter.append(defaultRatingOption);

    for (let i = 1; i < 11; i++) {
      const raringoption = $("<option></option>").val(i).text(i);
      ratingFilter.append(raringoption);
    }

    ratingFilter.on("change", function () {
      filterHeadingDiv.empty();
      const selectedRating = $(this).val();
      getcurrentMoviesByCategory(currentCategory);
      currentMovies = currentMovies.filter(
        (movie) => movie.rate >= selectedRating
      );
      displayMovies(currentMovies);
      const ratingHeading = "Filtered by: Minimum Rating";
      filterHeadingDiv.append(ratingHeading);
    });
  } else if (selectedItem === `4`) {
    subFilterDiv.empty();
    filterHeadingDiv.empty();
    subFilterDiv.append(filterHeadingDiv);
    const durationFilter = $('<select id="durationFilter"></select>');
    subFilterDiv.append(durationFilter);

    const durationitemsFilter = [
      { value: "", text: "Choose Duration" },
      { value: "1", text: "90 Minuites" },
      { value: "2", text: "(90 - 120) Minuites" },
      { value: "3", text: "More than 120 Minuites" },
    ];

    durationitemsFilter.forEach((item) => {
      const durationOption = $("<option></option>")
        .val(item.value)
        .text(item.text);
      durationFilter.append(durationOption);
    });

    durationFilter.on("change", function () {
      filterHeadingDiv.empty();

      const selectedDuration = $(this).val();
      if (selectedDuration === "1") {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter((movie) => movie.duration <= 90);
        const durationHeading = "Filtered by: Duration";
        filterHeadingDiv.append(durationHeading);
      } else if (selectedDuration === "2") {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter(
          (movie) => movie.duration > 90 && movie.duration <= 120
        );
        const durationHeading = "Filtered by: Duration";
        filterHeadingDiv.append(durationHeading);
      } else if (selectedDuration === "3") {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter((movie) => movie.duration > 120);
        const durationHeading = "Filtered by: Duration";
        filterHeadingDiv.append(durationHeading);
      }
      displayMovies(currentMovies);
    });
  } else if (selectedItem === ``) {
    subFilterDiv.empty();
    filterMoviesByCategory(currentCategory);
  }
});
