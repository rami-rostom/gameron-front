import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Game from './routes/Game/Game';
import Login from './routes/Login/Login';
import Favorite from './routes/Favorite/Favorite';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/game/:slug',
        element: <Game />,
      },
      {
        path: '/game/favorite',
        element: <Favorite />,
      },
    ],
  },
]);
