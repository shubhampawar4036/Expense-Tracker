import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce((acc, num, i, orig) => {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="flex justify-between bg-gradient-to-r from-gray-800 to-gray-900 p-5 mb-5 rounded-lg shadow-lg animate-fadeIn transform transition-transform duration-500 ease-in-out hover:scale-105">
      <div className="w-1/2 text-center border-r border-gray-700">
        <h4 className="text-md uppercase text-gray-400">Income</h4>
        <p className="text-2xl font-bold text-green-400 mt-2">{moneyFormatter(income)}</p>
      </div>
      <div className="w-1/2 text-center">
        <h4 className="text-md uppercase text-gray-400">Expense</h4>
        <p className="text-2xl font-bold text-red-400 mt-2">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
