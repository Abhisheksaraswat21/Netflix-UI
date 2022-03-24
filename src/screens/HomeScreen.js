import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from "../Row";
import requests from '../Requests';

function HomeScreen() {
  return (




        
    <div className='homeScreen'>
        
    {/* Navbar */}
<Nav/>



        {/* banner */}
        <Banner />

     {   console.log("thhis is inside homescreen " + requests.fetchNetflixOriginals) }

        {/* rows */}
        {/* each row is given a different link under same name so that they can display different movies */}
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
        isLargeRow 
        />

<Row title="Top Rated" fetchURL={requests.fetchTopRated}
        isLargeRow
        />

<Row title="Action Movies" fetchURL={requests.fetchActionMovies}
        isLargeRow
        />

<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}
        isLargeRow
        />

<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}
        isLargeRow
        />

<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}
        isLargeRow
        />
      

<Row title="Documentaries" fetchURL={requests.fetchDocumentaries}
        isLargeRow
        />
      

        
         </div>
  )
}

export default HomeScreen