import auth from "../../firebase";
import React, { useState, Fragment } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "./Login"
import "../Login/Login.css";

export function AuthFirebase(email, password) {
  //const history = useNavigate();
  const [error, setError] = useState("");

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Bienvenido Admin")
    } catch {
      setError("Contraseña y/o correo inválidos")
    }

  };
  return (<LoginForm saveData={signIn}></LoginForm>)
}