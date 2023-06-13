import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import Form from './views/Form/Form.jsx';
import Detail from './views/Detail/Detail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


export {Home, Landing, Form, Detail}