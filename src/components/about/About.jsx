import React from 'react';
import logo from "../../assets/logo.png"
import './about.css';

function About() {
    return (
      <div className="about">
         <div className="about_logo">
      <img src={logo} />
        </div>
        <p className="hello_about">Hi, welcome to Polka Dots...</p>
        <div className="intro_about">
          <p>
          Firstly, let me introduce myself. My name is Julia and I am proud to say Polka Dots is my small but full of life salon in the lovely village of Deddington.
          <br /> <br />
          My aim for the salon has always been about making you the guest feel at home and comfortable within a salon environment.
          <br /> <br />
          Everyone is welcome in the salon, ladies and gents and children from the young to teenagers
          <br /> <br />
          We want you to relax, laugh and have fun whilst being looked after and getting a great service at the same time.
          <br /> <br />
          We offer a variety of services within the salon, from a six weekly trim, to a complete change of colour and style. Between us we have oodles of knowledge to suit your needs.
          </p>
        </div>
      </div>
    );
}

export default About;
