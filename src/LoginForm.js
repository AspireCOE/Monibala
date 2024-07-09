import React from 'react'
const LoginForm=()=>{
    const emailRef=React.useRef();
    const passwordRef=React.useRef();
    const handlesubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value
        const password=passwordRef.current.value
        alert (email+" "+password);
    }
    return(
        <form onSubmit={handlesubmit}>
        <div>LoginForm <br />
                <label htmlFor='email'>Enter mail </label>
                <input id="email" type="text" ref={emailRef}></input>
            </div>
            <div>
                    <label htmlFor='password'>Enter password </label>
                    <input id="password" type="text" ref={passwordRef} />
            </div>
                <button type='Submit'>Submit</button>
        </form>
    );
}
export {LoginForm}