/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OneGameState } from '@/@types/games';

const initialState: OneGameState = {
  game: {
    id: 0,
    slug: '',
    name: '',
    released: '',
    tba: false,
    background_image: '',
    rating: 0,
    rating_top: 0,
    ratings: {},
    ratings_count: 0,
    reviews_text_count: '',
    description: '',
    description_raw: '',
    added: 0,
    added_by_status: {},
    metacritic: 0,
    metacritic_url: '',
    playtime: 0,
    suggestions_count: 0,
    updated: '',
    website: '',
    esrb_rating: {
      id: 0,
      slug: '',
      name: '',
    },
    genres: [
      {
        id: 0,
        name: '',
      },
    ],
    developers: [
      {
        id: 0,
        name: '',
      },
    ],
    platforms: [
      {
        platform: {
          id: 0,
          slug: '',
          name: '',
        },
        released_at: '',
        requirements: {
          minimum: '',
          recommended: '',
        },
      },
    ],
  },
  isLoading: true,
  error: null,
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

export const getOneGame = createAsyncThunk(
  'getOneGame',
  async (slug: string) => {
    const { data } = await axiosInstance.get(
      `/games/${slug}?key=a5a7fbc9e170482d9ee362fb7881ce95`
    );

    return data;
  }
);

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
