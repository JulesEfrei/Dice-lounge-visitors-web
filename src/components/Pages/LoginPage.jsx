import React, { useEffect, useRef } from "react";
import { Input } from "../Atoms/";

function LoginPage() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current.value);
  }, [inputRef]);

  return (
    <>
      <div>LoginPage</div>
      <Input
        name="password"
        placeholder="Password"
        label="Password"
        type="text"
        icon="./UserCercle.svg"
        ref={inputRef}
      />
    </>
  );
}

export default LoginPage;
