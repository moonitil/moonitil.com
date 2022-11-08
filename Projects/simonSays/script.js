var goBtn = document.getElementById('goBtn'),
    message = document.getElementById('message');

goBtn.addEventListener('click', launchGame);

var count = 1,
    memory = [];

function launchGame() {
    // goBtn.style.display = 'none';
    message.innerHTML = count;
    newColor();
    // var target = document.querySelector(`.${color}`);
    flashColors();
    // storeColor(color);
    // guessColor(color);
    // Increment count
    count++;
    console.log(memory);
}

// function guessColor() {
//     console.log(color);
// }

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
        var target = document.querySelector(`.${colorValue}`);
            target.classList.add("flash");
            setTimeout(function() {
                target.classList.remove("flash")
            }, 1000);
    });
}

// function storeColor(color) {
//     memory.push(color);
//     // console.log(memory);
// }
