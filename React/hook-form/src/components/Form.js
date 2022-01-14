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
                </div>
                <div className="form-group">
                <label htmlFor = "">Last Name: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=> setLastName(event.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor = "">Email Address: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor = "">Password: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setPassword(event.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor = "">Confirm Password: </label>
                <input type="text" name="" id="" className="form-control" onChange= {(event)=>setConfirmPassword(event.target.value)} />
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