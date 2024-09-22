import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from './Component/Rooter';
import "./style/global.css";
import "./style/fontawesome.css";
import "./style/brands.css";
import "./style/regular.css";
import "./style/solid.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter/>);

