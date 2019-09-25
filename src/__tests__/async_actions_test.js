import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../redux/exchange-rate/exchange-rate.action';
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const host = 'https://api.exchangeratesapi.io';


const fetchExchnageData = {
  "rates": {
    "CAD": 1.4586,
    "HKD": 8.6265,
    "ISK": 137.2,
  },
  "base": "EUR",
  "date": "2019-09-24"
}

describe('async actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({})
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_EXCHANGE_RATES_SUCCESS when fetching of exchange data has been done', () => {
    nock(host)
      .get('/latest')
      .reply(200, fetchExchnageData)

    const expectedActions = [
      { type: 'FETCH_EXCHANGE_RATES_PENDING' },
      { type: 'FETCH_EXCHANGE_RATES_SUCCESS', payload: {data: fetchExchnageData }}
    ]

    return store.dispatch(actions.fetchExchangeRates())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates FETCH_EXCHANGE_RATES_ERROR when fetching of exchange data returns an error', () => {
    nock(host)
      .get('/latest')
      .reply(500)

    const expectedActions = [
      { type: 'FETCH_EXCHANGE_RATES_PENDING' },
      { type: 'FETCH_EXCHANGE_RATES_ERROR', payload: {error: 'Request failed with status code 500'} }
    ]

    return store.dispatch(actions.fetchExchangeRates())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

});
