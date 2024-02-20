import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRightCircle } from 'lucide-react';

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
      <div className="card__header">
        <CardTitle className="card__header-title">{name}</CardTitle>
        <div className="card__header-info">
          {genres.slice(0, 3).map((genre) => (
            <Badge key={genre.id}>{genre.name}</Badge>
          ))}
          <CardDescription>{released}</CardDescription>
        </div>
      </div>
      <CardContent className="card__thumbnail">
        <img src={thumbnail} alt="Thumbnail" />
      </CardContent>
      <CardFooter className="card__footer">
        <div className="card__footer-rate">
          <img
            src="/icons/metacritic.svg"
            alt="Metacritic icon"
            className="card__footer-rate-icon"
          />
          <p className="card__footer-rate-value">{metacritic}</p>
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
