import GameCard from '@/components/GameCard/GameCard';
import './Home.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { getGames } from '@/store/reducers/getGames';
import { convertDateFormat } from '@/utils/calculation';

function Home() {
  const dispatch = useAppDispatch();

  const gamesData = useAppSelector((state) => state.getGames.game.results);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <>
      <div className="home">
        {gamesData.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            genres={game.genres}
            released={convertDateFormat(game.released)}
            metacritic={game.metacritic}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
