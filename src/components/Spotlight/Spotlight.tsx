import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { searchGames } from '@/store/reducers/searchGames';
import { Search } from 'lucide-react';

import './Spotlight.scss';

function Spotlight() {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleOpenSpotlight = () => {
    setOpen(true);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const searchData = useAppSelector((state) => state.searchGames.game.results);

  // Handle search feature
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(searchGames(searchValue));
  }, [dispatch, searchValue]);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <p className="text-sm text-muted-foreground">
        <Button variant="outline" onClick={handleOpenSpotlight}>
          <div className="search-bar">
            <Search size={14} />
            Rechercher un jeu...{' '}
          </div>
          <kbd className="pointer-events-none ml-5 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={searchValue}
          onChangeCapture={handleChangeValue}
          placeholder="Votre recherche..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchData
              ? searchData.slice(0, 5).map((game) => (
                  <Link
                    key={game.id}
                    to={`/game/${game.slug}`}
                    onClick={() => setOpen(false)}
                  >
                    <CommandItem>{game.name}</CommandItem>
                  </Link>
                ))
              : []}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default Spotlight;
