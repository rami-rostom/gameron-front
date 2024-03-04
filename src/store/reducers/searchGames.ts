/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { GameState } from '@/@types/games';

const initialState: GameState = {
  game: {
    results: [],
  },
  isLoading: true,
  error: null,
};

const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;

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
