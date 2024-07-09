import React from "react";
const ControlledLoginForm=()=>{
    const[form,setForm]=React.useState({
        email:" ",
        password:" ",
    })
    const handleChange=(event)=>{
        setForm({
            ...form,
            [event.target.id]:event.target.value
        })
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        alert(form.email+" "+form.password);

    }
    return(
        <form onSubmit={handlesubmit}>
            <div>Controlled ControlledLoginForm
                <br/>
                <label htmlFor="email" > email</label>
                    <input id="email" type="text" value={form.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="password">password</label>
                <input id="password" type="text" value={form.password} onChange={handleChange}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    )
}
export default ControlledLoginForm