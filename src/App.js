//style
import './App.css';

//lib
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//component
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

//image
import back from './images/back.jpeg';

//animation
import { Screen } from './util/animation';
import { mainRouter } from './route/mainRouter';

function App() {
  return (
    <Router>
      <SAllWrapper>
        <Header />
        <Switch>
          {mainRouter.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              {route.children}
            </Route>
          ))}
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
