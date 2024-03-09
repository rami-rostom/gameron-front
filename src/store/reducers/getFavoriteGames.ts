/* eslint-disable import/prefer-default-export */
import { axiosInstance } from '../../utils/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FavoriteGameState } from '@/@types/games';

const initialState: FavoriteGameState = {
  game: {
    userId: 0,
    gameId: 0,
    name: '',
    slug: '',
    released: '',
    rating: 0,
    background_image: '',
  },
  isLoading: true,
  error: null,
};

export const getFavoriteGames = createAsyncThunk(
  'getFavoriteGames',
  async (id: number) => {
    const { data } = await axiosInstance.get(`/games/user/${id}`);

    return data;
  }
);

const getFavoriteGamesSlice = createSlice({
  name: 'getFavoriteGames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      });
  },
});

export default getFavoriteGamesSlice.reducer;
