import {Route, Routes} from "react-router-dom";

import './App.css';
import {HomePage, Layout, MovieInfo, MovieListPage, MoviesPage} from "./pages";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}>
                    <Route index element={<MovieListPage/>}/>
                    <Route path={'genre/:genreId'} element={<MovieListPage/>}/>
                    <Route path={':movieId'} element={<MovieInfo/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
