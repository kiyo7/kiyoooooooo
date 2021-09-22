import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from './Page/MainPage';
import { AboutPage } from './Page/AboutPage';
import { ContactPage } from './Page/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
