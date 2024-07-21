import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';

export default function Contact() {

  const call = () => {
    alert("Your message is submitted successfully !!")
    window.location.reload();
  }

  return (
    <div className="contact">
    <div className="form">
      <label htmlFor="name">
        Name <span style={{ color: "red" }}>*</span>
        <br />
        <input type="text" id="name" placeholder="Enter your name" required="" />
      </label>
      <label htmlFor="email">
        Email <span style={{ color: "red" }}>*</span>
        <br />
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter your email"
          required=""
        />
      </label>
      <br />
      <br />
      <label htmlFor="number">
        Phone number <span style={{ color: "red" }}>*</span>
        <br />
        <input
          type="number"
          name=""
          id="number"
          placeholder="Enter your phone no"
          required=""
        />
      </label>
      <label htmlFor="subject">
        Subject<span style={{ color: "red" }}>*</span>
        <br />
        <input type="text" placeholder="Enter your subject" required="" />
      </label>
      <br />
      <br />
      <label id="msg" htmlFor="message">
        Message <span style={{ color: "red"}}>*</span>
        <br />
        <input
          style={{ padding: "8px 70px" }}
          type="text"
          placeholder="Enter your message"
          required=""
        />
      </label>
      <br />
      <br />
      <button id="btn" onClick={call}> Submit </button>
    </div>
  </div>
  
      );
    }


