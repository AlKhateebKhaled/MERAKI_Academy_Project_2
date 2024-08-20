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

const mainDiv = $(`<div class = main_area ></div>`);
main.append(mainDiv);

/*
const movies = [
    {
      id: 1,
      movieName: "some name",
      actors: ["actor1", "actor2",...],
      imageSrc: "url/path",
      description: "some description about movie",
      rate: 7,
    },
    {
      id: 2,
      movieName: "some name",
      actors: ["actor1", "actor2",...],
      imageSrc: "url/path",
      description: "some description about movie",
      rate: 7,
    },
    // {},...
  ];
  // for the `imageSrc` it can use an array of url/path
  */
