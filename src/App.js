import './App.css';

import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './Header/Header';
import { MainPage } from './Page/MainPage';
import { AboutPage } from './Page/AboutPage';
import { ContactPage } from './Page/ContactPage';
import { Footer } from './Footer/Footer';

import back from './images/back.jpeg';

function App() {
  return (
    <Router>
      <SAllWrapper>
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
      </SAllWrapper>
    </Router>
  );
}

const SAllWrapper = styled.div`
  background-image: url(${back});
  max-width: 100%;
  background-size: cover;
`;

export default App;
