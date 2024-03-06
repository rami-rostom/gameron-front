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

// Get today date in format YYYY-MM-DD
const todayDate = new Date().toJSON().slice(0, 10);

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

export const getGames = createAsyncThunk('getGames', async (page: number) => {
  const { data } = await axiosInstance.get(
    `/games?key=${RAWG_KEY}&page=${page}&dates=2023-01-01,${todayDate}&ordering=-add`
  );

  return data;
});

const getGamesSlice = createSlice({
  name: 'getGames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      });
  },
});

export default getGamesSlice.reducer;
