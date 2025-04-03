import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
console.log(import.meta.env.VITE_Movie_API_Key);
interface IItemMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface IMovieState {
  page: number;
  results: IItemMovies[];
  isLoading: boolean;
  error: string | null;
}

const option = {
  timeout: 1000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_Movie_API_Key}`,
  },
};
export const fetchPopularMovie = createAsyncThunk(
  "posts/fetchMoviePop",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      option
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    page: 1,
    results: [],
    isLoading: false,
    error: null,
  } as IMovieState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload.results;
      })
      .addCase(fetchPopularMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default movieSlice.reducer;
