// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './App.jsx';

ReactDOM.render(<Board />, document.getElementById('react-root'));