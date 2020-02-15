export const getRepo = () => (
  Promise.resolve([
    { name: 'repo1', url: 'www.rps.com' },
    { name: 'repo2', url: 'www.pokedex.com' }
  ])
);
