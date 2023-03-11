import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';
import {BiPlay} from "react-icons/bi"

const apiKey="d1901f356be5a99176e58832fe3e622d";
const url="https://api.themoviedb.org/3/movie";
const upcoming ="upcoming";
const imageurl="https://image.tmdb.org/t/p/original";
const nowPlaying ="now_playing";
const popular="popular";
const top ="top_rated";

const Card=({img})=>(
<img className='card' src={img} alt="cover" />
)

const Row=({title,arr=[]})=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
    {arr.map((item,index) =>(
      <Card key={index} img={`${imageurl}/${item.poster_path}`}/>
    ))   }
  </div>
  </div>
)

const Home=()=> {
const [upcomingMovies,setUpcomingMovies]=useState([])
const [nowPlayingMovie,setnowPlayingMovie]=useState([])
const [popularMovies,setpopularMovies]=useState([])
const [topMovies,settopMovies]=useState([])

useEffect(()=>{

const fetchUpcoming=async()=>{
const {data: {results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)

setUpcomingMovies(results)

};
const fetchNowPlaying=async()=>{
  const {data: {results}} = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
  
  setnowPlayingMovie(results)
  
  };
  const fetchpopular=async()=>{
    const {data: {results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
    
    setpopularMovies(results)
    
    };
    const fetcchtop=async()=>{
      const {data: {results}} = await axios.get(`${url}/${top}?api_key=${apiKey}`)
      
      settopMovies(results)
      
      };

fetchUpcoming()
fetchNowPlaying()
fetchpopular()
fetcchtop()
},[])



  return (
    <section className='home'>
    <div className='banner' style={{
      backgroundImage:popularMovies[0]? `url(${`${imageurl}/${popularMovies[0].poster_path}`})`:"none"
    }}> 
    {
      popularMovies[0]&&
      (
        <h1>{popularMovies[0].original_title}</h1>
      )
    }
    {  popularMovies[0]&&
      (
        <p>{popularMovies[0].overview}</p>
      )
    }
    <button><BiPlay/>Play</button>
    
    </div>
    <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
    <Row title={"Now Playing Movies"} arr={nowPlayingMovie}/>
    <Row title={"Popular Movies"} arr={popularMovies}/>
    <Row title={"Top Rated Movies"} arr={topMovies}/>
   

    
    
    </section>
  )
}

export default Home