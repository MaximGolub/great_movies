import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SEARCH_MOVIE_URL, DESCRIPTION_MOVIE_URL } from "../constants/api";

export const fetchMoviesList = createAsyncThunk(
  "movies/fetchMoviesList",
  async ({ value, callback }) => {
    const { data } = await axios.get(`${SEARCH_MOVIE_URL}/${value}`);
    callback();
    return data.results;
  }
);

export const fetchDescriptionMovie = createAsyncThunk(
  "movies/fetchDescriptionMovie",
  async (id) => {
    const { data } = await axios.get(`${DESCRIPTION_MOVIE_URL}/${id}`);
    const movieDescription = {
      id: data.id,
      fullTitle: data.fullTitle,
      year: data.year,
      runtimeStr: data.runtimeStr,
      actorList: data.actorList,
      image: data.image,
      plot: data.plot,
    };
    return movieDescription;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    favoritesMovies: [],
    descriptionMovie: {},
    moviesLoading: false,
  },
  reducers: {
    updateFavoritesMovies: (state, action) => {
      if (
        !state.favoritesMovies
          .map((item) => item.id)
          .includes(action.payload.id)
      ) {
        state.favoritesMovies = [...state.favoritesMovies, action.payload];
      }
    },
    removeFromFavoritesMovies: (state, action) => {
      state.favoritesMovies = state.favoritesMovies.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesList.pending, (state, action) => {
      state.moviesLoading = true;
    });
    builder.addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.moviesList = action.payload;
      state.moviesLoading = false;
    });
    builder.addCase(fetchMoviesList.rejected, (state, action) => {
      console.log(action.error);
      state.moviesLoading = false;
    });

    builder.addCase(fetchDescriptionMovie.pending, (state, action) => {
      state.moviesLoading = true;
    });
    builder.addCase(fetchDescriptionMovie.fulfilled, (state, action) => {
      state.descriptionMovie = action.payload;
      state.moviesLoading = false;
    });
    builder.addCase(fetchDescriptionMovie.rejected, (state, action) => {
      console.log(action.error);
      state.moviesLoading = false;
    });
  },
});

export const { updateFavoritesMovies, removeFromFavoritesMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
