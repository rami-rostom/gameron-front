import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRightCircle, CalendarCheck2 } from 'lucide-react';

import './GameCard.scss';

type Genre = {
  id: number;
  name: string;
};

type GameProps = {
  name: string;
  slug: string;
  genres: Genre[];
  released: string;
  metacritic: number;
  thumbnail: string;
};

function GameCard(props: GameProps) {
  const { name, slug, genres, released, metacritic, thumbnail } = props;

  return (
    <Card className="card">
      <CardHeader className="card__header">
        <Link to={`/game/${slug}`}>
          <CardTitle className="card__header-title">{name}</CardTitle>
        </Link>
      </CardHeader>

      <div className="card__thumbnail">
        <Link to={`/game/${slug}`}>
          <img src={thumbnail} alt="Thumbnail" />
        </Link>
      </div>

      <CardContent className="card__info">
        <div className="card__info-rate">
          <img
            src="/icons/metacritic.svg"
            alt="Metacritic icon"
            className="card__info-rate-icon"
          />
          <span>Metacritic :</span>
          <p className="card__info-rate-value">{metacritic}</p>
        </div>
        <span>|</span>
        <span className="card__info-date">
          <CalendarCheck2 size={14} />
          <div>{released}</div>
        </span>
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
