import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import { MainPage } from './Page/MainPage';
import { AboutPage } from './Page/AboutPage';
import { ContactPage } from './Page/ContactPage';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
