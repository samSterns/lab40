import { getRepo } from '../services/getRepo';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';


export const fetchRepos = user => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepo(user)
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
