import React from "react";
import "../../App.css";
import EmailForm from "../EmailForm";

export default function SignUP() {
  return (
    <div>
      <h1 className="sign-up">Contact me</h1>
      <div>
        <EmailForm />
      </div>
    </div>
  );
}
