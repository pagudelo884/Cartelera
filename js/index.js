const requestURL = `../json/peliculas.json`;


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();  
    return movies; 
}

fetchMoviesJson().then(movies =>{
    for(let index = 0; index < movies.peliculas.length; index++){

        const moviesSection = document.getElementById('movieSection');

        let id = movies.peliculas[index].id;
        let caratula = movies.peliculas[index].caratula;
        let titulo = movies.peliculas[index].titulo;
        let sinopsis = movies.peliculas[index].sinopsis;
        let genero = movies.peliculas[index].genero;
        let director = movies.peliculas[index].director;

        // console.log(movies.peliculas[index]);

        moviesSection.innerHTML  +=`
            <div class="card" style="width: 18rem;">
                <img src="${caratula}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h3 class="card-title">${id}.${titulo}</h3>
                        <h5 class="card-title">Director : ${director}</h5>
                        <h5 class="card-title">Genero : ${genero}</h5>
                </div>
            </div>
                `
    };

})