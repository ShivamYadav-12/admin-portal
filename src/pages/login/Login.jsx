import { useContext, useState } from "react"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  const[error,seterror] = useState(false)
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const handleLogin =(e)=>{
    e.preventDefault();
   

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN",payload:user})
    navigate("/")
    // ...
  })
  .catch((error) => {
    seterror(true)
  });

  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type ="email" placeholder="email" onChange={e=>setemail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
        <button type="submit">Login</button>
      {error&&  <span>Wrong password or email</span>}
      </form>
    
    </div>
  )
}

export default Login
