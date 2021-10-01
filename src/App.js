//style
import './App.css';

//lib
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import { Header } from './Header/Header';
import { MainPage } from './Page/MainPage';
import { ContactPage } from './Page/ContactPage';
import { Footer } from './Footer/Footer';

//images
import back from './images/back.jpeg';

//animation
import { Screen } from './util/animation';

function App() {
  return (
    <Router>
      <SAllWrapper>
        <Header />
        <Switch>
          <Route exact path="/kiyoooooooo">
            <MainPage />
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
  width: 100vw;
  position: relative;
  padding-bottom: 60px;
  box-sizing: border-box;
  min-height: 100vh;
  background-size: cover;

  animation: ${Screen} 2s linear;
`;

export default App;
