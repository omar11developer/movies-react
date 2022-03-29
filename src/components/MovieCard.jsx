import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import placeholder from '../placeholder.png'
import { getMovieImg } from "../utils/getMovieImg";

function MovieCard({movie}){
    const imageUrl = getMovieImg(movie.poster_path, 300);
   //const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;

    return  (
        <li className={styles.movieCard}>
            <Link to={"/movies/"+ movie.id}>
            <img src={imageUrl} alt={movie.title} className={styles.movieImage} />
            <div>
            {movie.title}
            </div>
            </Link>
        </li>
    ) 
    

}
export {MovieCard}