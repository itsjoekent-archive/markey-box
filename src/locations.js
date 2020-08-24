import data from './data.json';

const locations = data.map((row) => ({
  id: row[0],
  address: row[1],
  instructions: row[2],
  zip: row[3],
}));

export const locationsByTown = locations.reduce((acc, location) => ({
  ...acc,
  [location.id]: location,
}), {});

export default locations;
