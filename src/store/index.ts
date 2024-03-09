import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/login';
import registerReducer from './reducers/register';
import getGamesReducer from './reducers/getGames';
import getOneGameReducer from './reducers/getOneGame';
import searchGamesReducer from './reducers/searchGames';
import favoriteGamesReducer from './reducers/getFavoriteGames';
import updateFavoriteGameReducer from './reducers/updateFavoriteGame';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    getGames: getGamesReducer,
    getOneGame: getOneGameReducer,
    searchGames: searchGamesReducer,
    favoriteGames: favoriteGamesReducer,
    updateFavoriteGame: updateFavoriteGameReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
