import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';
import { register } from "../Auth/auth";

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({ ...values, [name]: value }));
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(inputs);
        navigate('/signin');
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label for="uname"><b>Name</b></label>
                            <input type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} />

                            <label for="uname"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

                            <label for="psw"><b>Image</b></label>
                            <input type="file" className="form-control" name="image" onChange={onFileChange} />

                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;