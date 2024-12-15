import { useContext, useEffect, useMemo, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Heading from "./Heading";
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
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=91b86d6d565b7ac388d4dde45df6c38f&page=${pageNo}`)
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