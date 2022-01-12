import { useContext } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {auth} from "../../src/Firebase/FirebaseConfig";
import {DataContext} from '../context/dataContext';

import './acceso.css'

function LoginForm() {
  const {user, setUser, email, setEmail, password, setPassword, show, setShow} = useContext(DataContext);  

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    setEmail('')
    await signOut(auth);
  };


  console.log(show)
  return (
    <div 
      className="escDiv" 
    >
        <form className="Login">
          <div>
            <h3> Login </h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input type="password"
              placeholder="Password..."
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          <button onClick={login}> Login</button>
          </div>

          <h4> User Logged In: </h4>
          {user?.email}

          <button onClick={logout}> Sign Out </button>
        </form>
    </div>

  );
}

export default LoginForm;