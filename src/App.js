import React from 'react';
import AuthButton from './components/AuthButton/AuthButton';
import Page from './components/Page/Page';
import './OAuth.css';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="OAuth">
        <Route path="/" component={AuthButton} exact />
        <Route path="/profile" component={Page} exact />
    </div>
  );
}

export default App;
