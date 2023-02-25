import React, { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import { getGenre, getMoviesWithGenreId } from "../../api/movies";

import MovieCard from "../MovieCard/MovieCard";

import Paginate from "../Paginate/Paginate";
import styles from "./Explore.module.css";

const Explore = () => {
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const fetchAllGenres = () => {
    getGenre().then((res) => {
      if (!res) return;
      setAllGenres(res.genres);
      setSelectedGenres([res.genres[0]]);
    });
  };

  //*****************************************//

  const fetchMovies = (page) => {
    if (selectedGenres.length === 0) return;

    let ids = selectedGenres.map((item) => {
      return item.id;
    });
    ids = ids.join(",");
    setIsMoreMoviesLoading(true);

    getMoviesWithGenreId(ids, page).then((res) => {
      setIsMoreMoviesLoading(false);
      if (!res) return;
      if (page === 1) {
        setTotalPages(res.total_pages);
        setMovies(res.results);
      } else {
        setMovies((prev) => [...prev, ...res?.results]);
      }
      setCurrentPage(res?.page);
    });
  };

  //*****************************************//

  const handleGenreClick = (genre) => {
    const tempGenre = JSON.parse(JSON.stringify(selectedGenres));

    const currIndex = tempGenre.findIndex((item) => item.id === genre.id);

    if (currIndex < 0) {
      tempGenre.push(genre);
    } else {
      if (selectedGenres.length > 1) tempGenre.splice(currIndex, 1);
    }
    setSelectedGenres(tempGenre);
  };

  //*****************************************//

  const handelPaginate = () => {
    if (isMoreMoviesLoading || currentPage >= totalPages) return;
    fetchMovies(currentPage + 1);
  };

  //*****************************************//
  //*****************************************//

  useEffect(() => {
    if (isNearEnd) handelPaginate();
  }, [isNearEnd]);
  //*****************************************//

  useEffect(() => {
    setCurrentPage(1);
    fetchMovies(1);
  }, [selectedGenres]);
  //*****************************************//

  useEffect(() => {
    fetchAllGenres();
  }, []);

  //*****************************************//
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {allGenres.map((item) => (
          <div
            key={item.id + item.name}
            className={`${styles.chip} ${
              selectedGenres.find((elem) => elem.id === item.id)
                ? styles.activeChip
                : ""
            }`}
            onClick={() => handleGenreClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <p className={styles.title}>Explore Movies</p>
      <Paginate onIntersection={(isOnEnd) => setIsNearEnd(isOnEnd)}>
        <div className={styles.body}>
          {movies.map((item, index) => (
            <MovieCard movie={item} key={item.id + index + ""} />
          ))}
          {isMoreMoviesLoading && <b>Loading...</b>}
        </div>
      </Paginate>
    </div>
  );
};

export default Explore;
