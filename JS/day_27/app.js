let typing_text = document.querySelector('.text_profession');
let typing_techs = document.querySelector('.techs_content');

const typing = new Typed(typing_text, {
    strings: [' ','💻 Developer', '👷 Engineer Support'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
});

const typing_tech = new Typed(typing_techs, {
    strings: ['Javascript', 'React', 'Mongo', 'Angular'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
    showCursor: false
})