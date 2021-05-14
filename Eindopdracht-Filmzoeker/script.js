console.log('Hello');


const film = movies;
const volledigeLijst = () => { document.getElementById("lijstFilms").innerText = film; }
console.log(film);

const list = document.getElementById("list");
console.log(list)

const title = movies.map((movies) => { console.log(movies.Title) });

const element = document.createElement("li");
element.classList.add("film");
element.innerHTML = title;
console.log(element)