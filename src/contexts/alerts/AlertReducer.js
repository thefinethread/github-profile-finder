const alertReducer = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        message: action.payload.message,
      };

    case 'REMOVE_ALERT':
      return {
        ...state,
        message: '',
      };

    default:
      return state;
  }
};

export default alertReducer;
