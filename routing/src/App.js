import React from 'react';
import About from './About';
import Nav from './Nav';
import Facts from './Facts';
import './App.css';
import Item from './Item';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/facts" exact component={Facts} />
          <Route path="/facts/:id" component={Item}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
