import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRightCircle, CalendarCheck2, Heart } from 'lucide-react';
import Rating from '@mui/material/Rating';

import { getFavoriteGames } from '@/store/reducers/getFavoriteGames';
import { updateFavoriteGame } from '@/store/reducers/updateFavoriteGame';

import './GameCard.scss';

type Genre = {
  id: number;
  name: string;
};

type GameProps = {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  released: string;
  rating: number;
  thumbnail: string;
};

function GameCard(props: GameProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id, name, slug, genres, released, rating, thumbnail } = props;

  const userId = useAppSelector((state) => state.login.data.userId);
  const favoriteGames = useAppSelector((state) => state.favoriteGames.game);

  const isGameLiked = Object.values(favoriteGames).some(
    (game) => game.gameId === id
  );

  const handleLikeGame = () => {
    dispatch(
      updateFavoriteGame({
        userId,
        gameId: id,
        name,
        slug,
        released,
        rating,
        background_image: thumbnail,
      })
    );
    navigate(0);
  };

  useEffect(() => {
    dispatch(getFavoriteGames(userId));
  }, [dispatch, userId]);

  return (
    <Card className="card">
      <CardHeader>
        <div className="card__header">
          <Link to={`/game/${slug}`} className="card__header-title">
            <CardTitle>{name}</CardTitle>
          </Link>

          <button onClick={handleLikeGame}>
            {isGameLiked ? (
              <Heart fill="hsl(var(--title))" size={18} />
            ) : (
              <Heart size={18} />
            )}
          </button>
        </div>
      </CardHeader>

      <div className="card__thumbnail">
        <Link to={`/game/${slug}`}>
          <img src={thumbnail} alt="Thumbnail" />
        </Link>
      </div>

      <CardContent className="card__info">
        <span className="card__info-date">
          <CalendarCheck2 size={14} />
          <div>{released}</div>
        </span>

        <span>|</span>

        <div className="card__info-rate">
          <span>Note :</span>
          <Rating
            name="half-rating-read"
            size="small"
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
      </CardContent>

      <CardFooter className="card__footer">
        <div className="card__footer-tag">
          {genres.slice(0, 3).map((genre) => (
            <Badge key={genre.id}>{genre.name}</Badge>
          ))}
        </div>

        <Link to={`/game/${slug}`} className="card__footer-more">
          <p className="card__footer-more-text">Plus d'infos</p>
          <ArrowRightCircle className="card__footer-more-icon" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
