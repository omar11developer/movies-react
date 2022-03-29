import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import style from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovies] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, [movieId]);
  if (isLoading) {
    return <Spinner />;
  }

  //const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={`${style.detailsContainer} ${style.movieDetails}`}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      ></img>
      <div className={style.col}>
        <h2>{movie.title}</h2>

        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}{" "}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
