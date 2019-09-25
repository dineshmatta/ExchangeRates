import React from 'react';
import { mount } from 'enzyme';
import {Dashboard} from '../pages/dashboard/dashboard.component.jsx';

// create mock function for action function
let fetchExchangeRates = jest.fn();

const mountSetup = () => {
  // Sample props to pass to our shallow render
  const props = {
    exchangeData: {"rates": {"CAD": 1.4586, "HKD": 8.6265}},
    loading: false,
    error: null,
    title: 'Fetch Currency Rates',
    fetchExchangeRates: fetchExchangeRates,
  }
  // wrapper instance around rendered output
  const enzymeWrapper = mount(<Dashboard {...props} />);

  return {
    props,
    enzymeWrapper
  };
}


describe('Mount rendered Dashboard Page', () => {
  it('should render a dashboard page with the Button and with proper text', () => {
    const { enzymeWrapper, props } = mountSetup();
    expect(enzymeWrapper.find('input').hasClass('currency-button')).toBe(true);
    expect(enzymeWrapper.find('.error-span').exists()).toBeFalsy();
    expect(enzymeWrapper.find('input').props().value).toBe(props.title);
  });

  it('should render a dashboard page with correct rows in a table', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper } = mountSetup();
    expect(enzymeWrapper.find('tr')).toHaveLength(2);
  });

  it('should show error message when any error present', () => {
    const props = {
      exchangeData: {},
      loading: false,
      title: 'Fetch Currency Rates',
      fetchExchangeRates: fetchExchangeRates,
      error: 'ERROR'
    }
    const enzymeWrapper = mount(<Dashboard {...props} />);
    expect(enzymeWrapper.find('.error-span').exists()).toBeTruthy();
  });

  it('should show loading message when data is being fetched', () => {
    const props = {
      exchangeData: {},
      loading: true,
      title: 'Fetch Currency Rates',
      fetchExchangeRates: fetchExchangeRates,
      error: null
    }
    const enzymeWrapper = mount(<Dashboard {...props} />);
    expect(enzymeWrapper.text()).toEqual('Loading....')
  });

});


