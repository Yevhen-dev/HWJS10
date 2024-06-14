// onclick
// Task: Create a button and an element P with text, when you click on the button, the text changes color. You can use a function that generates a different color
let btnOne = document.querySelector( ".task__one__btn" );
let textOne = document.querySelector( ".task__one__text" );

btnOne.onclick = function () {
    textOne.style.color = getRndColor();
}

function getRndColor () {
    let r = Math.floor( Math.random() * 256 );
    let g = Math.floor( Math.random() * 256 );
    let b = Math.floor( Math.random() * 256 );
    return `rgb( ${ r }, ${ g }, ${ b } )`;
};


// ondblclick
// Task: Create an element that, when double-clicked, increases its size by 2 times (we change the width and height).
let divTwo = document.querySelector( ".task__two__click" );
divTwo.ondblclick = function() {
    this.style.width = `${ this.offsetWidth * 2 }px`;
    this.style.height = `${ this.offsetHeight * 2 }px`;
};


// addEventListener and removeEventListener
// Create a button and a text element in which the counter will be placed: 0, when you click on the button in the text value, the value should increase by 1. When the value of the counter exceeds 10, the button stops responding to clicks.
let btnThree = document.querySelector( ".task__three__btn" );
let counter = document.querySelector( ".task__three__counter" );

function clickHandler() {
    counter.innerText = +counter.innerText + 1;
    if( +counter.innerText === 10 ) {
        btnThree.removeEventListener( "click", clickHandler );
    }
}

btnThree.addEventListener( "click", clickHandler);


// Create a web page with a button and 10 elements (like a div). Attach an onclick event handler to each element. When the user clicks on an element, that element should be removed from the page
let [...removeArr] = document.querySelectorAll( ".remove" );
removeArr.forEach( item => {
    item.onclick = function() {
        this.remove();
    };
} );

// event.target
// Create a block with a blockContainer class with 3 buttons, each of which has a unique class button.first, button.second, button.third.
// Add a click handler to the blockContainer and when the button is clicked, display an alert that tells you which button was clicked
let blockContainer = document.querySelector( ".task__five__blockContainer" );
blockContainer.onclick = function(e) {
    console.log(e.target.classList.value);
};


// onclick + work with css
// Create a button and a list with links. The button has the text "Open menu". And when you click on the button, it opens a menu that is hidden with the help of css and changes the text in the middle to "Close menu"  
let menuBtn = document.querySelector( ".task__six__menu--btn" );
let list = document.querySelector( ".task__six__menu__list" );
menuBtn.onclick = function() {
    this.classList.toggle( "active" );
    if( this.classList.contains( "active" ) ) {
        this.innerHTML = "Close menu";
        list.classList.toggle( "active" );
    } else {
        list.classList.toggle( "active" );
        this.innerHTML = "Open menu";
    }
};

// Additional task
// Create a button that opens a modal window when clicked, the modal window should also have a button to close the window. Set styles to the maximum through js

let modalBtn = document.querySelector( ".task__additional__modal--btn" );
modalBtn.onclick = function () {
    let modal = document.createElement( "div" );
    let wrap = document.createElement( "div" );
    wrap.style.cssText = "position: absolute; top: 50%; left: 30%; display: inline-block; padding: 50px 100px; background-color: azure;";
    let text = document.createElement( "div" );
    text.innerHTML = "Hello, I`m modal window"
    let button = document.createElement( "button" );
    button.innerHTML = "Click me";
    wrap.appendChild(text);
    wrap.appendChild(button);
    this.after( this.appendChild( modal ) );
    modal.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #96969642; z-index: 3;";
    modal.appendChild( wrap );
    button.onclick = function() {
        modal.remove();
    };
};