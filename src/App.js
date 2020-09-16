import React, {useState,useEffect} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import {useSelector} from 'react-redux'
import Form from './components/Form/Form'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


const App = () =>{
  const [isAuth,setAuth] = useState(false);
  const [isMember,setMember] = useState(false);
  const users = useSelector( state =>  state.users)
  
   const[formMode,setFormMode] = useState('signup');

   useEffect( () => {
     if (users.length > 0) {
      console.log('new member was created')
      setMember(true)
     }
     
   }, [users])

  return (
    <div className="App">
        <Router>
          <Header showForm={setFormMode} />
          <div className="container">
            <Route exact path="/">
              { isAuth ? <Redirect to="/dashboard" /> : <Form member={isMember} mode={formMode} />}  
            </Route>
          </div>
        </Router>
    </div>
  );
}

export default App;
