/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const { googleSignIn, singIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const location = useLocation()
  console.log(location);
  // const from = location.state?.from?.pathname || "/"

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  const handleSingIn = () => {


    if (email, password) { 
      setError('')
      singIn(email, password)
        .then((result) => {
          console.log(result.user)

          // navigating user to the desired page 
          navigate(location?.state ? location.state : '/')
      })
      .catch((error) => setError(error.message));
    }
  };

  return (
    <div>
      <div className="login-container">
        <p>{error}</p>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            placeholder="Type Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Type Password"
          />
          <button onClick={handleSingIn} className="Login-btn">Login</button>
          <div className="login-btns">
            <button onClick={handleGoogle} className="google-btn ">
              Google Login
            </button>
          </div>
        </div>
        <div className="login-img">
          <img
            src="https://i.ibb.co/JtcDXq5/undraw-Mobile-login-re-9ntv.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
