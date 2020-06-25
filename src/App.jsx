import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header.component';
import HomePage from './pages/home-page.component';
import LoginPage from './pages/login-page.component';
import UploadPage from './pages/upload-page.component';

function App() {
  return (
    <div className="antialiased" bg-gray-200 text-gray-900>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </div>
  );
}

export default App;
