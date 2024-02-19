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

function GameCard() {
  return (
    <Card className="card">
      <div className="card__header">
        <CardTitle className="card__header-title">Titre jeu</CardTitle>
        <div className="card__header-info">
          <Badge>Catégorie</Badge>
          <CardDescription>jj/mm/aaaa</CardDescription>
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
          <p className="card__footer-rate-value">90</p>
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
