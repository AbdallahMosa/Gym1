import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Join.css";
const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g3jndjf', 'template_jxbt2lf', form.current, '4ouuU5S0t5lAnkK8q')
          .then((result) => {
              console.log(result.text);
              alert("added successfully")
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr></hr>
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
      
          <form
            ref={form}
            className="email"
          onSubmit={sendEmail}
           
          >
            <input type="email"    name="user_email" placeholder="Enter your email" />
            <button className="btn btn-j">Join Now</button>
          </form>
   
      </div>
    </div>
  );
};

export default Join;
