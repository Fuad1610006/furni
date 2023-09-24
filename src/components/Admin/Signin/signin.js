import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './signin.css';
import { login } from "../Auth/auth";

function Signin() {
    const navigate=useNavigate();
    let sign = async(inputs) => {
        await login(inputs);
        navigate('/');
    }

    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sign(inputs);
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label for="uname"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email Address"  name="email" onChange={handleChange} required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required/>

                            <button type="submit">Login</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                            </label>
                        </div>

                        <div className="container">
                            <button type="button" className="cancelbtn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;