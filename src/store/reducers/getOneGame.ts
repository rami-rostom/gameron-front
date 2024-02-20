/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { OneGameState } from '@/@types/games';

const initialState: OneGameState = {
  game: [],
  isLoading: true,
  error: null,
};

export const getOneGame = createAsyncThunk('getOneGame', async (id: number) => {
  const { data } = await axiosInstance.get(
    `/games/${id}?key=a5a7fbc9e170482d9ee362fb7881ce95`
  );

  return data;
});

const getOneGameSlice = createSlice({
  name: 'getOneGame',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      });
  },
});

export default getOneGameSlice.reducer;
