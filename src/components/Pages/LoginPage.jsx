import React, { useRef } from "react";
import { Input } from "../Atoms/";

function LoginPage() {
  const inputRef = useRef(null);

  return (
    <>
      <div>LoginPage</div>
      <Input
        name="password"
        placeholder="Password"
        label="Password"
        type="password"
        ref={inputRef}
      />
    </>
  );
}

export default LoginPage;
