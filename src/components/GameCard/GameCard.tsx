import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import './GameCard.scss';

function GameCard() {
  return (
    <Card className="card">
      <CardHeader className="card__header">
        <CardTitle className="card__header-title">Titre jeu</CardTitle>
        <div className="card__header-info">
          <Badge>Catégorie</Badge>
          <CardDescription>jj/mm/aaaa</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur. Tempor rhoncus quam nisl amet
          amet tortor. Libero non vestibulum erat in luctus...{' '}
        </p>
      </CardContent>
      <CardFooter className="card__footer">
        <p className="card__footer-rate">
          <img
            src="/icons/metacritic.svg"
            alt="Metacritic icon"
            className="card__footer-rate-icon"
          />
          <p className="card__footer-rate-text">Note : </p>
          <p className="card__footer-rate-value">90</p>
        </p>
        <p className="card__footer-more">Plus d'infos</p>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
