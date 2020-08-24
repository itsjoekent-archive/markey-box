import React from 'react';
import AppContext, { useAppReducer } from '../AppContext';
import Homepage from '../Homepage';
import Nav from '../Nav';
import TownPage from '../TownPage';
import { locationsByTown } from '../locations';
import './style.css';

function App() {
  const [state, dispatch] = useAppReducer();

  function getTownSearchQueryValue() {
    const params = window.location.search.replace('?', '').split('&');
    const match = params.find((param) => param.startsWith('town='));

    if (!match) {
      return null;
    }

    return decodeURIComponent(match).replace('town=', '');
  }

  React.useEffect(() => {
    const id = getTownSearchQueryValue();

    if (id && !state.town) {
      const town = locationsByTown[id];

      if (town) {
        dispatch((copy) => ({ ...copy, town, query: town.id }));
      }
    }
  }, [state.town, dispatch]);

  React.useEffect(() => {
    if (state.town) {
      const matches = getTownSearchQueryValue() === state.town.id;

      if (!matches) {
        window.history.pushState({}, '', `/?town=${encodeURIComponent(state.town.id)}`);
      }
    }
  }, [
    state.town,
  ]);

  return (
    <AppContext.Provider value={state}>
      <div className="app">
        <Nav />
        <main>
          {state.town && state.town !== '404' && <TownPage />}
          {!state.town && <Homepage />}
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
