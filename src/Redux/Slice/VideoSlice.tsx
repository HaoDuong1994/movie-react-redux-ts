import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface IItemVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string; // ISO string format
  id: string;
}
interface IInitialVideo {
  results: IItemVideo[];
  id: string;
  loading: boolean;
  error: string | null;
}

const initialState: IInitialVideo = {
  results: [],
  loading: false,
  error: null,
  id: "",
};

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_Movie_API_Key}`,
  },
};

export const fetchVideo = createAsyncThunk<IInitialVideo, string>(
  "get/fetchVideo",
  async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    console.log(">>>>> video", response);
    return response.data;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch videos";
      });
  },
});

export default videoSlice.reducer;
