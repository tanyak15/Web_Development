import React from "react";

import styles from "./MovieCard.module.css";

const imagePrefixUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.container} title={movie?.title}>
      <img src={`${imagePrefixUrl}${movie?.poster_path}`} alt={movie?.title} />
      <p>{movie?.title}</p>
    </div>
  );
};

export default MovieCard;
