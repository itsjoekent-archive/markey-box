import React from 'react';
import AppContext, { useAppReducer } from '../AppContext';
import Homepage from '../Homepage';
import Nav from '../Nav';
import './style.css';

function App() {
  const [state, dispatch] = useAppReducer();

  React.useEffect(() => {
    // TODO: compare path to dataset
  }, []);

  return (
    <AppContext.Provider value={state}>
      <div className="app">
        <Nav />
        <main>
          <Homepage />
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
