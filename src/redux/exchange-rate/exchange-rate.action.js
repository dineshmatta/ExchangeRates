import axios from 'axios';
import ExchangeRatesTypes from './exchange-rate.types';

export const fetchExchangeRates = () => {
  return dispatch => {
    dispatch(fetchingExchangeRatesPending());

    return axios
      .get(`https://api.exchangeratesapi.io/latest`)
      .then(res => {
        dispatch(fetchingExchangeRatesSuccess(res.data));
      })
      .catch(err => {
        const error = err.message ? err.message : err;
        dispatch(fetchingExchangeRatesFailure(error));
      });
  };
}

const fetchingExchangeRatesPending = () => ({
  type: ExchangeRatesTypes.FETCH_EXCHANGE_RATES_PENDING
});

const fetchingExchangeRatesSuccess = data => ({
  type: ExchangeRatesTypes.FETCH_EXCHANGE_RATES_SUCCESS,
  payload: {
    data
  }
});

const fetchingExchangeRatesFailure = error => ({
  type: ExchangeRatesTypes.FETCH_EXCHANGE_RATES_ERROR,
  payload: {
    error
  }
});