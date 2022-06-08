const MOBILE = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const NAME = /^[а-яa-z]+$/iu;
const EMAIL = /^\S+@\S+\.\S+$/;

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const mobile = document.querySelector('input[name=mobile]').value;
    const country = document.contactForm.country.value;
    const gender = document.contactForm.gender.value;
    const hobbies = Array.from(document.querySelectorAll("input[name='type']:checked")).map((elem) => elem.value)
    let nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if (name == "") {
        printError("nameErr", "Введите имя");
    } else {
        if (NAME.test(name) === false) {
            printError("nameErr", "Введите имя корректно");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Введите Email");
    } else {
        if (EMAIL.test(email) === false) {
            printError("emailErr", "Введите Email корректно");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Введите номер телефона");
    } else {
        if (MOBILE.test(mobile) === false) {
            printError("mobileErr", "Введите номер телефона корректно");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (country == "Select") {
        printError("countryErr", "Выберите вашу страну");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    if (gender == "") {
        printError("genderErr", "Выберите ваш пол");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    return (nameErr || emailErr || mobileErr || countryErr || genderErr) ? false : true;
};
