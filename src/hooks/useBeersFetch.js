import { useState, useEffect } from 'react';

//API
import API from '../API';

// Helpers
import { isPersistedState } from '../helpers';

export const useBeersFetch = style => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setLoading(true);
        setError(false);

        const beers = await API.fetchBeers(style)

        setState(beers);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(style);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchBeers();
    
  }, [style]);

  // Write to sessionStorage
  useEffect(() => {
    if(state.length){
      sessionStorage.setItem(style, JSON.stringify(state));
    }
  }, [style, state]);

  return { state, loading, error };
};
