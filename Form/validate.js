const MOBILE = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const EMAIL = /^\S+@\S+\.\S+$/;
const requiredFields = ['name', 'email', 'mobile', 'gender'];
const textFields = ['name', 'email', 'mobile'];
const inputs = Array.from(document.querySelectorAll('.forma input'));

window.addEventListener('load', () => {
    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.pattern = '^[А-Я][а-я]{2,}$');

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true);
    const errors = {}

    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.addEventListener('input', () => {

            const name = RegExp(input.pattern).test(input.value);
            const inputErorr = errors[input.name];
            if (name == false) {
                error(input, "Заполните имя правильно");
            } else {
                inputErorr?.remove();
                errors[input.name] = null;
            }
        }));

    const phone = document.querySelector('input[name=phone]');
    phone.pattern = MOBILE.source;
    phone.addEventListener('input', () => {
        const inputErorr = errors[phone.name];
        if (!phone.value.match(RegExp(phone.pattern))) {
            phone.classList.add('invalid-input');
            error(phone, "Введите номер телефона правильно");
        } else {
            phone.classList.remove('invalid-input');
            inputErorr?.remove();
            errors[phone.name] = null;
        }
    });

    const mail = document.querySelector('input[name=email]');
    mail.pattern = EMAIL.source;
    mail.addEventListener('input', () => {
        const inputErorr = errors[mail.name];
        if (!mail.value.match(RegExp(mail.pattern))) {
            mail.classList.add('invalid-input');
            error(mail, "Введите email правильно");
        } else {
            mail.classList.remove('invalid-input');
            inputErorr?.remove();
            errors[mail.name] = null;
        }
    });

    function error(input, text) {
        const errorElement = errors[input.name] ?? document.createElement('p');
        errorElement.innerText = text;

        if (errors[input.name]) return;

        errorElement.classList.add('input-error');
        input.parentNode.appendChild(errorElement);
        errors[input.name] = errorElement;
    }
});
