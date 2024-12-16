import { useContext, useEffect, useMemo, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { AppDataContext } from "./AppDataContext";



const MovieLists = () => {
    const [movies, setMovies] = useState([]);
    const watchlistContextData = useContext(AppDataContext);
    const {watchlistMovies, setWatchlists} = watchlistContextData;

    const popularMovies = useMemo(() => movies.filter((movie) => {
        // console.log('popularMovies');
        return movie.popularity > 600;
    }).length, [movies]);


    const fetchCall = (pageNo) => {
        fetch(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
    }

    useEffect(() => {
        fetchCall(1);
    }, []);

    return (
        <>
            <div className="movie-lists">
                {
                    movies.map(movie => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
            <Pagination change={fetchCall}/>
        </>
        
    )
}

export default MovieLists;