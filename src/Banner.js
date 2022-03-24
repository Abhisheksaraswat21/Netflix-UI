import React, {useState, useEffect} from 'react'
import './Banner.css'
//noew everytime we are accessing axios from our file not from global 
import axios from "./axios";
import requests from "./Requests";


function Banner() {


   const [movie, setMovie] = useState([]); 


useEffect(() => {
  
async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
        //results is in the link of the fetchNetflixoriginals
        //it generates a rnadom number between 0 to the totala number if movies in  the link 

        request.data.results[Math.floor(Math.random() * request.data.results.length-1)
        ]
        )

        return request;
}
  fetchData() ;

}, [])

console.log(movie);



const truncate = (string, n) => {
    //this will cut the string when its length gets greater than n and puts ... there
    return string?.length > n ? string.substr(0,n-1) + '...' : string ;
}

  return (
    <header className='banner' style={
        {
            backgroundSize: "cover",
            //https://image.tmdb.org/t/p/original/  this is generally a way of accessing the data from tmdb anf backdrop_path
            //we get fromt the movie console.log
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center",
            
            }}>
  

  <div className="banner__contents">

      <h1 className='banner__title'>
          {/* //it means ki at times from link the name is coming in title or in name or in original name */}

          {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <div className="banner__buttons">
<button className='banner__button'>play</button>
<button className='banner__button'>My List</button>
      </div>

<h1 className="banner__description">
{
    //truncate is checking if the passed string is not greater than specified characters, if itis then it is putting ...
    truncate(movie?.overview,150)
}
</h1>
    </div>

{/* this gives a nice fade at the end of this */}
    <div className="banner--fadeButton" />
    </header>
  )
}

export default Banner