export const getUser = () => (
  Promise.resolve({
    name: 'samSterns',
    followers: 3,
    following: 2,
    url: 'https://github.com/yaycub'
  })
);