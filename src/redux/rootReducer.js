
import { combineReducers } from 'redux';

import exchangeRateReducer from './exchange-rate/exchange-rate.reducer';

const rootReducer = combineReducers({
  exchangeRates: exchangeRateReducer
});

export default rootReducer;
