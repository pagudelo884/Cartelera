const requestURL = "./json/movie.json";


async function fetchMoviesJson(){
    const response = await fetch(removeEventListener);
    const movies = await response.json();  
    return movies; 
}

fetchMoviesJson().then(movies=>{
    for(let index = 0; index < movies.peliculas.length; index++){

    const moviesSection = document.getElementById('movieSection');

    let id = movies.peliculas[index].id;
    let caratula = movies.peliculas[index].caratula;
    let titulo = movies.peliculas[index].titulo;
    let sinopsis = movies.peliculas[index].sinopsis;
    let genero = movies.peliculas[index].genero;
    let director = movies.peliculas[index].director;

    // console.log(movies.peliculas[index].nombre);
    moviesSection.innerHTML=`
    ${title}
    `
    };

})