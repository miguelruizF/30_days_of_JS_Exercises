let typing_text = document.querySelector('.text_profession');

const typing = new Typed(typing_text, {
    strings: [' ', 'Developer', 'Engineer Support'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
})