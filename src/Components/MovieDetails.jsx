import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const params = useParams();
    console.log(params);

    const [movieDetail, setMovieDetail] = useState({});  

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/movie/${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => setMovieDetail(data));
    }, []);
    return (
        <div className="movie-detail">
            <h2>{movieDetail.original_title}</h2>
            <h5>Release Date: {movieDetail.release_date}</h5>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}/>
            <h3>{movieDetail.original_title}</h3>
            <hr/>
            <h4>Overview:</h4>
            <p>{movieDetail.overview}</p>
        </div>
    )
}

export default MovieDetails;