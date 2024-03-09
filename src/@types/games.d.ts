export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  description: string;
  description_raw: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  metacritic_url: string;
  playtime: number;
  suggestions_count: number;
  updated: string;
  website: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  developers: [
    {
      id: number;
      name: string;
    }
  ];
  platforms: [
    {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
};

export type GameState = {
  game: {
    results: Game[];
  };
  isLoading: boolean;
  error: null | string;
};

export type OneGameState = {
  game: Game;
  isLoading: boolean;
  error: null | string;
};

export type FavoriteGameState = {
  game: {
    id: number;
    userId: number;
    gameId: number;
    name: string;
    slug: string;
    released: string;
    rating: number;
    background_image: string;
  };
  isLoading: boolean;
  error: null | string;
};
