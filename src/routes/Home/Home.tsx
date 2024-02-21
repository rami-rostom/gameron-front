import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import { convertDateFormat } from '@/utils/calculation';
import GameCard from '@/components/GameCard/GameCard';
import { getGames } from '@/store/reducers/getGames';

import './Home.scss';

function Home() {
  const dispatch = useAppDispatch();

  // Fetch and render all games data
  const gamesData = useAppSelector((state) => state.getGames.game.results);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  console.log(gamesData);

  return (
    <>
      <div className="home">
        {gamesData.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            slug={game.slug}
            genres={game.genres}
            released={convertDateFormat(game.released)}
            metacritic={game.metacritic}
            thumbnail={game.background_image}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
