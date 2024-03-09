/* eslint-disable import/prefer-default-export */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { FavoriteGameState, OneGameState } from '@/@types/games';

const initialState: FavoriteGameState = {
  game: {
    id: 0,
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

export const updateFavoriteGame = createAsyncThunk(
  'updateFavoriteGame',
  async (FavoriteGame: OneGameState) => {
    const { data } = await axiosInstance.patch('/game/favorite', FavoriteGame);
    return data;
  }
);

const updateFavoriteGameSlice = createSlice({
  name: 'updateFavoriteGame',
  initialState,
  reducers: {
    changeInputFavoriteGameValue(
      state,
      action: PayloadAction<{
        fieldName: keyof FavoriteGameState['game'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;

      state.game[fieldName] = value as never;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateFavoriteGame.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateFavoriteGame.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Enregistrement rejeté';
      })
      .addCase(updateFavoriteGame.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { changeInputFavoriteGameValue } = updateFavoriteGameSlice.actions;
export default updateFavoriteGameSlice.reducer;
