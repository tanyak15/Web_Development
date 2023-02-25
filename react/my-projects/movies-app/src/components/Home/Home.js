import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../api/movies";

import Paginate from "../Paginate/Paginate";
import MovieCard from "../MovieCard/MovieCard";

import Styles from "./Home.module.css";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  //****************************************//
  //****************************************//

  const fetchPopularMovies = (page) => {
    setIsMoreMoviesLoading(true);

    // res --> result of the promise (since getPopularMovies(page) returns a promise )
    getPopularMovies(page).then((res) => {
      setIsDataLoaded(true);
      setIsMoreMoviesLoading(false);

      if (!res) return;

      if (page === 1) {
        setTotalPages(res.total_pages);
        setPopularMovies(res.results);
      } else {
        setPopularMovies((prev) => [...prev, ...res?.results]);
      }
      setCurrentPage(res?.page);
    });
  };
  //****************************************//

  const handelPaginate = () => {
    if (isMoreMoviesLoading || currentPage >= totalPages) return;

    fetchPopularMovies(currentPage + 1);
  };

  //****************************************//

  useEffect(() => {
    if (isNearEnd) handelPaginate();
  }, [isNearEnd]);

  //****************************************//

  useEffect(() => {
    fetchPopularMovies(1);
  }, []);
  //****************************************//

  return (
    <div className={Styles.container}>
      {!isDataLoaded ? (
        "Loading..."
      ) : (
        <Paginate
          onIntersection={(isOnEnd) => {
            console.log(isOnEnd);
            setIsNearEnd(isOnEnd);
          }}
        >
          <div className={Styles.innerContainer}>
            {popularMovies.map((item, index) => {
              return <MovieCard key={item.id + index + ""} movie={item} />;
            })}
            {isMoreMoviesLoading && <b>Loading...</b>}
          </div>
        </Paginate>
      )}
    </div>
  );
};

export default Home;
