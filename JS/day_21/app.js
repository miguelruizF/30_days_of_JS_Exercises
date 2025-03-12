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


//------------ LEVEL 2 ----------------
//Ejercicio 1: Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allParagraphs.forEach((title) => {
    title.style.color = "white";
    title.style.background = "blue";
    title.style.border = "10px solid #0000FF";
    title.style.fontSize = "20px";
    title.style.fontFamily = "Helvetica"
});

//Ejercicio 2: Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allParagraphs.forEach((title, id) => {
    id % 2 === 0 ? title.style.color = "green" : title.style.color = "red";
});

//Ejercicio 3: Set text content, id and class to each paragraph
allParagraphs.forEach( (title, index ) => {
    title.textContent = "All Paragraph have the same text";
    title.setAttribute("id", `par_${index + 1}`);
    title.setAttribute('class', 'class_par');
});


//------------ LEVEL 3 ----------------
/*  DOM: Mini project 1
Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red */