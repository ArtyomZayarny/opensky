import React,{useState, useEffect} from 'react';
import shortid from 'shortid';
import {createUser} from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {Spinner} from 'react-bootstrap'
import SuccessMsg from './SuccessMsg';
import './Form.scss'



export default function Form({setAuth,mode,...props}) {
  const dispatch = useDispatch();
  const users =  useSelector(state => state.users);

  const [data,setData] = useState({
        email:'',
        pass:'',
        isLoading:false,
        creating:false,
        mode:'signup' ,
        emailValid:false,
        emailErrorMsg:'',
        passErrorMsg:'',
        passValid:false,

    });

    useEffect( () => {
      //Clear all fields
      setData({...data, email:'', pass:'', mode, creating:false }) 

    },[mode])

    const handleChange = (name, value) => {
           setData({...data,[name]:value})
    }

    const checkEmail = (users,email) => {
      const checkEmail = users.filter(user => user.email === email);
      if (checkEmail.length > 0) {
        return checkEmail[0]
      }
      return false;
    }

    const newUser = (email,pass) => {
      const id = shortid.generate();
      const user = {};
            user.email = email;
            user.pass = pass;
            user.id = id;
      return user;
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const email  =  data.email;
      const pass = data.pass;
      const usersList = users;
      let user = {};

      switch(mode) {
        case 'signin':
               //Check if user with email exist;
               const member = checkEmail(usersList,email);
               console.log(member)
               if (member) {
                 //check if correctly pass
                 if (member.pass === data.pass) {
                   console.log('pass is correct')
                   setData({...data,passValid:true})
                   setAuth(true);
                 } else {
                   console.log('pass was inccorect')
                   setData({...data,passErrorMsg:'Password is incorrect'})
                 }
               } else {
                 console.log('User is not registred')
                 setData({...data,emailErrorMsg:'There is no user with this email address'})
               }


          return false;
          case 'signup':
            if (usersList.length > 0) {
              //Check if user is already exist
              user =  checkEmail(usersList,email)
              if (user) {
                //Do not allow to exist two users with the same emails
                setData({...data,emailErrorMsg:'User with this e-mail already exist'})
              } else {
                user = newUser(email,pass)
              }
            } else { 
                 //UsersList is empty - create first user
                 user = newUser(email,pass)
            }
           
            //Update usersList
            const usersUpdated = [...users];
            usersUpdated.push(user)
          
            //Update usersList in store
            setData({...data,isLoading:true})
            setTimeout(() => {
                dispatch(createUser({users:usersUpdated}))
                setData({...data, isLoading:false,creating:true})
              
            },2000)

      }  
    }
    return (
      <>
        { data.creating ? <SuccessMsg />
           :
        <form  onSubmit={(e) => {handleSubmit(e)}}>
          <h2>{mode === 'signup' ? 'Sign up' : 'Sign In'}</h2>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control" value={data.email}
                name="email" onChange={ (e) => {handleChange(e.target.name, e.target.value)}} required />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" value={data.pass}
                onChange={ (e) => {handleChange(e.target.name, e.target.value)}}
                className="form-control" required minLength="3"
           name="pass" />
       </div>
        <button type="submit" className="btn btn-primary">
        {mode === 'signup' ? 'Create' : 'Enter'}
            {data.isLoading ?
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            /> : '' }
        </button>
            </form> }
     </>
    )
}
