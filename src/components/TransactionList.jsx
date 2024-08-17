import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-200 border-b border-gray-600 pb-3 mb-6">
        Transaction History
      </h3>
      <ul className="list-none p-0 mb-12 space-y-4">
        {transactions.map((transaction) => (
          <Transaction 
            key={transaction.id} 
            transaction={transaction} 
            className="bg-gray-800 text-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-700 transition-colors duration-300 ease-in-out font-bold"
          />
        ))}
      </ul>
    </>
  );
};