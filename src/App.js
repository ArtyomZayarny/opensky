import React, {useState} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import LoginForm from './components/Login/LoginForm'

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
  const [isLoged,setLoged] = useState(false);

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <div className="App">
      <Header />
    <Router>
    <Route exact path="/">
              {isLoged ? <Redirect to="/dashboard" /> : <LoginForm />}
          </Route>
    </Router>
      
    </div>
  );
}

export default App;
