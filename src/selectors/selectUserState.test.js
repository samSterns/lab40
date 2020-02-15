import { selectUserState, selectUserLoadingState } from './selectUserState';

describe('User State Selector', () => {
  it('should select user from state', () => {
    const state = { userData: 
      {
        user: {
          name: 'samSterns',
          follower: 3
        }
      } 
    };

    expect(selectUserState(state)).toEqual({
      name: 'samSterns',
      follower: 3
    });
  });

  it('should select loading state from UserData', () => {
    const state = {
      userData: {
        loading: true
      }
    };

    expect(selectUserLoadingState(state)).toEqual(true);
  });
});
