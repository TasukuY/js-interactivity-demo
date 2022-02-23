//Grabbing the necessary buttons.
//const plusBtn = document.querySelector('#plus-btn');
//another way to grab the same plus button
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset-btn');

//Grab all the theme buttons.
const themeBtns = document.querySelectorAll('.theme-buttons');

//Grabbing the counter text.
const counterText = document.querySelector('#counter');

//Weiting out the necessary functions.
let count = 0;

const increase = () => {
    count++;
    //console.log(count);
    counterText.textContent = count;
}

const decrease = () => {
    count--;
    //console.log(count);
    counterText.textContent = count;
}

const reset = () => {
    count = 0;
    //console.log(count);
    counterText.textContent = count;
}

const selectTheme = event => {
    //console.log(event.target.textContent);
    let theme = event.target.textContent;
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button');
    // for(let i =0; i < buttons.length; i++){
    //     buttons[i].className = theme;
    // }
    buttons.forEach(element => element.className = theme);
}

//Add event listener to my elements. .addEventListener(eventType, callback)
plusBtn.addEventListener('click', increase);
minusBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

//Add event listeners to multiple elements using a for loop.
for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
};


