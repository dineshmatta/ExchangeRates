import React from 'react';
import './exchange-table.css';

const ExchangeTable = ({data}) => {
  if (!data) {
    return <div>Click Fetch Currency Rates Button to Fetch latest currency rates</div>
  }
  const exchangeRateList = Object.entries(data.rates).map(([key,value])=>{
    return (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
    );
  });
  return (
    <table>
      <tbody>
        {exchangeRateList}
      </tbody>
    </table>
    
  )
}

export default ExchangeTable;