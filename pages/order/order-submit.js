const form = document.getElementById('form');
// const regExpName = /^[a-z0-9_-]{3,16}$/;
// const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;



form.addEventListener('submit', (even) => {
    even.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const validatePhone = (phone) => {
        const regExpPhone = /^([+]{1}[7]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2})$/;
        return regExpPhone.test(phone);
    }

    if(!validatePhone(phone)) {
        alert('Введите номер с +7');
    }else {
        alert('Данные отправлены!')
    }

     function Submit(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    console.log(new Submit(name, email, phone))


});


//при отправки формы собрать все данные из input в объект и вывести его в консоль. 3ч.
//с помощью js проверять есть ли в номере телефона +7 4ч.