
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    // Clear form after submission
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3 className="text-xl border-b border-gray-400 pb-2 mb-4 rounded-3xl bg-slate-500 transition-opacity duration-500 ease-in-out  animate-fadeIn">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit} className="animate-fadeIn transition-transform duration-500 ease-in-out transform scale-90 hover:scale-100">
        <div className="mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full p-2 border border-gray-300 rounded text-slate-950 transition-colors duration-300 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="inline-block mb-2 text-xs">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full p-2 border border-gray-300 rounded text-slate-950 transition-colors duration-300 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="w-full p-2 bg-green-500 text-white rounded transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
          Add transaction
        </button>
      </form>
    </>
  );
};
