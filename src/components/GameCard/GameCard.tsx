import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Rating from '@mui/material/Rating';
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
  rating: number;
  thumbnail: string;
};

function GameCard(props: GameProps) {
  const { name, slug, genres, released, rating, thumbnail } = props;

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
