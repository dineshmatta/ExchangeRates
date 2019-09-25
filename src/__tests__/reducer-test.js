import reducer from '../redux/exchange-rate/exchange-rate.reducer';

describe('Exchange Data reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
    .toEqual({
      exchangeData: null,
      loading: false,
      error: null
    })
  });

  it('should handle FETCH_EXCHANGE_RATES_PENDING', () => {
    expect(
      reducer({
        exchangeData: null,
        loading: false,
        error: null
      },
      {
        type: 'FETCH_EXCHANGE_RATES_PENDING'
      })
    ).toEqual({
      exchangeData: null,
      loading: true,
      error: null
    })
  });

  it('should handle FETCH_EXCHANGE_RATES_SUCCESS', () => {
    expect(
      reducer({
        exchangeData: null,
        loading: false,
        error: null
      },
      {
        type: 'FETCH_EXCHANGE_RATES_SUCCESS',
        payload: {data: {"rates": {"CAD": 1.4586, "HKD": 8.6265}}}
      })
    ).toEqual({
      exchangeData: {"rates": {"CAD": 1.4586, "HKD": 8.6265}},
      loading: false,
      error: null
    })
  });

  it('should handle FETCH_EXCHANGE_RATES_ERROR', () => {
    expect(
      reducer({
        exchangeData: null,
        loading: false,
        error: null
      },
      {
        type: 'FETCH_EXCHANGE_RATES_ERROR',
        payload: {error: 'Error Fetching Data!'}
      }
      )
    ).toEqual({
      exchangeData: null,
      loading: false,
      error: 'Error Fetching Data!'
    })
  });
});
