import React,{useState, useEffect} from 'react';
import shortid from 'shortid';
import {createUser} from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {Alert, Button, Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Form(props) {
  const dispatch = useDispatch();
  const users =  useSelector(state => state.users);
 // console.log(dispatch)
    const [data,setData] = useState({
        email:'',
        pass:'',
        isLoading:false    
    });

    useEffect( () => {
      //Clear all fields
      setData({...data, email:'', pass:''})

    },[props.mode])

    const handleChange = (name, value) => {
           setData({...data,[name]:value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();

      switch(props.mode) {
        case 'signin':
          console.log('signin');
          return false;
          case 'signup':
            const id = shortid.generate();
            const {email,pass} = {...data};
            const user = {};
            user.email = email;
            user.pass = pass;
            user.id = id;

            const usersUpdated = [...users];

            usersUpdated.push(user)
  
            //Create user in store
            setData({...data,isLoading:true})
            setTimeout(() => {
                dispatch(createUser({users:usersUpdated}))
                setData({...data, isLoading:false})
            },2000)

      }  
    }
    return (
      <>

        {props.member ? 
        <Alert variant="success">
          <Alert.Heading>Congratulations!</Alert.Heading>
          <p>Your account was created , to Login please click to Sign In</p>
        </Alert> :
        <form className="demoForm" onSubmit={(e) => {handleSubmit(e)}}>
          <h2>{props.mode === 'signup' ? 'Sign up' : 'Sign In'}</h2>
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
        {props.mode === 'signup' ? 'Create' : 'Enter'}
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
