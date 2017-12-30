import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Casey from './Casey';
import CaseyProps from './CaseyProps';
import registerServiceWorker from './registerServiceWorker'; 
import Box from './Box';

ReactDOM.render(
    <div>
        <App />
        <Casey />
        <CaseyProps color="red"/>
        <Box />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();

var myColors = ["#C0C0C0", "#808080", "#ff0000", "#FA8072", "00FF00", "0000ff"];
