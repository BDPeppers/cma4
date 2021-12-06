import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.sass';
import WebApp from './components/webapp'
import reportWebVitals from './reportWebVitals';

//Google Analytics


//render app
//ReactDom vs React
ReactDOM.render(<WebApp/>, document.getElementById('App'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
