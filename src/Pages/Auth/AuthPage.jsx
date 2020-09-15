import React,{useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Redirect,
    Link
  } from "react-router-dom";
  import Form from '../../components/Form'

export default function AuthPage() {
    const [isMember,setMember] = useState(false)
    let { id } = useParams();
   

    return (
        <>
        <div>
            <h3>ID: {id}</h3>
          </div>
        </>
    )
}
