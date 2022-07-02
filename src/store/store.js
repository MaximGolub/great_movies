import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

export default configureStore({
  reducer: {
    movies: moviesSlice,
  },
});
