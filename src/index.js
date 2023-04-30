import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//pages
import App from './App';
import Login from './pages/Login';
import Chatting from './pages/Chatting';
//pages

import {Route,Routes, BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path = "*" element = {<h1>no path found</h1>}/>
    <Route path = '/' element = {<App/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Chatting" element = {<Chatting/>}/>
  </Routes>
  </BrowserRouter>
    ,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
