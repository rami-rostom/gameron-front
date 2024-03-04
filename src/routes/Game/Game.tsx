import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Rating from '@mui/material/Rating';

import { Link as LinkIcon } from 'lucide-react';

import { getOneGame } from '@/store/reducers/getOneGame';
import { convertDateFormat } from '@/utils/calculation';

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
            <CardDescription className="game__header-main-info">
              {gameData.developers &&
                gameData.developers.slice(0, 1).map((developer) => (
                  <span
                    key={developer.id}
                    className="game__header-main-info-studio"
                  >
                    {developer.name}
                  </span>
                ))}

              <span>|</span>

              {gameData.released && (
                <span className="game__header-main-info-date">
                  {convertDateFormat(gameData.released)}
                </span>
              )}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="game__content">
          <img
            src={gameData.background_image}
            alt={`Thumbnail ${gameData.name}`}
            className="game__content-thumbnail"
          />
          <p className="game__content-description">
            {gameData.description_raw}
          </p>

          <CardDescription className="game__content-rate">
            <LinkIcon size={14} />
            <Link
              to={gameData.website}
              target="_blank"
              className="game__content-rate-link"
            >
              Site officiel
            </Link>

            {gameData.metacritic && (
              <>
                <span>|</span>
                <img
                  src="/icons/metacritic.svg"
                  alt="Metacritic icon"
                  className="game__content-rate-icon"
                />
                <Link
                  to={gameData.metacritic_url}
                  target="_blank"
                  className="game__content-rate-link"
                >
                  Note Metacritic{' '}
                </Link>
                <span className="game__content-rate-value">
                  {gameData.metacritic}
                </span>
              </>
            )}

            {gameData.rating && (
              <>
                <span>|</span>
                <Rating
                  name="half-rating-read"
                  size="small"
                  value={gameData.rating}
                  precision={0.5}
                  readOnly
                />
              </>
            )}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

export default Game;
