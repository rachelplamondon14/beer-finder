import { useState, useEffect } from 'react';

//API
import API from '../API';

// Helpers
import { isPersistedState } from '../helpers';

export const useBeersFetch = beerStyle => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setLoading(true);
        setError(false);

        const beers = await API.fetchBeers(beerStyle)

        setState({
          results: beers
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(beerStyle);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchBeers();
  }, [beerStyle]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(beerStyle, JSON.stringify(state));
  }, [beerStyle, state]);

  return { state, loading, error };
};
