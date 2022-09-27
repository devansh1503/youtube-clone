import React from 'react'

function Loginpage(props) {
    return (
        <div className='login'>
            <div className='loginCard'>
                <h1>Login</h1>
                <input placeholder='Name'></input>
                <input placeholder='Password'></input>
                <button onClick={props.loginfunc}>Login</button>
            </div>
        </div>
    )
}

export default Loginpage
