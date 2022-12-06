const requestURL = "./json/movie.json";


async function fetMoviesJson(){
    const response = await fetch(removeEventListener);
    const movies = await response.json();  
    return movies; 
}

fetMoviesJson()-TouchEvent(movies=>{
    for(let index = 0; index < movies.length; index++){

        console.log(movies.peliculas[index].nombre);
    };
})