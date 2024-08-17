import React, { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction'; // Fixed import name
import { GlobalProvider } from './context/GlobalState';

import './App.css';
import moneyImage from './assets/money.jpg'; // Adjust the path as needed

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <div className="relative overflow-hidden w-full h-screen bg-gray-900 text-gray-100">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${moneyImage})` }}
          >
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
              <Header />
              <div className="mt-4">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
