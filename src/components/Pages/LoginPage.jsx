import React, { useEffect, useRef } from "react";
import { Input } from "../Atoms/";

function LoginPage() {
  const inputRef = useRef(null);

  console.log(inputRef.current);
  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);

  return (
    <>
      <div>LoginPage</div>
      <Input
        name="password"
        placeholder="Password"
        label="Password"
        type="password"
        ref={inputRef}
        value={inputRef.current ? inputRef.current.value : ""}
      />
    </>
  );
}

export default LoginPage;
