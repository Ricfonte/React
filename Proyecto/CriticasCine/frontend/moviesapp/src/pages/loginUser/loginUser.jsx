import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginUser.css"; 

export const LoginUser = (props) => {
  const [nameRegister, setNameRegister] = useState("");
  const [lastNameRegister, setLastNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    if (!nameRegister || !emailRegister || !passwordRegister || !confirmPasswordRegister) {
      alert("Todos los campos son obligatorios para el registro.");
      return;
    }

    if (passwordRegister !== confirmPasswordRegister) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const obj = {
        name: nameRegister,
        email: emailRegister,
        password: passwordRegister,
      };

      const response = await axios.post("http://localhost:8080/movies", obj);
      if (response.status !== 200) {
        alert("Hubo un error en el registro.");
        return;
      }

      alert("Se registró correctamente.");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const loginUser = async () => {
    if (!emailLogin || !passwordLogin) {
      alert("Todos los campos son obligatorios para iniciar sesión.");
      return;
    }

    const obj = {
      email: emailLogin,
      password: passwordLogin,
    };

    try {
      const result = await axios.post("http://localhost:8080/movies", obj);
      if (result.data === false) {
        alert("El email o contraseña son incorrectos.");
        return;
      }

      navigate("/");
    } catch (error) {
      alert("Hubo un error al iniciar sesión.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form>
          <h3>Register</h3>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" value={nameRegister} onChange={(e) => setNameRegister(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input type="text" value={lastNameRegister} onChange={(e) => setLastNameRegister(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input type="password" value={confirmPasswordRegister} onChange={(e) => setConfirmPasswordRegister(e.target.value)} />
          </div>
          <button type="button" onClick={registerUser}>
            Register
          </button>
        </form>
      </div>

      <div className="form-container">
        <form>
          <h3>Login</h3>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
          </div>
          <button type="button" onClick={loginUser}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};