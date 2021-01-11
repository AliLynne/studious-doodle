import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import List from './components/List';
import Settings from './components/Settings';
import Help from './components/Help';

import { Map } from './components/Map';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <h1>Header</h1>
        </Header>
        <main className="main">
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/">
              <Map />
            </Route>
          </Switch>
        </main>
        <Footer>
          <Navbar />
        </Footer>
      </div>
    </Router>
  );
}

export default App;
