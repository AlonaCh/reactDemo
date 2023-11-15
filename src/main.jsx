import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
const name = 'Alona';
const first_page = 2022;

const demo = (
  <div>
    <h1>My name is {name}</h1>
    <p>I have been coding for {2023 - first_page} year</p>
  </div>
);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
