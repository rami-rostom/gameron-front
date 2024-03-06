import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/login';
import getGamesReducer from './reducers/getGames';
import getOneGameReducer from './reducers/getOneGame';
import searchGamesReducer from './reducers/searchGames';

const store = configureStore({
  reducer: {
    login: loginReducer,
    getGames: getGamesReducer,
    getOneGame: getOneGameReducer,
    searchGames: searchGamesReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
