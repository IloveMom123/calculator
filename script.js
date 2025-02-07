let display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');
const calculator = document.querySelector('.calculator');
const body = document.body;

// Function to set the theme based on local storage
function setTheme() {
    if (localStorage.getItem('dark-mode') === 'true') {
        calculator.classList.add('dark-mode');
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        calculator.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Initial theme setup
setTheme();

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

themeToggle.addEventListener('change', () => {
    calculator.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});
