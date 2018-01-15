export default (state = 0, action) => {
  switch (action.type) {
    case 'SETCount':
      return action.payload;

    default:
      return state;
  }
};
