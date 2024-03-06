/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GameState } from '@/@types/games';

const initialState: GameState = {
  game: {
    results: [],
  },
  isLoading: true,
  error: null,
};

// Import API key form env file
const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

export const searchGames = createAsyncThunk(
  'searchGames',
  async (search: string) => {
    const { data } = await axiosInstance.get(
      `/games?key=${RAWG_KEY}&search=${search}`
    );

    return data;
  }
);

const searchGamesSlice = createSlice({
  name: 'searchGames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      });
  },
});

export default searchGamesSlice.reducer;
