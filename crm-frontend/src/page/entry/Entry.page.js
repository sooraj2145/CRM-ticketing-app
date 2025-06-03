import React, {useState } from 'react';
import "./Entry.style.css"
import { Container } from 'react-bootstrap';
import Login from '../../components/login/Login.comp';
import ResetPassword from '../../components/password-reset/PasswordReset.comp';
export default function EntryPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const [formLoad,setFormLoad] = useState("login"); // login or reset
    const handleOnChange = (e) => {
        
        const {name,value} = e.target;
            switch(name){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        console.log("Form submitted with email:", email, "and password:", password);
    }
    
    const handleResetPassword = (formType) => {
            setFormLoad(formType);
    }

    const handleResetPasswordSubmit = (e) => {
        e.preventDefault();
        if(!email) {
            alert("Please enter your email");
            return;
        }
        console.log("Reset password request submitted for email:", email);
        
    }


  return (
    <div className="entry-page bg-info">
      <Container className="form-box bg-light p-5 rounded  w-25 mt-2 ">
        {formLoad==="login" && <Login 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            handleResetPassword={handleResetPassword}
            email={email}
            password={password}/>} 
        {formLoad==="reset" && <ResetPassword
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            handleResetPassword={handleResetPassword}
            handleResetPasswordSubmit={handleResetPasswordSubmit}
            email={email}/>}    
      </Container>
    </div>
  );
}