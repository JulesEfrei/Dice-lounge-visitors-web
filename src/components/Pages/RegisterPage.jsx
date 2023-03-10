import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { generateToast, verifForm } from "../../utils/formVarification";
import { GenderSelect } from "../Atoms/";
import { Form } from "../Sections/";
import styles from "./styles/registerPage.module.scss";

function RegisterPage() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const birthday = useRef(null);
  const phone = useRef(null);
  const [gender, setGender] = useState(0);

  const navigation = useNavigate();
  const datePlaceholder = new Date();

  const formVerification = async (event) => {
    event.preventDefault();
    const result = verifForm({
      name: firstName.current.value,
      name: lastName.current.value,
      name: userName.current.value,
      email: email.current.value,
      password: password.current.value,
      date: birthday.current.value,
      phone: phone.current.value,
    });
    if (result.success === true) {
      const body = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        password: password.current.value,
        userName: userName.current.value,
        email: email.current.value,
        phone: phone.current.value,
        birthday: birthday.current.value,
        gender: gender === 0 ? "Male" : gender === 1 ? "Female" : "Other",
      };

      const req = await fetch("http://localhost:3000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const res = await req.json();

      if (!res.error) {
        navigation("/login");
      } else {
        generateToast(res.error, "error");
      }
    } else if (result.error.length === 1) {
      generateToast(
        `${
          result.error[0].charAt(0).toUpperCase() + result.error[0].slice(1)
        } is invalid!`
      );
    } else {
      console.log(result);
      generateToast("Invalid form!");
    }
  };

  return (
    <>
      <div className={styles.imgContainer}>
        <img src="./LOGO_Black.png" alt="Logo of Dice" />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Create an account</h1>
        <Form
          input={[
            {
              name: "first-name",
              type: "text",
              placeholder: "Jane",
              label: "First Name",
              ref: firstName,
            },
            {
              name: "last-name",
              type: "text",
              placeholder: "Does",
              label: "Last Name",
              ref: lastName,
            },
            {
              name: "user-name",
              type: "text",
              placeholder: "Janeee",
              label: "User Name",
              ref: userName,
            },
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
            {
              name: "birthday",
              type: "date",
              label: "Date of birth",
              placeholder: "DD/MM/YYYY",
              ref: birthday,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "+44 1234 123456",
              label: "Phone Number",
              ref: phone,
            },
            {
              type: "gender",
              state: gender,
              handleChange: (index) => setGender(index),
            },
            {
              name: "privacy",
              type: "radio",
              label: "I accept the terms and privacy policy",
            },
          ]}
          link={{ to: "/login", content: "Already an account?" }}
          button="Create an account"
          handdleSubmit={(event) => formVerification(event)}
        />
      </div>

      <ToastContainer />
    </>
  );
}

export default RegisterPage;
