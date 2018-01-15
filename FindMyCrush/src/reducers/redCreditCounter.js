export default (state = 50, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'MINUS':
      return state - action.payload;

    default:
      return state;
  }
};
