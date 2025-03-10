// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConf from './Routes/Routes.js';

function App() {
  return (
    <Router>
      <RoutesConf />
    </Router>
  );
}

export default App;
