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

export const getGames = createAsyncThunk('getGames', async () => {
  const { data } = await axiosInstance.get(
    `/games?key=a5a7fbc9e170482d9ee362fb7881ce95&dates=2020-01-01,2024-12-31`
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
