import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce((acc, num, i) => {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li
      className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-md transition-transform transform ${transaction.amount < 0 ? 'bg-red-100 border-l-4 border-red-500' : 'bg-green-100 border-l-4 border-green-500'} hover:scale-105`}
    >
      <span className="text-gray-800 font-medium">{transaction.text}</span>
      <span className={`text-gray-800 font-medium ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
        {sign}{moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="bg-red-500 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none transition-colors duration-300 ease-in-out"
      >
        x
      </button>
    </li>
  );
};
