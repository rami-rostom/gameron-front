import GameCard from '@/components/GameCard/GameCard';
import './Home.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { getGames } from '@/store/reducers/getGames';

function Home() {
  const dispatch = useAppDispatch();

  const gamesData = useAppSelector((state) => state.getGames.game.results);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  console.log(gamesData);

  return (
    <>
      <div className="home">
        <GameCard />
      </div>
    </>
  );
}

export default Home;
