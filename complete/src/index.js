import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import App from './components/App';
import Test from './components/Test';

import './static/style/style.scss'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
// Router 