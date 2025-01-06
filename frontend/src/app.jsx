import React, { useContext, useState, useRef, useEffect } from 'react';
import { useLocation, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import Image from "/placeholder.png";
import { useForm } from 'react-hook-form';

export default function App() {

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content" element={<Content />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </>
  );
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/content">Content</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

function Home() {
  return (
    <div className='container' id='home-page'>
      <img id='logo-pic' src={Image} alt="Logo" />
    </div>
  );
}

function About() {
  return (
    <div className='container'>
      <div className='about-grid'>
        <div className='about-grid-box'>
          <h3 className='heading'>Education</h3>
          <ul className='about-list'>
            <li className='bold'>University of Denver Lamont School of Music</li>
            <li>Bachelor of Music 2022 ~ Professor Richard Harris</li>
          </ul>
        </div>
        <div className='about-grid-box'>
          <h3>Ensembles</h3>
          <ul className='about-list'>
            <li>Lamont Jazz Orchestra</li>
            <li>Denver Brass</li>
            <li>Lamont Wind Ensemble</li>
            <li>Lamont Symphony Orchestra</li>
          </ul>
        </div>
        <div className='about-grid-box'>
          <img id='about-pic' src={Image} alt="Photo of Izzy" />
          <ul id='social-list'>
            <li><i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-youtube"></i></li>
            <li><i class="bi bi-linkedin"></i></li>
          </ul>
        </div>
        <div className='about-grid-box'>
          <h3>About Me</h3>
          <p>My name is Izzy Holman, and I am passionate about all things music. As a music educator, I strive to inspire creativity and confidence in my students, whether through trombone lessons or broader musical pursuits. With my background as a marching band ambassador and trombone section leader, I’ve learned the importance of fostering a supportive and engaging environment where students can thrive.</p>
          <p>In addition to teaching, I create electronic music that is available on Spotify, and I showcase my trombone playing on my YouTube channel. These platforms allow me to share my passion for music and connect with a broader audience. I believe music has the power to transform lives, and I am dedicated to sharing that joy with both students and listeners alike.</p>
          <h3>What I Offer in Lessons</h3>
          <p>I am committed to providing high-quality, affordable lessons tailored to each student’s needs. I’m happy to meet students at their homes or schools for added convenience, and I provide all necessary materials, including sheet music and solos, to ensure they have the tools they need to succeed. My teaching approach includes:</p>
          <ul>
            <li>Buzzing Techniques: These help students develop strong tone production and embouchure control.</li>
            <li>Foundational Music Theory: I incorporate essential theory concepts to give students a solid foundation and a competitive edge in their musical journey.</li>
            <li>Fun and Engaging Repertoire: I bring excitement to the practice room by teaching students to play music they enjoy and recognize from their daily lives, making the learning process more relatable and enjoyable.</li>
          </ul>
          <p>Above all, I strive to create a positive and inspiring atmosphere where young musicians can grow, learn, and develop their unique musical voices. Let’s work together to unlock their full potential!</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  return (
    <div className='container'>
      <h1>Contact</h1>
      <form className="contact-form">
        <div className="name-box">
          <div className="title-container first-name"><h6 className="title">First Name:</h6>{errors.first && <span className="required">*</span>}</div>
          <div className="title-container last-name"><h6 className="title">Last Name:</h6>{errors.last && <span className="required">*</span>}</div>
          <input {...register("first", {required: true})} className="input field first-name" type="text" />
          <input {...register("last", {required: true})} className="input field last-name" type="text" />
        </div>
        <div className="title-container"><h6 className="title">Email:</h6>{errors.email && <span className="required">*</span>}</div>
        <input {...register("email", {required: true})} className="input field" type="text" />
        <div className="title-container"><h6 className="title">Subject:</h6>{errors.subject && <span className="required">*</span>}</div>
        <input {...register("subject", {required: true})} className="input field" type="text" />
        <div className="title-container"><h6 className="title">Body:</h6>{errors.body && <span className="required">*</span>}</div>
        <textarea {...register("body", {required: true})} className="input body"></textarea>
        <input className="accent send-btn gradient" type="submit" value="Send" />
      </form>
    </div>
  );
}

function Content() {
  return (
    <div className='container'><h2>Content page</h2></div>
  );
}

function Blog() {
  return (
    <div className='container'><h2>Blog page</h2></div>
  );
}

function Admin() {
  return (
    <div className='container'><h2>Admin page</h2></div>
  );
}
