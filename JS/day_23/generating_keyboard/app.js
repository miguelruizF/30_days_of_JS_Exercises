let d = document;
let container = d.querySelector('#container');
let container_text = d.querySelector('#container_text');
let span_text = d.querySelector('#span_text');
let keyboard_text = d.querySelector('#code');

d.addEventListener('keypress', e => {
    let key = e.key;
    let code = e.code;

    /* if(span.textContent !== null){
        span.innerHTML = ""
    } */
    span_text.textContent = key;

    keyboard_text.textContent = code;
});