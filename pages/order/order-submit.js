const form = document.getElementById('form');
const regExpName = /^[a-z0-9_-]{3,16}$/;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
let isValidate = false;


const submit = () => {
    alert('данные отправлены!');
}

const validateElem = (elem) => {
    if (elem.name === 'name'){
        if(!regExpName.test(elem.value) && elem.value !== '') {
            elem.nextElementSibling.textContent = 'Введите корректное имя пользователя';
            isValidate = false;
        }else {
            elem.nextElementSibling.textContent = '';
            isValidate = true;
        }
    }
    if (elem.name === 'email') {
        if(!regExpEmail.test(elem.value) && elem.value !== '') {
            elem.nextElementSibling.textContent = 'Введите корректный Email';
            isValidate = false;
        }else {
            elem.nextElementSibling.textContent = '';
            isValidate = true;
        }
    }
    if (elem.name === 'phone') {
        if(!regExpPhone.test(elem.value) && elem.value !== '') {
            elem.nextElementSibling.textContent = 'Введите корректный номер';
            isValidate = false;
        }else {
            elem.nextElementSibling.textContent = '';
            isValidate = true;
        }
    }
}
for(let elem of form.elements) {
    elem.addEventListener('blur', () => {
        validateElem(elem);
    });
}

form.addEventListener('submit', (even) => {
    even.preventDefault();

    for(let elem of form.elements) {
        console.log(form.elements[0]);
        if (elem.value === '') {
            elem.nextElementSibling.textContent = 'данное поле не заполненно!';
            isValidate = false;
        }else {
            isValidate = true;
        }
    }
    if(isValidate) {
        submit();
        form.reset();
    }
})