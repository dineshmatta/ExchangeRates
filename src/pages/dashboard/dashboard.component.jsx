import React, { Fragment, Component } from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import ExchangeTable from '../../components/exchange-table/exchange-table.component.jsx';
import { connect } from 'react-redux';
import { fetchExchangeRates } from '../../redux/exchange-rate/exchange-rate.action.js';

export class Dashboard extends Component {

  onhandleClick = (event) => {
    this.props.fetchExchangeRates();
  }

  render() {
    const { exchangeData, error, loading } = this.props;

    if (loading){
      return <div>Loading....</div>
    }

    return (
      <Fragment>
        <CustomButton title="Fetch Currency Rates" handleClick={this.onhandleClick}/>
        {error && <span className="error-span" style={{backgroundColor: 'red'}}>{error}</span>}
        {!error && <ExchangeTable data={exchangeData} />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  exchangeData: state.exchangeRates.exchangeData,
  loading: state.exchangeRates.loading,
  error: state.exchangeRates.error
});

const mapDispatchToProps = dispatch => {
  return {
    fetchExchangeRates: () => {
      dispatch(fetchExchangeRates());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);