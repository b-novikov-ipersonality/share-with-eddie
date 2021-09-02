import { useEffect, useState } from 'react';

export const useMediaQuery = (queries: string | string[]): boolean[] => {
  const [matches, setMatches] = useState<boolean[]>([]);

  useEffect(() => {
    const getMatchingQueries = () => {
      if (typeof queries === 'string') {
        const { matches } = window.matchMedia(queries);

        return [matches];
      }

      const medias = queries.map((query) => window.matchMedia(query));

      return medias.map((media) => media.matches);
    };

    const hasMatchesChanged = (currentMatches: boolean[]) => {
      return currentMatches.toString() !== matches.toString();
    };

    if (typeof window !== 'undefined') {
      const matches = getMatchingQueries();

      if (hasMatchesChanged(matches)) {
        setMatches(matches);
      }

      const listener = () => {
        const matches = getMatchingQueries();

        if (hasMatchesChanged(matches)) {
          setMatches(matches);
        }
      };

      window.addEventListener('resize', listener);

      return () => {
        window.removeEventListener('resize', listener);
      };
    }
  }, [queries, matches]);

  return matches;
};
