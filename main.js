console.log("20/8/2024");
console.log($);
console.log($());

const main = $(`main`);

const categoryDiv = $(`<div class = category_area ></div>`);
main.append(categoryDiv);

const mainPageBtn = $(`<button>Main Page</button>`);
const actionBtn = $(`<button>Action</button>`);
const comedyBtn = $(`<button>Comedy</button>`);
const horrorBtn = $(`<button>Horror</button>`);
const dramaBtn = $(`<button>Drama</button>`);
const animeBtn = $(`<button>Anime</button>`);
categoryDiv.append(
  mainPageBtn,
  actionBtn,
  comedyBtn,
  horrorBtn,
  dramaBtn,
  animeBtn
);

const mainDiv = $(`<div class = mainDiv_area ></div>`);
main.append(mainDiv);
/*
const movie1Div = $(`<div class = movie1_area ></div>`);
const movie2Div = $(`<div class = movie2_area ></div>`);
const movie3Div = $(`<div class = movie3_area ></div>`);
const movie4Div = $(`<div class = movie4_area ></div>`);
const movie5Div = $(`<div class = movie5_area ></div>`);
const movie6Div = $(`<div class = movie6_area ></div>`);
mainDiv.append(
  movie1Div,
  movie2Div,
  movie3Div,
  movie4Div,
  movie5Div,
  movie6Div
);
*/

const movies = [
  {
    id: 1,
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    imageSrc: [],
    description:
      "A superhero film where Batman battles the Joker in Gotham City.",
    rate: 9,
    categories: ["Action", "Drama"],
  },
  {
    id: 2,
    movieName: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    imageSrc: [],
    description:
      "A skilled thief is given a chance at redemption if he can successfully plant an idea in someone's mind.",
    rate: 8.8,
    categories: ["Action", "Drama"],
  },
  {
    id: 3,
    movieName: "Toy Story",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    imageSrc: [],
    description:
      "A story about the secret life of toys when their owners are not around.",
    rate: 8.3,
    categories: ["Comedy", "Anime"],
  },
  {
    id: 4,
    movieName: "Parasite",
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    imageSrc: [],
    description:
      "A poor family schemes to become employed by a wealthy family by infiltrating their household.",
    rate: 8.6,
    categories: ["Drama"],
  },
  {
    id: 5,
    movieName: "The Conjuring",
    actors: ["Vera Farmiga", "Patrick Wilson", "Ron Livingston"],
    imageSrc: [],
    description:
      "Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse.",
    rate: 7.5,
    categories: ["Horror", "Drama"],
  },
  {
    id: 6,
    movieName: "Spirited Away",
    actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    imageSrc: [],
    description:
      "A young girl becomes trapped in a strange new world of spirits.",
    rate: 8.6,
    categories: ["Anime"],
  },
  {
    id: 7,
    movieName: "Avengers: Endgame",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    imageSrc: [],
    description:
      "The Avengers assemble once more to reverse the damage caused by Thanos.",
    rate: 8.4,
    categories: ["Action"],
  },
  {
    id: 8,
    movieName: "The Hangover",
    actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    imageSrc: [],
    description:
      "Three friends wake up after a bachelor party in Las Vegas with no memory of the night before.",
    rate: 7.7,
    categories: ["Comedy"],
  },
  {
    id: 9,
    movieName: "Get Out",
    actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    imageSrc: [],
    description:
      "A young African-American man uncovers a disturbing secret when he meets his white girlfriend's family.",
    rate: 7.7,
    categories: ["Horror"],
  },
  {
    id: 10,
    movieName: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    imageSrc: [],
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    rate: 8.7,
    categories: ["Action"],
  },
  {
    id: 11,
    movieName: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    imageSrc: [],
    description:
      "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
    rate: 8.9,
    categories: ["Drama"],
  },
  {
    id: 12,
    movieName: "Finding Nemo",
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    imageSrc: [],
    description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    rate: 8.1,
    categories: ["Comedy", "Anime"],
  },
  {
    id: 13,
    movieName: "Shutter Island",
    actors: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
    imageSrc: [],
    description:
      "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    rate: 8.2,
    categories: ["Drama"],
  },
  {
    id: 14,
    movieName: "A Quiet Place",
    actors: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    imageSrc: [],
    description:
      "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    rate: 7.5,
    categories: ["Horror"],
  },
  {
    id: 15,
    movieName: "My Neighbor Totoro",
    actors: ["Hitoshi Takagi", "Noriko Hidaka", "Chika Sakamoto"],
    imageSrc: [],
    description:
      "Two young girls move to the countryside and encounter a friendly forest spirit.",
    rate: 8.2,
    categories: ["Anime"],
  },
  {
    id: 16,
    movieName: "Guardians of the Galaxy",
    actors: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    imageSrc: [],
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    rate: 8.0,
    categories: ["Action", "Comedy"],
  },
  {
    id: 17,
    movieName: "It",
    actors: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
    imageSrc: [],
    description:
      "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster that disguises itself as a clown.",
    rate: 7.3,
    categories: ["Horror", "Drama"],
  },
  {
    id: 18,
    movieName: "Your Name",
    actors: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
    imageSrc: [],
    description:
      "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    rate: 8.4,
    categories: ["Anime", "Drama"],
  },
  {
    id: 19,
    movieName: "Deadpool",
    actors: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"],
    imageSrc: [],
    description:
      "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    rate: 8.0,
    categories: ["Action", "Comedy"],
  },
  {
    id: 20,
    movieName: "The Shining",
    actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    imageSrc: [],
    description:
      "A family heads to an isolated hotel for the winter where an evil presence influences the father into violence.",
    rate: 8.4,
    categories: ["Horror", "Drama"],
  },
];

movies.forEach((movies) => {
  const movieDiv = $(`<div class = "movie_area"></div>
        <h2> ${movies.movieName}</h2>
        <p><strong>Actors: </strong>${movies.actors.join(", ")}</p>
        <p><strong>Description: </strong>${movies.description}</p>
        <p><strong>Rate: </strong>${movies.rate}</p>
        <p><strong>Categories: </strong>${movies.categories.join(", ")}</p>
        `);
  mainDiv.append(movieDiv);
});

mainPageBtn.on("click", () => {
  mainDiv.empty();

  movies.forEach((movies) => {
    const movieDiv = $(`<div class = "movie_area"></div>
        <h2> ${movies.movieName}</h2>
        <p><strong>Actors: </strong>${movies.actors.join(", ")}</p>
        <p><strong>Description: </strong>${movies.description}</p>
        `);
    mainDiv.append(movieDiv);
  });
});
