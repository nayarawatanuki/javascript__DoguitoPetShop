import { validationBirth } from "./birth.js";
import { validationCPF } from "./cpf.js";
import { validationCEP } from "./cep.js";

const typesError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const msgError = {

    name: {

        valueMissing: "O campo Nome não pode estar vazio."
    },

    eMail: {
        valueMissing: "O campo E-mail não pode estar vazio.",
        typeMismatch: "O e-mail digitado não é válido."
    },

    password: {
        valueMissing: "O campo Senha não pode estar vazio.",
        patternMismatch: "A senha deve conter: entre 6 a 12 caracteres, pelo menos 1 letra maiuscula, 1 numero e não deve conter símbolos."
    }, 

    birth: {
        valueMissing: "O campo Data de nascimeto não pode estar vazio.",
        customError: "Você deve ter mais de 18 anos para se cadastrar."
    },

    cpf: {
        valueMissing: "O campo CPF não pode estar vazio.",
        customError: "O CPF digitado não é válido."
    },

    cep: {
        valueMissing: "O campo CEP não pode estar vazio.",
        patternMismatch: "O CEP digitado não é válido.",
        customError: "Não foi possível buscar o CEP."
    },

    street: {
        valueMissing: "O campo Logradouro não pode estar vazio.",
    },

    city: {
        valueMissing: "O campo Cidade não pode estar vazio.",
    },

    state: {
        valueMissing: "O campo Estado não pode estar vazio.",
    },

    price: {
        valueMissing: "O campo Preço não pode estar vazio."
    }
}

const validators = {
    dateBirth: input => validationBirth(input),
    cpf: input => validationCPF(input),
    cep: input => validationCEP(input)
}


function showMsgError(typeInput, input) {

    let msg = "";
    typesError.forEach(error => {
        if(input.validity[error]) {
        msg = msgError[typeInput][error]
        }
    })

    return msg;
}

export function validates(input) {

    const typeInput = input.dataset.type;

    if(validators[typeInput]) {

        validators[typeInput](input);
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input__msg-error").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input__msg-error").innerHTML = showMsgError(typeInput, input)
    }
}

