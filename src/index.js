import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Es6Pratice from './components/Es6Pratice';

const printMessage = () => {
  document.getElementById('show-area').innerHTML = 'clicked!';
}


ReactDOM.render(
  <div>
    <App name='hi Gaole' handleClick={printMessage}/>
    <Es6Pratice />
    <div id='show-area' ></div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
