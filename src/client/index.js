import {handleSubmit} from './js/formHandler'

import './styles/index.scss'
 
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit();
    });
});

export {handleSubmit}