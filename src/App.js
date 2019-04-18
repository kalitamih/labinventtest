import React from 'react';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import './App.css';

const App = () => (
  <div className="App">
    <Ethernet />
    <Wireless />
    <Buttons />
  </div>
);

export default App;
