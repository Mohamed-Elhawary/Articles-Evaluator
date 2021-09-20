import {checkUrl} from './checkURL'

function handleSubmit() {
    const loader = document.querySelector(".lds-ellipsis");
    const error = document.querySelector(".error");
    const results = document.getElementById('results');
    
    loader.style.display = "inline-block";
    error.innerHTML = "";
    results.innerHTML = "";

    // check what text was put into the form field
    let articleInputValue = document.getElementById('article_url_input').value;
    
    if(checkUrl(articleInputValue)) {
        fetch('http://localhost:8081/add-url', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({articleUrl: articleInputValue})
        })
        .then(res => res.json())
        .then(function(res) {
            loader.style.display = "none";
            results.innerHTML = `
                <h3 class="text">Text: <span>${res.text}</span></h3>
                <h5 class="agreement">Agreement: <span>${res.agreement}</span></h5>
                <h5 class="confidence">Confidence: <span>${res.confidence}</span></h5>
                <h5 class="score_tag">Score Tag: <span>${res.score_tag}</span></h5>
                <h5 class="subjectivity">Subjectivity: <span>${res.subjectivity}</span></h5>
                <h5 class="irony">Irony: <span>${res.irony}</span></h5>
            `;
        });
    } else {
        error.innerHTML = "Please Add Valid Url!!";
        results.innerHTML = "";
        loader.style.display = "none";
    }    
}

export {handleSubmit}