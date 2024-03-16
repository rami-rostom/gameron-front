import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getFavoriteGames } from '@/store/reducers/getFavoriteGames';
import GameCard from '@/components/GameCard/GameCard';

function Favorite() {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.login.data.userId);
  const favoriteGames = useAppSelector((state) => state.favoriteGames.game);

  useEffect(() => {
    dispatch(getFavoriteGames(userId));
  }, [dispatch, userId]);

  return (
    <>
      <div className="home">
        <h1 className="home__title">Mes jeux préférés</h1>

        {Object.values(favoriteGames).map((game) => (
          <GameCard
            key={game.gameId}
            id={game.gameId}
            name={game.name}
            slug={game.slug}
            genres={[]}
            released={game.released}
            rating={game.rating}
            thumbnail={game.background_image}
          />
        ))}
      </div>
    </>
  );
}

export default Favorite;
