export const setCredits = credit => {
  return {
    type: 'SET',
    payload: credit
  };
};

export const Yupp = minus => {
  return {
    type: 'MINUS',
    payload: minus
  };
};
