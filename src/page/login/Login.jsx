import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import city from "../../images/city.jpeg";
import styled from "./Login.module.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <section className={styled.section}>
      <div className={styled.container}>
        <div className={styled.user}>
          <div className={styled.imgBx}>
            <img src={city} alt="city" />
          </div>
          <div className={styled.formBx}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <h2>Sign In</h2>
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </label>
              <button type="submit">Login</button>
              <p className={styled.signup}>
                Don`t have an account?{" "}
                <NavLink to="/registration">Sign Up.</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authOperations } from "../../redux/auth";

// export default function Login() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(authOperations.logIn({ email, password }));
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <h1>Login page</h1>

//       <form onSubmit={handleSubmit} autoComplete="off">
//         <label>
//           Почта
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Войти</button>
//       </form>
//     </div>
//   );
// }
