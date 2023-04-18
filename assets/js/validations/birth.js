export function validates(input) {

    const typeInput = input.dataset.type;

    if(validators[typeInput]) {

        validators[typeInput](input);
    }
}

const validators = {
    dateBirth: input => validationBirth(input)
}


function validationBirth(input) {

    const dateReceived = new Date(input.value);
    let msg = "";

    if(!over18(dateReceived)) {

        msg = "Você deve ter mais de 18 anos para se cadastrar."
    }

    input.setCustomValidity(msg);
}

function over18(date) {

    const currentDate = new Date();
    const dateMore18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return dateMore18 <= currentDate;
}


const dateBirth = document.querySelector("#birth");

dateBirth.addEventListener("blur", (event) => {

    validationBirth(event.target)
})