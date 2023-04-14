import React, { useContext } from 'react'
import { Context } from './Store';

const Notcool=()=>{
    const [state, setstate] = useContext(Context)
    return (
        <div className='container'>
            <h1>state</h1>
            <h2>{state.name}</h2>
            <h2>{state.email}</h2>
           
        </div>
    )
}
const CoolComponent = () => {
    const [state, setstate] = useContext(Context)
    return (
        <div className='container'>
            <h1>state</h1>
            <h2>{state.name}</h2>
            <h2>{state.email}</h2>
            <button onClick={() => {
                const data = {
                    name: 'nnnnnnnnnnnnn',
                    email: 'ahmed'
                }
                setstate(data)
            }} className='btn btn-primary'>setstate</button>
            <Notcool/>
        </div>
    )
}
export default CoolComponent;
