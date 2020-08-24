import React from 'react';

export const defaultAppState = {
  query: '',
  town: null,
};

const AppContext = React.createContext(defaultAppState);
export default AppContext;

export function useAppContext() {
  const value = React.useContext(AppContext);
  return value;
}

function reducer(state, action) {
  return action(state);
}

export function useAppReducer() {
  const [state, dispatch] = React.useReducer(reducer, defaultAppState);

  return [{ ...state, dispatch }, dispatch];
}
