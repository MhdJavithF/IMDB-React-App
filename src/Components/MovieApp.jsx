import AddMovie from "./AddMovie";
import Heading from "./Heading";
import MovieDetails from "./MovieDetails";
import MovieLists from "./MovieLists";
import MovieFavourites from "./MovieFavourites";
import {
  BrowserRouter,
  // BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import AppDataProvider from "./AppDataContext";
import Footer from "./Footer";


const MovieApp = () => {
    return(
      <AppDataProvider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<><Heading /><MovieLists/></>}></Route>
            <Route  path="/add-movie" element={<><Heading/><AddMovie/></>}></Route>
            <Route  path="/movie-detail" element={<>
              <Heading/>
              <div>
                <h2 style={{textAlign:"center",color:"white", verticalAlign:'center'}}>Please click the movie card separately
                  <p>to view the movie details.</p>
                </h2>
              </div></>}></Route>
            <Route  path="/movie-detail/:movieId" element={<><Heading/><MovieDetails/></>}></Route>
            <Route  path="/movie-favourites/" element={<><MovieFavourites /></>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppDataProvider>
    );
}

export default MovieApp;    