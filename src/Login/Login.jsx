import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { signOut, getAuth } from "firebase/auth";
import React, { useState, Fragment } from "react";

export default function LoginForm({ saveData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
/* 
  const auth = getAuth();
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("ya sali");
      })
      .catch((error) => {
        console.error(error);
      });
  }; */

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Inicia Sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Accede</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="identifiers">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu correo"
            />
          </section>
          <section className="identifiers">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Escribe tu contraseña"
            />
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <button
              className="login__btn"
              onClick={(e) => {
                e.preventDefault();
                saveData(email, password);
              }}
            >
              Acceder
            </button>
          </Button>
          <Button variant="primary" onClick={handleClose}>
{/*             <button aria-label="Salir" className="bfBtn" onClick={LogOut}>
              Salte pa juera
            </button> */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//ReactDOM.render(<Login />);
