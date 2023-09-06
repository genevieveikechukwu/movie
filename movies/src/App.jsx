import axios from "axios";
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/moviecard';
import Button from '../components/button';
function App() {
  const navbarRef = useRef(null);
  const spinRef = useRef(null);
  const [ movies, setMovies ] = useState([]);
  const API_KEY = import.meta.env.VITE_MY_KEY;


  let loader = spinRef.current;
  useEffect(() => {
    const popular = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        //    console.log(response.data.results)
        let movies = response.data.results.slice(0, 13);
        movies.splice(11, 1);
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }

    };
    //add the function for geting movies by genre here
    popular();


  }, []);

  const remove = ()=>{
    if (loader) {
      loader.classList.add("hidden");
    }
  }

  const getMovieByGenre = async (genreId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${genreId}&page=1`);
      let movies = response.data.results.slice(0, 12);
      setMovies(movies);
      console.log(movies);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Button navbarRef={ navbarRef } />
      <div className="flex">
        <Navbar navbarRef={ navbarRef } onGenreClick={ getMovieByGenre } />
        <Main movies={ movies } spinRef={ spinRef } onLoaded={remove}/>
      </div>
    </>
  );
}

export default App;
