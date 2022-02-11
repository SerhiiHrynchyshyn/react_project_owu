import {Route, Routes} from "react-router-dom";

import './App.css';
import {HomePage, Layout, MoviesPage} from "./pages";



function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
