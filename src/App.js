import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { Map } from './components/Map';

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Header</h1>
      </Header>
      <main className="main">
        <Switch>
          <Route path="/">
            <Map />
          </Route>
          <Route path="/list">{/* <List /> */}</Route>
          <Route path="/settings">{/* <Settings /> */}</Route>
          <Route path="/help">{/* <Help /> */}</Route>
        </Switch>
      </main>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
}

export default App;
