import React, { useRef } from "react";
import { Form } from "../Sections/";
import styles from "./styles/loadingPage.module.scss";

function LoginPage() {
  const email = useRef(null);
  const password = useRef(null);

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
        />
      </div>
    </>
  );
}

export default LoginPage;
