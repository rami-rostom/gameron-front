import { configureStore } from '@reduxjs/toolkit';

import getGamesReducer from './reducers/getGames';
import getOneGameReducer from './reducers/getOneGame';
import searchGamesReducer from './reducers/searchGames';

const store = configureStore({
  reducer: {
    getGames: getGamesReducer,
    getOneGame: getOneGameReducer,
    searchGames: searchGamesReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
