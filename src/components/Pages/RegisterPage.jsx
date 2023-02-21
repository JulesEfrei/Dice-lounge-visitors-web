import React, { useRef } from "react";
import { Form } from "../Sections/";

function RegisterPage() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const birthday = useRef(null);
  const phone = useRef(null);

  return (
    <>
      <div>RegisterPage</div>
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
            ref: birthday,
          },
          {
            name: "phone",
            type: "tel",
            placeholder: "+44 ____ ____",
            label: "Phone Number",
            ref: phone,
          },
        ]}
      />
    </>
  );
}

export default RegisterPage;
