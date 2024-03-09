import 'server-only';
import { GAMES_API_URL } from '../constants';

export const fetchGames = async () => {
  const res = await fetch(GAMES_API_URL);

  if (!res.ok) {
    return [];
  }

  return res.json();
};