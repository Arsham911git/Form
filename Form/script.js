function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;
    let gender = document.contactForm.gender.value;
    let hobbies = [];
    let checkboxes = document.getElementsByName("hobbies");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }

    let nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if (name == "") {
        printError("nameErr", "Введите имя");
    } else {
        let regex = /^[а-яa-z]+$/iu;
        if (regex.test(name) === false) {
            printError("nameErr", "Введите имя корректно");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Введите Email");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Введите Email корректно");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Введите номер телефона");
    } else {
        let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (regex.test(mobile) === false) {
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

    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) === true) {
        return false;
    } else {
        let dataPreview = "Ваша заявка принята: \n" +
            "Имя: " + name + "\n" +
            "Email: " + email + "\n" +
            "Телефон: " + mobile + "\n" +
            "Страна: " + country + "\n" +
            "Пол: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Хобби: " + hobbies.join(", ");
        } else {
            dataPreview += "Хобби: нет";
        }
        alert(dataPreview);
        window.location.reload();
    }
};
