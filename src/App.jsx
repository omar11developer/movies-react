import React from "react";
import style from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <header>
        <div className={style.menu}>
          <div className={style.logo}>
            <Link to="/"><h1>PeLisst</h1></Link>
          </div>
          <ul className={style.items}>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li><Link to="/">Accion</Link></li>
            <li><Link to="/">Romance</Link></li>
            <li><Link to="/">Drama</Link></li>
          </ul>
        </div>
        
      </header>

      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}></Route>
          <Route  path="/" element={<LandingPage />}></Route>
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export { App };
