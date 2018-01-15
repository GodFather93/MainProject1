import { combineReducers } from 'redux';
import redCounter from './redCounter.js';
import redSizeOfData from './redSizeOfData.js';
import redCreditCounter from './redCreditCounter.js';
export default combineReducers({
  IndexCounter: redCounter,
  SizeOfData: redSizeOfData,
  CreditCount: redCreditCounter
});
