import React, { useState } from 'react'

const CounterFun = () => {
    const [counter, setCounter] = useState(0)


    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1>{counter}</h1>
                <button className='btn btn-primary mx-2' onClick={()=>setCounter(prev=>prev+1)}>Increment</button>
                <button className='btn btn-danger' onClick={()=>counter===0 ? setCounter(0):setCounter(prev=>prev-1)}>Decrement</button>
                <div>
                    <button className='btn btn-warning' style={{marginTop:'10px'}} onClick={()=>setCounter(0)}>Reset</button>
                </div>

            </div>



        </>
    )
}

export default CounterFun