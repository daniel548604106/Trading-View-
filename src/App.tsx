import './App.css';

import React from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
    </div>
  );
}

export default App;
