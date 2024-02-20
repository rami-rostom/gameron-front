import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { getOneGame } from '@/store/reducers/getOneGame';

import './Game.scss';

function Game() {
  const dispatch = useAppDispatch();

  // Retrieve game's slug
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid id');

  // Render game page using slug and getOneGame function
  useEffect(() => {
    dispatch(getOneGame(slug));
  }, [dispatch, slug]);

  const gameData = useAppSelector((state) => state.getOneGame.game) || [];

  return (
    <>
      <Card className="game">
        <CardHeader className="game__header">
          <div className="game__header-aside">
            <div className="game__header-aside-genre">
              {gameData.genres &&
                gameData.genres
                  .slice(0, 3)
                  .map((genre) => <Badge key={genre.id}>{genre.name}</Badge>)}
            </div>

            <div className="game__header-aside-platform">
              {gameData.platforms &&
                gameData.platforms.map((platform) => (
                  <Badge key={platform.platform.id} variant={'secondary'}>
                    {platform.platform.name}
                  </Badge>
                ))}
            </div>
          </div>

          <div className="game__header-main">
            <CardTitle className="game__header-main-title">
              {gameData.name}
            </CardTitle>
            <CardDescription className="game__header-main-rate">
              <img
                src="/icons/metacritic.svg"
                alt="Metacritic icon"
                className="game__header-main-rate-icon"
              />
              <span>Note Metacritic : </span>
              <span className="game__header-main-rate-value">
                {gameData.metacritic}
              </span>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* <Card className="game">
        <div className="game__header">
          <CardTitle className="game__header-title">{gameData.name}</CardTitle>
          <div className="game__header-info">
            {gameData.genres.slice(0, 3).map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
        </div>
        <CardContent className="game__thumbnail">
          <img src={gameData.background_image} alt="Thumbnail" />
        </CardContent>
        <CardFooter className="game__footer">
          <CardDescription>{gameData.released}</CardDescription>
          <div className="game__footer-rate">
            <img
              src="/icons/metacritic.svg"
              alt="Metacritic icon"
              className="game__footer-rate-icon"
            />
            <p className="game__footer-rate-value">{gameData.metacritic}</p>
          </div>
        </CardFooter>
      </Card> */}
    </>
  );
}

export default Game;
