
import { render } from '@testing-library/react';
import './App.css';

import Add from './components/Add';
import List from './components/List';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <div className='nav'>
      <div><Link to='/'><i class="fa fa-home"></i></Link></div>
      <div><Link to='/Add'><i class="fa fa-shopping-bag"></i></Link></div>
      <div><Link to='/List'><i class="fa fa-list"></i></Link></div>
        </div>
        <div className='link'>
      <Switch>
        
        <Route exact path ='/'><Home/></Route>
        <Route path='/Add'><Add/></Route>
        <Route path='/List'><List/></Route>
        
      </Switch>   
      </div>
      </Router>
    </div>
  );
}

export default App;
