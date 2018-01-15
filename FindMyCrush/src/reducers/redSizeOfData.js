export default (state = [], action) => {
  switch (action.type) {
    case 'SETData':
      return action.payload;

    default:
      return state;
  }
};
