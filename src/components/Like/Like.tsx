import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getFavoriteGames } from '@/store/reducers/getFavoriteGames';
import { updateFavoriteGame } from '@/store/reducers/updateFavoriteGame';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type LikeProps = {
  id: number;
  name: string;
  slug: string;
  released: string;
  rating: number;
  thumbnail: string;
};

function Like(props: LikeProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id, name, slug, released, rating, thumbnail } = props;

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
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={handleLikeGame}>
            {isGameLiked ? (
              <Heart fill="hsl(var(--title))" size={18} />
            ) : (
              <Heart size={18} />
            )}
          </TooltipTrigger>
          <TooltipContent>
            {isGameLiked ? (
              <p>Retirer des favoris</p>
            ) : (
              <p>Ajouter aux favoris</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default Like;
