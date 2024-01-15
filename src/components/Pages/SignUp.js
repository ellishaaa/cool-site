import React from "react";
import '../../App.css';
import { Button } from "../Button";
import EmailForm from "../EmailForm";

export default function SignUP(){
    return (
        <div> 
        <h1 className="sign-up">SIGN UP</h1>
        <div>
        <EmailForm/>

        </div>
        
    </div>
    )
}