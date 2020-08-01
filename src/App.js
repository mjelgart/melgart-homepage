import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Michael Elgart</h2>
        <p>
          I'm a software developer, IBMer, and Duke CS/Econ grad. 
        </p>
        <p>
          I'm interested in governance, the long term future, and coding <a style={{color: '#61dafb'}} href="https://michaelelgart.com">self-referential websites</a>.
        </p>
        <p>
          My skills are mostly in React, Node, Python, and Docker. For details, check out my LinkedIn. 
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
      </header>
      <body className="App-body">
        <p>I'm currently redoing the site, so please pardon the dust. </p>
      </body>
    </div>
  );
}

export default App;
