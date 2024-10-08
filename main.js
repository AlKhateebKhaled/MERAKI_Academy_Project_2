const movies = [
  {
    id: 1,
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    imageSrc: "images.jpeg",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    rate: 0,
    categories: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    duration: 152,
    director: "Christopher Nolan",
    boxOffice: "$1.005 billion",
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 2,
    movieName: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    imageSrc: "inception.jpg",
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into the mind of a CEO.",
    rate: 0,
    categories: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2010,
    duration: 148,
    director: "Christopher Nolan",
    boxOffice: "$836.8 million",
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 3,
    movieName: "Toy Story",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    imageSrc: "Toy_Story.jpg",
    description:
      "A cowboy doll is profoundly affected by the new toy, a spaceman action figure, that becomes his rival.",
    rate: 0,
    categories: ["Animation", "Adventure", "Comedy"],
    releaseYear: 1995,
    duration: 81,
    director: "John Lasseter",
    boxOffice: "$373.6 million",
    trailerLink: "https://www.youtube.com/embed/KYz2wyBy3kc",
  },
  {
    id: 4,
    movieName: "Parasite",
    actors: ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
    imageSrc: "Parasite.jpg",
    description:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Park family for their livelihood until they get entangled in an unexpected incident.",
    rate: 0,
    categories: ["Comedy", "Drama", "Thriller"],
    releaseYear: 2019,
    duration: 132,
    director: "Bong Joon-ho",
    boxOffice: "$263.1 million",
    trailerLink: "https://www.youtube.com/embed/5xH0HfJHsaY",
  },
  {
    id: 5,
    movieName: "The Conjuring",
    actors: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    imageSrc: "The_Conjuring.jpg",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
    rate: 0,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2013,
    duration: 112,
    director: "James Wan",
    boxOffice: "$319.5 million",
    trailerLink: "https://www.youtube.com/embed/k10ETZ41q5o",
  },
  {
    id: 6,
    movieName: "Spirited Away",
    actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    imageSrc: "Spirited_Away.jpg",
    description:
      "During her family's move to the suburbs, a 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    rate: 0,
    categories: ["Animation", "Adventure", "Fantasy"],
    releaseYear: 2001,
    duration: 125,
    director: "Hayao Miyazaki",
    boxOffice: "$395.8 million",
    trailerLink: "https://www.youtube.com/embed/ByXuk9QqQkk",
  },
  {
    id: 7,
    movieName: "Avengers: Endgame",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    imageSrc: "Avengers_Endgame.jpg",
    description:
      "The Avengers assemble once more in order to reverse Thanos' actions and restore order to the universe.",
    rate: 0,
    categories: ["Action", "Adventure", "Drama"],
    releaseYear: 2019,
    duration: 181,
    director: "Anthony and Joe Russo",
    boxOffice: "$2.798 billion",
    trailerLink: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: 8,
    movieName: "The Hangover",
    actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    imageSrc: "The_Hangover.jpg",
    description:
      "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and must retrace their steps to find their missing friend.",
    rate: 0,
    categories: ["Comedy"],
    releaseYear: 2009,
    duration: 100,
    director: "Todd Phillips",
    boxOffice: "$469.3 million",
    trailerLink: "https://www.youtube.com/embed/tcdUhdOlz9M",
  },
  {
    id: 9,
    movieName: "Get Out",
    actors: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
    imageSrc: "Get_Out.jpg",
    description:
      "A young African-American man visits his white girlfriend's parents for the weekend where his reception from the family turns increasingly hostile.",
    rate: 0,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2017,
    duration: 104,
    director: "Jordan Peele",
    boxOffice: "$255.4 million",
    trailerLink: "https://www.youtube.com/embed/DzfpyUB60YY",
  },
  {
    id: 10,
    movieName: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    imageSrc: "The_Matrix.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rate: 0,
    categories: ["Action", "Sci-Fi"],
    releaseYear: 1999,
    duration: 136,
    director: "The Wachowskis",
    boxOffice: "$466.6 million",
    trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 11,
    movieName: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    imageSrc: "Pulp_Fiction.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rate: 0,
    categories: ["Crime", "Drama"],
    releaseYear: 1994,
    duration: 154,
    director: "Quentin Tarantino",
    boxOffice: "$213.9 million",
    trailerLink: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 12,
    movieName: "Finding Nemo",
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    imageSrc: "Finding_Nemo.jpg",
    description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    rate: 0,
    categories: ["Animation", "Adventure", "Comedy"],
    releaseYear: 2003,
    duration: 100,
    director: "Andrew Stanton",
    boxOffice: "$940.3 million",
    trailerLink: "https://www.youtube.com/embed/wZdpNglLbt8",
  },
  {
    id: 13,
    movieName: "Shutter Island",
    actors: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
    imageSrc: "Shutter_Island.jpg",
    description:
      "A U.S. Marshal investigates the disappearance of a murderer who escaped from a mental institution.",
    rate: 0,
    categories: ["Mystery", "Thriller"],
    releaseYear: 2010,
    duration: 138,
    director: "Martin Scorsese",
    boxOffice: "$294.8 million",
    trailerLink: "https://www.youtube.com/embed/5iaYLCiq5RM",
  },
  {
    id: 14,
    movieName: "A Quiet Place",
    actors: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    imageSrc: "A_Quiet_Place.jpg",
    description:
      "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    rate: 0,
    categories: ["Drama", "Horror", "Sci-Fi"],
    releaseYear: 2018,
    duration: 90,
    director: "John Krasinski",
    boxOffice: "$340.9 million",
    trailerLink: "https://www.youtube.com/embed/WR7cc5t7tv8",
  },
  {
    id: 15,
    movieName: "My Neighbor Totoro",
    actors: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
    imageSrc: "My_Neighbor_Totoro.jpg",
    description:
      "Two young sisters move to the countryside where they encounter friendly forest spirits, including the giant Totoro.",
    rate: 0,
    categories: ["Animation", "Family", "Fantasy"],
    releaseYear: 1988,
    duration: 86,
    director: "Hayao Miyazaki",
    boxOffice: "$41 million",
    trailerLink: "https://www.youtube.com/embed/92a7Hj0ijLs",
  },
  {
    id: 16,
    movieName: "Guardians of the Galaxy",
    actors: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    imageSrc: "Guardians_of_the_Galaxy.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    rate: 0,
    categories: ["Action", "Adventure", "Comedy"],
    releaseYear: 2014,
    duration: 121,
    director: "James Gunn",
    boxOffice: "$772.8 million",
    trailerLink: "https://www.youtube.com/embed/d96cjJhvlMA",
  },
  {
    id: 17,
    movieName: "It",
    actors: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
    imageSrc: "It.jpg",
    description:
      "A group of kids face their fears and band together to destroy a shape-shifting entity that emerges from the sewers every 27 years.",
    rate: 0,
    categories: ["Horror", "Mystery", "Thriller"],
    releaseYear: 2017,
    duration: 135,
    director: "Andy Muschietti",
    boxOffice: "$701.8 million",
    trailerLink: "https://www.youtube.com/embed/hAUTdjf9rko",
  },
  {
    id: 18,
    movieName: "Your Name",
    actors: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
    imageSrc: "Your_Name.jpg",
    description:
      "Two teenagers who swap bodies discover a connection between them as they uncover a series of mysterious events.",
    rate: 0,
    categories: ["Animation", "Drama", "Fantasy"],
    releaseYear: 2016,
    duration: 106,
    director: "Makoto Shinkai",
    boxOffice: "$380.1 million",
    trailerLink: "https://www.youtube.com/embed/xU47nhruN-Q",
  },
  {
    id: 19,
    movieName: "Deadpool",
    actors: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    imageSrc: "Deadpool.jpg",
    description:
      "A former special forces operative turned mercenary undergoes experimental treatment to become the antihero Deadpool.",
    rate: 0,
    categories: ["Action", "Adventure", "Comedy"],
    releaseYear: 2016,
    duration: 108,
    director: "Tim Miller",
    boxOffice: "$782.6 million",
    trailerLink: "https://www.youtube.com/embed/ONHBaC-pfsk",
  },
  {
    id: 20,
    movieName: "The Shining",
    actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    imageSrc: "The_Shining.jpg",
    description:
      "A family heads to an isolated hotel for the winter where an evil presence influences the father into violence.",
    rate: null,
    categories: ["Drama", "Horror"],
    releaseYear: 1980,
    duration: 146,
    director: "Stanley Kubrick",
    boxOffice: "$47.3 million",
    trailerLink: "https://www.youtube.com/embed/S014oGZiSdI",
  },
];

let currentUser = null;
let favorites = [];
let watchlist = [];
let currentFavoritesMovies = [];
let currentWatchlistMovies = [];

function loadUserLists() {
  if (currentUser) {
    favorites =
      JSON.parse(localStorage.getItem(`${currentUser}_favorites`)) || [];
    watchlist =
      JSON.parse(localStorage.getItem(`${currentUser}_watchlist`)) || [];
  }
}

function saveUserLists() {
  if (currentUser) {
    localStorage.setItem(`${currentUser}_favorites`, JSON.stringify(favorites));
    localStorage.setItem(`${currentUser}_watchlist`, JSON.stringify(watchlist));
  }
}

const body = $(`body`);
const header = $(`<header class ="header" ></header>`);
const main = $(`<main " class = "main"></main>`);

body.append(header, main);

header.hide();
main.hide();

const welcomePage = $(`<div class ="welcome_page"></div>`);
const logo = $(`<div class ="logo">KMDB</div>`);
const heading = $(`<h1>Welcome to KMDB</h1>`);
const description = $(
  `<p>Your ultimate movie database. Please login or register to continue.</p>`
);
const userNameInput = $(
  `<input type="text" id="userNameInput" placeholder="Username">`
);
const passInput = $(
  `<input type="password" id="passInput" placeholder="Password">`
);

const loginBtn = $(`<button id="loginBtn">Login</button>`);
const registerBtn = $(`<button id="RegisterBtn">Register</button>`);
const guestsBtn = $(`<button id="guestsBtn">Guest</button>`);

const followUs = $(`<p>Follow us on social media:</p>`);

const facebookLink = $(
  `<a href="https://www.facebook.com/profile.php?id=100045315974354&mibextid=ZbWKwL" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
    </a>`
);

const instagramLink = $(
  `<a href="https://www.instagram.com/khaled.ktb96?igsh=eWU0dWVnOGg0ZXI2" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
    </a>`
);

const socialMediaContainer = $(`<div class="social-media-links"></div>`).append(
  facebookLink,
  instagramLink
);

const credits = $(`<div class="credits"></div>`);
const creditText = $(`<p>Created by Khaled Al-Khateeb</p>`);
const thanksText = $(
  `<p>Special thanks to <a href="https://www.meraki-academy.org/" target="_blank">Meraki Academy</a></p>`
);

credits.append(creditText, thanksText);

const stayLoggedInCheckbox = $(`
<div class="checkbox-container">
  <input type="checkbox" id="stayLoggedIn">
  <span></span>
  <label for="stayLoggedIn">Stay logged in</label>
</div>`);

welcomePage.append(
  logo,
  heading,
  description,
  userNameInput,
  passInput,
  stayLoggedInCheckbox,
  loginBtn,
  registerBtn,
  guestsBtn,
  followUs,
  socialMediaContainer,
  credits
);

body.append(welcomePage);

function loadUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
function login() {
  const username = $("#userNameInput").val();
  const password = $("#passInput").val();
  const users = loadUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  const stayLoggedIn = $("#stayLoggedIn").is(":checked");

  if (username === "") {
    alert("Add Username");
  } else if (password === "") {
    alert("Add Password");
  } else if (user) {
    currentUser = username;
    loadUserLists();

    if (stayLoggedIn) {
      localStorage.setItem("loggedInUser", currentUser);
      sessionStorage.removeItem("loggedInUser");
    } else {
      sessionStorage.setItem("loggedInUser", currentUser);
      localStorage.removeItem("loggedInUser");
    }

    userNameDisplay.text(`User:  ${currentUser}`);
    $(".welcome_page").hide();

    if (currentUser === "Admin") {
      header.show();
      main.show();

      mainScreenHeadingDiv.show();
      mainScreenHeadingDiv.empty();
      mainScreenHeadingDiv.append($(`<h>Main Page</h>`));
      $("#filter").val("");
      nav = "other";

      filterDiv.hide();
      searchDiv.hide();
      subFilterDiv.hide();
      myListsDiv.hide();

      filterMoviesByCategory("Main Page");
    } else {
      header.show();
      main.show();

      mainScreenHeadingDiv.show();
      mainScreenHeadingDiv.empty();
      mainScreenHeadingDiv.append($(`<h>Main Page</h>`));
      $("#filter").val("");
      nav = "other";

      filterDiv.show();
      searchDiv.show();
      subFilterDiv.empty();

      filterMoviesByCategory("Main Page");
    }
  } else {
    alert("Invalid username or password");
  }
}

function register() {
  const username = $("#userNameInput").val();
  const password = $("#passInput").val();
  let users = loadUsers();
  if (username === "") {
    alert("Add Username");
  } else if (password === "") {
    alert("Add Password");
  } else if (users.some((u) => u.username === username)) {
    alert("Username already exists");
  } else {
    users.push({ username, password });
    saveUsers(users);
    alert("Registration successful");
    currentUser = username;
    loadUserLists();
    const stayLoggedIn = $("#stayLoggedIn").is(":checked");

    if (stayLoggedIn) {
      localStorage.setItem("loggedInUser", currentUser);
      sessionStorage.removeItem("loggedInUser");
    } else {
      sessionStorage.setItem("loggedInUser", currentUser);
      localStorage.removeItem("loggedInUser");
    }
    userNameDisplay.text(`User:  ${currentUser}`);
    $(".welcome_page").hide();
    header.show();
    main.show();

    mainScreenHeadingDiv.show();
    mainScreenHeadingDiv.empty();
    mainScreenHeadingDiv.append($(`<h>Main Page</h>`));
    $("#filter").val("");
    nav = "other";

    filterDiv.show();
    searchDiv.show();
    subFilterDiv.empty();

    filterMoviesByCategory("Main Page");
  }
}

function guest() {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Main Page</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Main Page");
  currentUser = null;
  $(".welcome_page").hide();
  userNameDisplay.text(`User : Guest`);
  header.show();
  main.show();
}

$(loginBtn).on("click", login);
$(registerBtn).on("click", register);
$(guestsBtn).on("click", guest);

const title = $(
  `<h id="refreshText" style="cursor: pointer"><strong>KMDB</strong></h>`
);
header.append(title);

const themeToggle = $(`<button id="themeToggle">Light Mode</button>`);

header.append(themeToggle);

title.on("click", function () {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Main Page</h>`));

  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Main Page");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

body.addClass("dark-mode");

themeToggle.on("click", function () {
  if (body.hasClass("dark-mode")) {
    body.removeClass("dark-mode").addClass("light-mode");
    $(this).text("Dark Mode");
  } else {
    body.removeClass("light-mode").addClass("dark-mode");
    $(this).text("Light Mode");
  }
});

let nav = "";

const categoryDiv = $(`<div class="category_area"></div>`);
main.append(categoryDiv);

const movieListsDiv = $(`<div class="movieListsDiv"></div>`);
categoryDiv.append(movieListsDiv);

const myListsDiv = $(`<div class="myListsDiv"></div>`);
categoryDiv.append(myListsDiv);

const userinfoDiv = $(`<div class="userinfoDiv"></div>`);
const userNameDisplay = $(`<span class="userNameDisplay"></span>`);
const logoutBtn = $(`<button class ="logoutBtn">Logout</button>`);
userinfoDiv.append(userNameDisplay, logoutBtn);
categoryDiv.append(userinfoDiv);

const mainPageBtn = $(`<button class ="mainPageBtn">Main Page</button>`);
const actionBtn = $(`<button class ="actionBtn">Action</button>`);
const comedyBtn = $(`<button class ="comedyBtn">Comedy</button>`);
const horrorBtn = $(`<button class ="horrorBtn">Horror</button>`);
const dramaBtn = $(`<button class ="dramaBtn">Drama</button>`);
const animeBtn = $(`<button class ="animeBtn">Animation</button>`);
const favoritesBtn = $(
  `<button class="favoritesBtn">Favorites  <i class="fas fa-heart" style="color: red;"></i></button>`
);
const watchlistBtn = $(
  `<button id="watchlistBtn1">Watchlist  <i class="fas fa-bookmark" style="color: #f1c40f;"></i></button>`
);
movieListsDiv.append(
  mainPageBtn,
  actionBtn,
  comedyBtn,
  horrorBtn,
  dramaBtn,
  animeBtn
);

myListsDiv.append(favoritesBtn, watchlistBtn);

$(document).ready(function () {
  const savedUser = localStorage.getItem("loggedInUser");

  if (savedUser) {
    currentUser = savedUser;
    loadUserLists();

    userNameDisplay.text(`User:  ${currentUser}`);
    $(".welcome_page").hide();
    header.show();
    main.show();

    mainScreenHeadingDiv.show();
    mainScreenHeadingDiv.empty();
    mainScreenHeadingDiv.append($(`<h>Main Page</h>`));
    $("#filter").val("");
    nav = "other";

    filterDiv.show();
    searchDiv.show();
    subFilterDiv.empty();

    filterMoviesByCategory("Main Page");
  }
});

logoutBtn.on("click", () => {
  currentUser = null;
  favorites = [];
  watchlist = [];
  $(".welcome_page").show();
  header.hide();
  main.hide();
});

userinfoDiv.append(logoutBtn);

const mainScreenDiv = $(`<div class="mainScreenDiv"></div>`);
main.append(mainScreenDiv);

const mainScreenHeadingDiv = $(`<div class="mainScreenHeadingDiv"></div>`);
mainScreenDiv.append(mainScreenHeadingDiv);

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

mainScreenHeadingDiv.hide();

const showedMoviesDiv = $(`<div class="showedMoviesDiv_area"></div>`);
filterDiv.append(showedMoviesDiv);
function showMovieDetails(movie) {
  moviesDiv.empty();
  filterDiv.hide();
  searchDiv.hide();

  let ratings =
    JSON.parse(localStorage.getItem(`movie-ratings-${movie.id}`)) || {};
  let userRating = ratings[currentUser] || movie.rate;

  let averageRating =
    Object.values(ratings).reduce((acc, rating) => acc + rating, 0) /
      Object.keys(ratings).length || movie.rate;

  const ratingText =
    averageRating > 0
      ? `<p><strong>Average Rate: </strong><span id="movieRate">${averageRating.toFixed(1)}</span></p>`
      : `<p><strong>Average Rate: </strong><span id="movieRate">No rating yet. Be the first one to rate!</span></p>`;

  const movieDetailDiv = $(`
    <div class="movie_detail_area">
      <div class="video-container">
        <iframe class="movie-trailer" src="${
          movie.trailerLink
        }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>      
      <h2>${movie.movieName}</h2>
      <p><strong>Actors: </strong>${movie.actors.join(", ")}</p>
      <p><strong>Description: </strong>${movie.description}</p>
      <p><strong>Release Year: </strong>${movie.releaseYear}</p>
      <p><strong>Duration: </strong>${movie.duration} min.</p>
      ${ratingText}
      <p><strong>Categories: </strong>${movie.categories.join(", ")}</p>
      <p><strong>Director: </strong>${movie.director}</p>
      <p><strong>Box Office: </strong>${movie.boxOffice}</p>
      <button id="backBtn">Back to List</button>
      <button class="favBtn" id="favBtn">${
        favorites.includes(movie.id) ? "Remove from Favorites" : "Favorite"
      }</button>
      <button class="watchlistBtn" id="watchlistBtn">${
        watchlist.includes(movie.id) ? "Remove from Watchlist" : "Watchlist"
      }</button>
    </div>
  `);

  let rate = $(`<div class="rate"></div>`);

  for (let i = 1; i <= 10; i++) {
    let star = $(
      `<button class="star"><span class="fa fa-star"></span></button>`
    );

    if (i <= userRating) {
      star.find(".fa-star").addClass("checked");
    }

    star.on("click", function () {
      ratings[currentUser] = i;
      localStorage.setItem(
        `movie-ratings-${movie.id}`,
        JSON.stringify(ratings)
      );

      averageRating =
        Object.values(ratings).reduce((acc, rating) => acc + rating, 0) /
        Object.keys(ratings).length;

      $("#movieRate").text(averageRating.toFixed(1));

      rate.children(".star").find(".fa-star").removeClass("checked");
      rate.children(".star").slice(0, i).find(".fa-star").addClass("checked");
    });

    rate.append(star);
  }

  movieDetailDiv.append(rate);
  moviesDiv.append(movieDetailDiv);

  const backBtn = $("#backBtn");
  backBtn.on("click", () => {
    mainScreenHeadingDiv.show();
    filterDiv.show();
    searchDiv.show();
    subFilterDiv.empty();
    displayMovies(currentMovies);
  });

  const favBtn = $("#favBtn");
  favBtn.on("click", () => {
    toggleFavorite(movie.id);
    showMovieDetails(movie);
  });

  const watchlistBtn = $("#watchlistBtn");
  watchlistBtn.on("click", () => {
    toggleWatchlist(movie.id);
    showMovieDetails(movie);
  });
}

function displayMovies(movies) {
  moviesDiv.empty();
  showedMoviesDiv.empty();
  const numberOfShowedMovies = "Showed Movies : " + movies.length;
  showedMoviesDiv.append(numberOfShowedMovies);

  movies.forEach((movie) => {
    let ratings =
      JSON.parse(localStorage.getItem(`movie-ratings-${movie.id}`)) || {};
    let averageRating =
      Object.values(ratings).reduce((acc, rating) => acc + rating, 0) /
        Object.keys(ratings).length || movie.rate;

    const ratingText =
      averageRating > 0
        ? `<p><strong>Rate: </strong>${averageRating.toFixed(1)}</p>`
        : `<p><strong>Rate: </strong>No rating yet. Be the first one to rate!</p>`;

    const movieDiv = $(`
        <div class="movie_area">
        <div class="movieinfo_area">
          <img src=${movie.imageSrc} width="200" height="200">        
          <h2>${movie.movieName}</h2>
          <p><strong>Release Year: </strong>${movie.releaseYear}</p>
          ${ratingText}
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
      mainScreenHeadingDiv.hide();
      nav = "other";
      if (currentUser === "Admin") {
        adminShowMovieDetails(movie);
      } else {
        showMovieDetails(movie);
      }
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
  saveUserLists();
}
function toggleWatchlist(movieId) {
  if (watchlist.includes(movieId)) {
    watchlist = watchlist.filter((id) => id !== movieId);
  } else {
    watchlist.push(movieId);
  }
  saveUserLists();
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
    currentMovies = currentMovies.filter((movie) =>
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
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Main Page</h>`));

  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Main Page");
});
actionBtn.on("click", () => {
  mainScreenHeadingDiv.show();

  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Action</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Action");
});
comedyBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Comedy</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Comedy");
});
horrorBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Horror</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Horror");
});
dramaBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Drama</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Drama");
});
animeBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Animation</h>`));
  $("#filter").val("");
  nav = "other";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Animation");
});
favoritesBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Favorites</h>`));
  $("#filter").val("");
  nav = "favorites";
  filterDiv.show();
  searchDiv.show();
  subFilterDiv.empty();
  filterMoviesByCategory("Favorites");
});
watchlistBtn.on("click", () => {
  mainScreenHeadingDiv.show();
  mainScreenHeadingDiv.empty();
  mainScreenHeadingDiv.append($(`<h>Watchlist</h>`));
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

      if (selectedYear === "") {
        getcurrentMoviesByCategory(currentCategory);
        displayMovies(currentMovies);
        filterHeadingDiv.empty();
      } else {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter(
          (movie) => movie.releaseYear == selectedYear
        );
        const releasedYearHeading = `Filtered by: Release Year ${selectedYear}`;
        filterHeadingDiv.append(releasedYearHeading);
        displayMovies(currentMovies);
      }
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
      const ratingoption = $("<option></option>").val(i).text(i);
      ratingFilter.append(ratingoption);
    }

    ratingFilter.on("change", function () {
      filterHeadingDiv.empty();
      const selectedRating = $(this).val();

      getcurrentMoviesByCategory(currentCategory);

      currentMovies = currentMovies.filter((movie) => {
        let storedRating = localStorage.getItem(`movie-rating-${movie.id}`);
        if (storedRating) {
          storedRating = parseInt(storedRating);
        } else {
          storedRating = movie.rate;
        }
        return storedRating >= selectedRating;
      });

      displayMovies(currentMovies);

      const ratingHeading = `Filtered by: Minimum Rating ${selectedRating}`;
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
        const durationHeading = "Filtered by: Duration More than 120 Minutes";
        filterHeadingDiv.append(durationHeading);
      } else if (selectedDuration === "2") {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter(
          (movie) => movie.duration > 90 && movie.duration <= 120
        );
        const durationHeading =
          "Filtered by: Duration Between 90 and 120 Minutes";
        filterHeadingDiv.append(durationHeading);
      } else if (selectedDuration === "3") {
        getcurrentMoviesByCategory(currentCategory);
        currentMovies = currentMovies.filter((movie) => movie.duration > 120);
        const durationHeading = "Filtered by: Duration More than 120 Minutes";
        filterHeadingDiv.append(durationHeading);
      } else {
        getcurrentMoviesByCategory(currentCategory);
        const durationHeading = "Filtered by: Duration";
      }
      displayMovies(currentMovies);
    });
  } else if (selectedItem === ``) {
    subFilterDiv.empty();
    filterMoviesByCategory(currentCategory);
  }
});

