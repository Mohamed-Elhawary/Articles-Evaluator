import {handleSubmit} from './js/formHandler';
import {checkUrl} from './js/checkURL';

import './styles/index.scss'
 
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit();
    });
});

export {handleSubmit, checkUrl} // Refernce all the App Methods from the [Client Library] by exporting them in the index.js file