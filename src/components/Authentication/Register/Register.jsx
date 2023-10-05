import { useContext, useState } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";


const Register = () => {
  const { signUp } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')



  const handleRegister = () => {

      if (!password) {
        setError('Password must be Minimum eight characters, at least one letter and one number:')
    }
      else {
        setError('')
        if (email) {
          signUp(email, password)
            .then(result => console.log(result.user))
          .catch(error =>setError(error))
        }
    }
    }


  
  return (
    <div>
      <div>
        <div className="login-container">
          <div>
            <p>{error}</p>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Type Email"
            />
            <input
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Type Password"
            />
            <button onClick={handleRegister} className="Login-btn">
              Register
            </button>
            <div className="login-btns">
              <button className="google-btn ">Google Login</button>
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
    </div>
  );
};

export default Register;
