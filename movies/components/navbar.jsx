import axios from 'axios';
import { useState, useEffect } from "react";

function Navbar({ navbarRef, onGenreClick}) {
    const [ genreList, setgenreList ] = useState([]);
    const API_KEY = import.meta.env.VITE_MY_KEY;
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
                // console.log("data: ", response.data.genres);
                setgenreList(response.data.genres);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGenres(); // Invoke the function immediately
        

    }, []);

    const genres = genreList.map(genre => <li className="items mt-2 text-sm hover:text-orange-600 hover:cursor-pointer" key={ genre.id } onClick={ () => onGenreClick(genre.id) }>{ genre.name }</li> 
        // console.log(genre.id, genre.name);
    );
    // console.log(genres)
    return (
        <div className="hidden md:block nav-container w-2/5 opacity-100 md:w-1/4 p-2 md:p-6 md:fixed left-0 opacity-1" ref={ navbarRef } style={ { color: "#FFFFF0" } }>
            <nav className="mt-20">
                <ul className="grid fixed">
                    { genres }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;