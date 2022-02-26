import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
// new button

const btn = document.querySelector('#btn');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const op = document.querySelector('#op');
const res = document.querySelector('#res');

import sum from './operations/sum'
import substraction from './operations/substraction'
import multiplication from './operations/multiplication'
import division from './operations/division'

btn.addEventListener('click', e =>{
    switch(op.value){
        case '+':
            res.textContent = sum(n1.value, n2.value);
        break;
        case '-':
            res.textContent = substraction(n1.value, n2.value);
        break;
        case '*':
            res.textContent = multiplication(n1.value, n2.value);
        break;
        case '/':
            res.textContent = division(n1.value, n2.value);
        break;
    }
});


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root2')
)
