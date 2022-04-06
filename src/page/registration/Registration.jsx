import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styled from "./Registration.module.css";
import nature from "../../images/nature.jpg";
import { NavLink } from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className={styled.section}>
      <div className={styled.container}>
        <div className={styled.user}>
          <div className={styled.imgBx}>
            <img src={nature} alt="nature" />
            <div className={styled.formBx}>
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2>Create an account</h2>
                <label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Username"
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Create Password"
                  />
                </label>
                <button type="submit">Sign Up</button>
                <p className={styled.signup}>
                  Alredy have an account?{" "}
                  <NavLink to="/login">Sign In.</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  <div>
//    <form onSubmit={handleSubmit} autoComplete="off">
//      <label>
//        Name
//        <input type="text" name="name" value={name} onChange={handleChange} />
//      </label>
//      <label>
//        Pochta
//        <input
//          type="email"
//          name="email"
//          value={email}
//          onChange={handleChange}
//        />
//      </label>
//      <label>
//        Password
//        <input
//          type="password"
//          name="password"
//          value={password}
//          onChange={handleChange}
//        />
//      </label>
//      <button type="submit">Registration</button>
//    </form>
//  </div>;
