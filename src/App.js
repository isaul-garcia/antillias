import React from 'react';
import "inter-ui/inter.css";
import GlobalStyle from './globalStyles';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

//TODO ::
//

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
