import React from 'react';
import MiniSearch from 'minisearch';
import locations, { locationsByTown } from '../locations';
import { useAppContext } from '../AppContext';
import { ReactComponent as Icon } from './icon.svg';
import './style.css';

const locationLookup = new MiniSearch({
  fields: ['id'],
  searchOptions: { fuzzy: 0.5 },
});

locationLookup.addAll(locations);

export default function Search(props) {
  const { small = false } = props;

  const { dispatch, query, town } = useAppContext();
  const [isFocused, setIsFocused] = React.useState(false);

  const searchWrapperRef = React.useRef(null);

  React.useEffect(() => {
    function onClick(event) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [
    isFocused,
    setIsFocused,
  ]);

  function onChange(event) {
    const { target: { value } } = event;
    dispatch((state) => ({ ...state, query: value }));
  }

  function setTown(name) {
    dispatch((state) => ({
      ...state,
      town: locationsByTown[name],
      query: name,
    }));

    setIsFocused(false);
  }

  const results = locationLookup.search(query);

  return (
    <div className={`search-container ${small && '--small'}`}>
      {!town && (
        <label className="search-label" htmlFor="search">Enter your city or town</label>
      )}
      <div className="search-bar">
        <div ref={searchWrapperRef} className={`search-input-wrapper ${isFocused && '--focused'}`}>
          <Icon width="24px" height="24px" />
          <input
            id="search"
            name="search"
            aria-label="Enter your city or town"
            placeholder="e.g., “Cambridge”"
            className="search-input"
            value={query}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
          />
          {query && !!results.length && isFocused && (
            <ul className="search-results-list">
              {results.map((result) => (
                <li key={result.id} className="search-result-item">
                  <button onClick={() => setTown(result.id)}>{result.id}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
