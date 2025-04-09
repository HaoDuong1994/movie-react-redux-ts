import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Redux/Slice/MovieSlice";
import videoReducer from "../Redux/Slice/VideoSlice";
const store = configureStore({
  reducer: {
    movie: movieReducer,
    video: videoReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
