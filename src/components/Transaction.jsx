import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
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

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`flex justify-between bg-white shadow p-2 my-2 ${transaction.amount < 0 ? 'border-r-4 border-red-500' : 'border-r-4 border-green-500'}`}>
      {transaction.text} 
      <span>
        {sign}{moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="bg-red-500 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none">
        x
      </button>
    </li>
  );
};
