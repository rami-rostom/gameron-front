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
  genres: Genre[];
  released: string;
  metacritic: number;
};

function GameCard(props: GameProps) {
  const { name, genres, released, metacritic } = props;

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
      <CardContent>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur. Tempor rhoncus quam nisl amet
          amet tortor. Libero non vestibulum erat in luctus...{' '}
        </p>
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
        <Link to={'#'} className="card__footer-more">
          <p className="card__footer-more-text">Plus d'infos</p>
          <ArrowRightCircle className="card__footer-more-icon" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
