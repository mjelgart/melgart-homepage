import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Michael Elgart</h2>
        <p>
          I'm a software engineer, sci-fi fan, Duke CS/Econ grad, and IBMer. 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/michaelelgart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://twitter.com/mjelgart"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>

        <a
          className="App-link"
          href="https://github.com/mjelgart"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://michaelelgart.com/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <p>
          I'm interested in, and occasionally blog about, effective altruism, sci-fi, and basketball.
        </p>
      </header>
      <body className="App-body">
        <p>I'm currently redoing the site, so please pardon the dust. </p>
      </body>
    </div>
  );
}

export default App;
