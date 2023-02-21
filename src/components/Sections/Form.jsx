import React from "react";
import styles from "./styles/form.module.scss";
import { Input } from "../Atoms/";
import { Link } from "react-router-dom";

function Form({ link, input, button }) {
  const verifForm = (event) => {
    event.preventDefault();
    console.log("Verification of form");
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={(e) => verifForm(e)}>
          {input.map((elm, index) => {
            return (
              <Input
                name={elm.name}
                type={elm.type}
                placeholder={elm.placeholder ? elm.placeholder : ""}
                label={elm.label ? elm.label : null}
                icon={elm.icon ? elm.icon : null}
                ref={elm.ref}
                key={`${elm.name}-${index}`}
              />
            );
          })}
          <button className={styles.button} type="submit">
            {button}
          </button>
          {link ? (
            <Link className={styles.link} to={link.to}>
              {link.content}
            </Link>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default Form;
