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
        let cover = movies.peliculas[index].cover;
        let song = movies.peliculas[index].song;
        let genres = movies.peliculas[index].genres;
        let artist = movies.peliculas[index].artist;
        let album = movies.peliculas[index].album;

    console.log(movies.peliculas[index]);

        moviesSection.innerHTML  +=`
        <div class="card" style="width: 18rem;">
            <img src="${cover}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${id}.${artist}</h3>
                    <h5 class="card-title">Director : ${genres}</h5>
                    <h5 class="card-title">song : ${song}</h5>
                </div>
        </div>`
    };

})