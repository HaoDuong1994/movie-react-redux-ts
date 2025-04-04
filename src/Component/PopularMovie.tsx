import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../Redux/Slice/MovieSlice";
import { RootState, AppDispatch } from "../Redux/store";
const PopularMovie: React.FC = () => {
  //Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);
  const state = useSelector((state: RootState) => state.movie);
  const { results } = state;
  console.log(results);
  return (
    <div>
      <h2 className="text-red-600 text-2xl font-semibold">Popular Movies</h2>
      <Carousel responsive={responsive} className="mt-8 flex items-center">
        {results.map((film) => {
          return (
            <div className="flex-none w-48">
              <img
                src={`${import.meta.env.VITE_MOVIE_BASE_URL}${
                  film.poster_path
                }`}
              />
              <div className="text-white text-lg font-sans font-medium">
                {film.title}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default PopularMovie;
