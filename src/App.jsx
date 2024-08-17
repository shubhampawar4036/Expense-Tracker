import React, { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';
import backgroundVideo from './assets/Market Loop Background Video - High Resolution.mp4';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalProvider>
        <div className="relative w-full min-h-screen text-gray-100 overflow-auto">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="flex items-center justify-center w-full min-h-screen">
            <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg relative m-4 sm:m-6 lg:m-12 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
