import React, { useContext, useState, useRef, useEffect } from 'react';
import { useLocation, Route, Routes, NavLink, useNavigate } from 'react-router-dom';

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
    <div className='container'><h1>Home page</h1></div>
  );
}

function About() {
  return (
    <div className='container'>
      <h1>About Me</h1>
      <p className='text1'>My name is Izzy Holman, and I am passionate about all things music. As a music educator, I strive to inspire creativity and confidence in my students, whether through trombone lessons or broader musical pursuits. With my background as a marching band ambassador and trombone section leader, I’ve learned the importance of fostering a supportive and engaging environment where students can thrive.</p>
      <p className='text1'>In addition to teaching, I create electronic music that is available on Spotify, and I showcase my trombone playing on my YouTube channel. These platforms allow me to share my passion for music and connect with a broader audience. I believe music has the power to transform lives, and I am dedicated to sharing that joy with both students and listeners alike.</p>
      <h1>What I Offer in Lessons</h1>
      <p className='text1'>I am committed to providing high-quality, affordable lessons tailored to each student’s needs. I’m happy to meet students at their homes or schools for added convenience, and I provide all necessary materials, including sheet music and solos, to ensure they have the tools they need to succeed. My teaching approach includes:</p>
      <ul className='text1'>
        <li>Buzzing Techniques: These help students develop strong tone production and embouchure control.</li>
        <li>Foundational Music Theory: I incorporate essential theory concepts to give students a solid foundation and a competitive edge in their musical journey.</li>
        <li>Fun and Engaging Repertoire: I bring excitement to the practice room by teaching students to play music they enjoy and recognize from their daily lives, making the learning process more relatable and enjoyable.</li>
      </ul>
      <p className='text1'>Above all, I strive to create a positive and inspiring atmosphere where young musicians can grow, learn, and develop their unique musical voices. Let’s work together to unlock their full potential!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className='container'><h1>Contact page</h1></div>
  );
}

function Content() {
  return (
    <div className='container'><h1>Content page</h1></div>
  );
}

function Blog() {
  return (
    <div className='container'><h1>Blog page</h1></div>
  );
}

function Admin() {
  return (
    <div className='container'><h1>Admin page</h1></div>
  );
}
