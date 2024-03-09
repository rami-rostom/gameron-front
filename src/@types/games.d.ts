export type Game = {
  id: number;
  userId: number;
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

export type FavoriteGame = {
  userId: number;
  gameId: any;
  name: string;
  slug: string;
  released: string;
  rating: number;
  background_image: string;
};

export type FavoriteGameState = {
  game: FavoriteGame;
  isLoading: boolean;
  error: null | string;
};
