import React,{useState, useEffect} from 'react'

export default function Form(props) {
    const [mode,setMode] = useState('');

    useEffect( () => {
            console.log(props)
    }, [props.mode])
    return (
        <div>
            <h2>Form {props.mode}</h2>
        </div>
    )
}
