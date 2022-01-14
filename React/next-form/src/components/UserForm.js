import React, {useState} from 'react';

const Form = (props) => {

    let [first_name, setFirstName] = useState("")
    let [lname, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirm_password, setConfirmPassword] = useState("")

    return (
        <div>
            <form action = "">
                <div className="form-group">
                <label htmlFor = "">First Name: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=> setFirstName(event.target.value)}/>
                {
                first_name.length < 2
                ?<p className="text-danger">First name must have at least 2 characters. Current length {first_name.length}</p>:""
                }
                </div>
                <div className="form-group">
                <label htmlFor = "">Last Name: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=> setLastName(event.target.value)} />
                {
                lname.length < 2
                ?<p className="text-danger">Last name must have at least 2 characters. Current length {lname.length}</p>:""
                }
                </div>
                <div className="form-group">
                <label htmlFor = "">Email Address: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setEmail(event.target.value)} />
                {
                email.length < 2
                ?<p className="text-danger">Password must have at least 8 characters. Current length {email.length}</p>:""
                }
                </div>
                <div className="form-group">
                <label htmlFor = "">Password: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setPassword(event.target.value)} />
                {
                password.length < 8
                ?<p className="text-danger">Password must have at least 8 characters. Current length {password.length}</p>:""
                }
                </div>
                <div className="form-group">
                <label htmlFor = "">Confirm Password: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setConfirmPassword(event.target.value)} />
                {
                password != confirm_password
                ?<p className="text-danger">Password must match. </p>:""
                }
                </div>

            </form>
            <hr/>
            <p>Your form data</p>
            <p>First Name: {first_name}</p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm_password}</p>

        </div>
    )

}

export default Form;