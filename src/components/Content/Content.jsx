import React,{useState,useEffect} from 'react'
import {apiClient} from '../../apiClient'


export default function Content() {
   const [data,setData] = useState({
        cities:[]
   })

   

   useEffect( () => {
    apiClient.get('/states/own')
       .then(res =>console.log(res))

   },[])
    return (
        <div className="container">
            <h2>Content</h2>
        </div>
    )
}
