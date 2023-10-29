const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };

    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };

    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
