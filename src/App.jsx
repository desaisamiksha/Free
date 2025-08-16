import React from "react";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>
          Hi, I'm <span className="highlight">Anushka Surywanshi</span>
        </h1>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/anushka-suryawanshi-847581282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:suryawanshiaanushka@gmail.com">
  <FaEnvelope /> Gmail
</a>
          <a href="https://yourblog.com" target="_blank" rel="noreferrer">
            <FaBlog /> Blog
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FaFileAlt /> View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
