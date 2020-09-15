import React, {useState} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import AuthPage from './Pages/Auth/AuthPage'
import Form from './components/Form'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
/*
/siginin
/signup
/dashboard


*/

const App = () =>{
  const [isAuth,setAuth] = useState(false);
  const [isMember,setMember] = useState(false);
  return (
    <div className="App">
      <Router>
      <Header />
      
        <Route exact path="/">
  { isAuth ? <Redirect to="/dashboard" /> : <Form mode="signup"/>}  
        </Route>
        <Switch>
          <Route exact path='/signin' >
              <Form mode="signin"/>
          </Route>
          <Route exact path='/signup'>
              <Form mode="signup"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
