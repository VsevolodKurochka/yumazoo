import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app';
import { MemoryRouter as Router } from 'react-router-dom';

import 'shared/styles/base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
