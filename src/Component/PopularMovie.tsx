import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovie } from "../Redux/Slice/MovieSlice";
import { RootState, AppDispatch } from "../Redux/store";
const PopularMovie: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, [dispatch]);
  const state = useSelector((state: RootState) => state.movie);
  console.log(state);
  return (
    <div>
      <h2 className="text-red-600 text-2xl font-semibold">Popular Movies</h2>
    </div>
  );
};
export default PopularMovie;
