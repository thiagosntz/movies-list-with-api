const apiURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=828b4368e8099c4dc971bc2840598b32&page=1&include_adult=false&include_video=false&language=en-US'

const apiKey = '828b4368e8099c4dc971bc2840598b32'

const moviesContainer = document.querySelector('.movies-container')

getMovies(apiURL)

async function getMovies(url){
    const response = await fetch(url)
    const data = await response.json()
    let movies = data.results

    movies.forEach(movie => {
        displayMovies(movie)
    });
}

function displayMovies(movie){

    moviesContainer.innerHTML += `
    
    <div class="movie">

        <div class="movie-presentation">
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="">
            </div>
            <div class="movie-title">
                <h4 class="title">${movie.title}</h4>
                <p>Avaliação: <span class="rating">${movie.vote_average}</span></p>
            </div>
        </div>

        <div class="movie-overview">
            <h4 class="title">${movie.title}</h4>
            <p class="overview">
                ${movie.overview}
            </p>
        </div>

    </div>
    
    `

    
}

const form = document.getElementById('form')
const searchInput =  document.getElementById('search-input')
const movieContainer = document.getElementById('movies-container')

searchInput.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        event.preventDefault()
    }
})


searchInput.addEventListener('input', function(){

    const query = this.value.toLowerCase()
    const movies = moviesContainer.querySelectorAll('.movie')

    for (let i = 0; i < movies.length; i++){

        const movie = movies[i]
        const title = movie.querySelector('.title').textContent.toLowerCase()
        
        if (title.includes(query)){
            movie.classList.remove('hide')
        } else{
            movie.classList.add('hide')
        }
    }
})
