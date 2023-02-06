import { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import styles from "./auth.module.scss";
const Auth = () => {
  const [registered, setRegistered] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.pick}>
          <span
            className={!registered ? styles.active : null}
            onClick={() => setRegistered(false)}
          >
            Register
          </span>
          <span
            className={registered ? styles.active : null}
            onClick={() => setRegistered(true)}
          >
            Login
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.wave}
        >
          <path

            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,250.7C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className={styles.formContainer}>
          {registered ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};
export default Auth;
