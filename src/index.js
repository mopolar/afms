import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.css';

import 'jquery/dist/jquery.js';


axios.defaults.baseURL = 'https://afmsbackend.herokuapp.com/api';
let userData =  JSON.parse(localStorage.getItem("userData"))
let token
if(userData){
    token= userData.token
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use(request => {     
    
    // Edit request config
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    return Promise.reject(error);
});
    

    

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
