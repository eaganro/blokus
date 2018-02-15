import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
console.log(window.location.href);
render(<App playerNum={window.location.href.split('?')[1]}/>, document.getElementById('root'));