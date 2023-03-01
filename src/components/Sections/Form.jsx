import React from "react";
import styles from "./styles/form.module.scss";
import { Input } from "../Atoms/";
import { Link } from "react-router-dom";
import { GenderSelect } from "../Atoms/";

function Form({ link, input, button, handdleSubmit }) {
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={(e) => handdleSubmit(e)}>
          {input.map((elm, index) => {
            return (
              <div key={`${elm.name}-${index}`} className={styles.wrapper}>
                {elm.type === "radio" ? (
                  <div className={styles.radio}>
                    <input type="radio" required name={elm.name} />
                    <label htmlFor={elm.name}>{elm.label}</label>
                  </div>
                ) : elm.type === "gender" ? (
                  <GenderSelect
                    state={elm.state}
                    handleChange={(index) => elm.handleChange(index)}
                  />
                ) : (
                  <Input
                    name={elm.name}
                    type={elm.type}
                    placeholder={elm.placeholder ? elm.placeholder : ""}
                    label={elm.label ? elm.label : null}
                    icon={elm.icon ? elm.icon : null}
                    ref={elm.ref}
                  />
                )}
              </div>
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
