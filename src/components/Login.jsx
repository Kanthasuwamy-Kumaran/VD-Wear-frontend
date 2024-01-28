import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const navigate = useNavigate()
    const handleSumbit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result => {console.log(result)
            if(result.data === "success"){
                navigate('/avatardemo')
            }
        
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSumbit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <Link to="/avatardemo">
                        <button type="sumbit" className="btn btn-success w-100 rounded-0">
                            Login
                        </button>
                    </Link>

                    

                    </form>
                    <p>Don't Have an Account</p>

                    <Link to="/register">
                    <button type="sumbit" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Register
                    </button>
                    </Link>
                    
            </div>
        </div>
    );
}

export default Login;