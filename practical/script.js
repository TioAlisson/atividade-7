// EX 6 
let btnChangeColor = document.querySelector('.btn-change-color');

btnChangeColor.addEventListener('click', () => {
    theme();
})

function theme() {
    if (document.body.classList.contains('theme-light')) {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        localStorage.setItem('theme', 'theme-dark'); 
    } else {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        localStorage.setItem('theme', 'theme-light'); 
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('theme-light');
    }
}

applySavedTheme();


// EX 7
let btnEX7 = document.getElementById('btn-ex7');
btnEX7.addEventListener('click', () => {
    let textValue = document.getElementById('textInput').value;
    let msg = document.getElementById('textOutput');
    
    if(textValue === "") {
        alert("Digite ao menos uma letra");
    } else {
        msg.classList.remove('d-none');
        msg.innerHTML = textValue;
    }
})


// EX 8
let btnMore = document.querySelector('.btn-more');
let btnLess = document.querySelector('.btn-less');
let valueInput = document.getElementById('value-input');
let count = 0;

const savedCount = localStorage.getItem('count');
if (savedCount) {
    count = parseInt(savedCount); 
}

valueInput.textContent = count;

btnMore.addEventListener('click', () => {
    countMore();
})

btnLess.addEventListener('click', () => {
    countLess();
})

function countMore () {
    count += 1;
    valueInput.textContent = count;
    localStorage.setItem('count', count);
}

function countLess() {
    count -= 1;
    valueInput.textContent = count;
    localStorage.setItem('count', count);
}

// EX 9
let inputBg = document.getElementById('input-bg');
let bgColor = document.querySelector('.card-color');

inputBg.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        
        let valueInput = inputBg.value;

        if (isValidColor(valueInput)) {
            bgColor.style.backgroundColor = valueInput;
        } else {
            alert('Cor inválida! Tente novamente.');
        }
    }
});

function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}

// EX 10
let form = document.getElementById('form');
let inputName = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let inputMsg = document.getElementById('input-msg');

let formResult = document.getElementById('form-result');
let resultName = document.getElementById('result-name');
let resultEmail = document.getElementById('result-email');
let resultMsg = document.getElementById('result-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valueName = inputName.value;
    let valueEmail = inputEmail.value;
    let valueMsg = inputMsg.value;
    
    resultName.textContent = valueName;
    resultEmail.textContent = valueEmail;
    resultMsg.textContent = valueMsg;

    console.log(`Nome: ${valueName}`);
    console.log(`Email: ${valueEmail}`);
    console.log(`Mensagem: ${valueMsg}`);

    formResult.classList.remove('d-none');
});