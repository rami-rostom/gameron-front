import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import GameCard from '@/components/GameCard/GameCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { convertDateFormat } from '@/utils/calculation';
import { getGames } from '@/store/reducers/getGames';

import './Home.scss';

function Home() {
  const dispatch = useAppDispatch();

  const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Fetch and render all games data
  const gamesData = useAppSelector((state) => state.getGames.game.results);

  console.log(gamesData);

  // The default page is number 1 when fetching datas
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getGames(page));
  }, [dispatch, page]);

  // Handle pagination
  const handlePreviousPage = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };

  return (
    <>
      <div className="home" ref={ref}>
        <h1 className="home__title">Les jeux populaires</h1>

        {gamesData.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            slug={game.slug}
            genres={game.genres}
            released={convertDateFormat(game.released)}
            rating={game.rating}
            thumbnail={game.background_image}
          />
        ))}

        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePreviousPage}
                    className="page-btn"
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink>{page - 1}</PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink>{page + 1}</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext onClick={handleNextPage} className="page-btn" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default Home;
