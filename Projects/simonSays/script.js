var goBtn = document.getElementById('goBtn'),
    message = document.getElementById('message');

goBtn.addEventListener('click', launchGame);

var count = 1,
    memory = [],
    clicked = [];

function launchGame() {
    message.innerHTML = count;
    // goBtn.style.display = "none";
    newColor();
    flashColors();
    // Increment count
    count++;
    console.log(memory);
    
}

function newColor() {
    var randomColor = Math.floor(Math.random() * 4),
    color = '';

    // Choose random color
    switch(randomColor) {
        case 0: color = 'blue';
            break;
        case 1: color = 'orange';
            break;
        case 2: color = 'pink';
            break;
        case 3: color = 'purple';
            break;
    }
    // Add color to end of array
    memory.push(color);
}

function flashColors() {
    memory.forEach((colorValue, i) => {
        setTimeout(() => {    
            var target = document.querySelector(`.${colorValue}`);
            target.classList.add("flash");
            setTimeout(() => {
                target.classList.remove("flash");
            }, 1000);
        }, i * 1500);
    });

    
}

function clickColor(clickedColor) {
    clicked.push(clickedColor);
    console.log(clicked);

    // var divs = document.querySelectorAll('.color');
        
    // // Add event listener to each element
    // divs.forEach(div => {
    //     div.addEventListener('click', () => {
    //         // console.log(div.dataset.color);
    //         clicked.push(div.dataset.color);
    //         console.log(clicked);
    //         // checkColors(clicked);
    //     });
    // });
    
    
    
}

function checkColors(clicked) {
    
}