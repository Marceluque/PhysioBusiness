import React, { useState } from "react";
import Input from "./Input";
import Button from "./components/button/Button";
import "./index.css";

function App() {
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
  
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handleFirstNameInputChange = (event) => {
      setValues({...values, firstName: event.target.value})
    }
    const handleLastNameInputChange = (event) => {
      setValues({...values, lastName: event.target.value})
    }
    const handleEmailInputChange = (event) => {
      setValues({...values, email: event.target.value})
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      if(values.firstName && values.lastName && values.email){
        setValid(true);
      }
      setSubmitted(true);
    }

    const inputs = [
      {
        id: "firstName",
        placeholder: "first name",
        onChange: handleFirstNameInputChange
      },
      {
        id: "lastName",
        placeholder: "last name",
        onChange: handleLastNameInputChange
      },
      {
        id: "email",
        placeholder: "email",
        onChange: handleEmailInputChange
      }
    ]
    
    return (
      <div class="container">
        <div class="form-container">
          <form class="register-form" onSubmit={handleSubmit}>
            {submitted && valid ? <div class="success-message">Thank you for registering!</div> : null}
            {
              inputs.map(({id, placeholder, onChange}) => {
                return (
                  <>
                    <Input 
                      onChange={onChange} 
                      value={values[id]} 
                      placeholder={placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
                    />
                    {submitted && !values[id] ? <span id={"first-name-error"}>{`Please enter a ${placeholder}`}</span> : null}
                  </>
                )
              })
            }
            <Button name="Register"/>
          </form>
        </div>
        <div class="login-container">
          <form class="register-form" onSubmit={handleSubmit}>
            {submitted && valid ? <div class="success-message">Successfully logged in!</div> : null}
            <input
              onChange={handleFirstNameInputChange}
              value={values.firstName}
              id="first-name"
              class="form-field"
              type="text"
              placeholder="Email"
              name="firstName"
            />
            {submitted && !values.firstName ? <span id="first-name-error">Please enter a valid email</span> : null}
            <input
              onChange={handleLastNameInputChange}
              value={values.lastName}
              id="last-name"
              class="form-field"
              type="password"
              placeholder="Password"
              name="lastName"
            />
            
            {/*{submitted && !values.firstName ? <span id="last-name-error">Please enter a last name</span> : null}
            <input
              onChange={handleEmailInputChange}
              value={values.email}
              id="email"
              class="form-field"
              type="text"
              placeholder="Phone number"
              name="email"
            />
            */}
            {submitted && !values.firstName ? <span id="email-error">Please enter a correct password</span> : null}
            <Button name="Login"/>
          </form>
        </div>
      </div>
    );
  }
  
  export default App;