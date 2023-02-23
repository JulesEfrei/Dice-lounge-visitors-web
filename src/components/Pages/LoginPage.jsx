import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { generateToast, verifForm } from "../../utils/formVarification";
import { Form } from "../Sections/";
import styles from "./styles/loadingPage.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function LoginPage() {
  const email = useRef(null);
  const password = useRef(null);

  const navigation = useNavigate();

  const formVerification = (event) => {
    event.preventDefault();
    const result = verifForm({
      email: email.current.value,
      password: password.current.value,
    });
    if (result.success === true) {
      navigation("/home");
    } else if (result.error.length === 1) {
      generateToast(
        `${
          result.error[0].charAt(0).toUpperCase() + result.error[0].slice(1)
        } is invalid!`
      );
    } else {
      generateToast("Invalid form!");
    }
  };

  return (
    <>
      <div className={styles.imgContainer}>
        <img src="./LOGO_Black.png" alt="Logo of Dice" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign in</h1>
        <Form
          input={[
            {
              name: "email",
              type: "email",
              placeholder: "jane@example.com",
              label: "Email",
              ref: email,
            },
            {
              name: "password",
              type: "password",
              placeholder: "Password",
              label: "Password",
              ref: password,
            },
          ]}
          button="Sign In"
          link={{ content: "No Account? Create one!", to: "/register" }}
          handdleSubmit={(event) => formVerification(event)}
        />
      </div>

      <ToastContainer />
    </>
  );
}

export default LoginPage;
