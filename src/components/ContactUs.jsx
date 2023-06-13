import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './contactus.css'
// npm i @emailjs/browser

const ContactUs = () => {
  const form = useRef();
console.log(form);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6be2jkq",
        "template_wmm5bsz",
        form.current,
        "mrYCVAJ2HTsphVMez"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
       
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
       <h1 style={{ textAlign: "center" ,
        fontSize: '30px',}
      }>
                        Contact Us
                      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Phone</label>
        <input type="tel" name="user_phone" />


        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;

// Styles
const StyledContactForm = styled.div`
  width: 300px;
 
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    font-family: "Poppins", sans-serif;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;