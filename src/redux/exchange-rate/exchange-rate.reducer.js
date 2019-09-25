import ExchangeRatesTypes from './exchange-rate.types';

const INITIAL_STATE = {
  exchangeData: null,
  loading: false,
  error: null
};

const exchangeRateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExchangeRatesTypes.FETCH_EXCHANGE_RATES_PENDING:
      return {
        ...state,
        loading: true
      };
    case ExchangeRatesTypes.FETCH_EXCHANGE_RATES_SUCCESS:
      console.log('action.payload', action.payload.data);
      return {
        ...state,
        loading: false,
        exchangeData: action.payload.data
      };
    case ExchangeRatesTypes.FETCH_EXCHANGE_RATES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
    default:
      return state;
  }
};

export default exchangeRateReducer;