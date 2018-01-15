export const setDataSize = size => {
  return {
    type: 'SETData',
    payload: size
  };
};

export const setCounterSize = no => {
  return {
    type: 'SETCount',
    payload: no
  };
};

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
