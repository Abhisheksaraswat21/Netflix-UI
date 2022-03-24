//we would store this in {process.env.API_key}

    const API_KEY = "44a135a4d6b0eddfde8eaa9ce0fe2d3c";

    const requests = {
//this is concatinating api key in the requests
//and in axios we have a base url also so it every link is adding in that 
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    } 

    export default requests;


    // https://api.themoviedb.org/3/trending/all/week?api_key=44a135a4d6b0eddfde8eaa9ce0fe2d3c&language=en-US,