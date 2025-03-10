//----------- DOM ---------------
//------------ LEVEL 1 ----------------
const d = document;

//Ejercicio 1: Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = d.querySelector('p');
console.log(firstParagraph);

//Ejercicio 2: Get each of the the paragraph using document.querySelector('#id') and by their id
const thirdParagraph = d.querySelector('#third_el');
console.log(thirdParagraph); 

//Ejercicio 3: Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = d.querySelectorAll('p');
console.log(allParagraphs);

//Ejercicio 4: Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

//Ejercicio 5: Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourParagraph = d.querySelector('#four_el');
fourParagraph.textContent = 'Fourth Paragraph';
console.log(fourParagraph);

//Ejercicio 6: Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('id', `el_${index + 1}`);
    paragraph.setAttribute('class', 'paragraph');
});
console.log(allParagraphs);