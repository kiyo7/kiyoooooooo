//lib
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//component
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

//image
import back from './images/back.jpeg';

//animation
import { Screen } from './util/animation';
import { mainRouter } from './components/route/mainRouter';

//style
import './App.css';

const App: React.FC = () => {
  return (
    <>
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
        </SAllWrapper>
      </Router>
      <Footer />
    </>
  );
};

const SAllWrapper = styled.div`
  background-image: url(${back});
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  background-size: cover;
  animation: ${Screen} 2s linear;
`;

export default App;
