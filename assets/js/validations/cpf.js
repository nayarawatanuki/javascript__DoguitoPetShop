export function validationCPF(input) {
    const formattedCPF = input.value.replace(/\D/g, "");
    let msg = "";

    if(!checkRepeatedCPF(formattedCPF) || !checkCPF_structure(formattedCPF)) {
        msg = "O CPF digitado não é válido."
    }

    input.setCustomValidity(msg);
}


function checkCPF_structure(cpf) {

    const multiplier = 10;

    return checkCheckerDigit(cpf, multiplier);
}

function checkCheckerDigit(cpf, multiplier) {

    if(multiplier >= 12) {

        return true;
    }

    let initialMultiplier = multiplier;
    let sum = 0;
    const CPF_noDigits = cpf.substr(0, multiplier - 1).split("");
    const checkerDigit = cpf.charAt(multiplier - 1);

    for(let counter = 0; initialMultiplier > 1; initialMultiplier--) {

        sum = sum + CPF_noDigits[counter] * initialMultiplier;
        counter++;
    }

    if(checkerDigit == confirmDigit(sum)) {

        return checkCheckerDigit(cpf, multiplier + 1);
    }

    return false;
}

function confirmDigit(sum) {
    return 11 - (sum % 11);
}

function checkRepeatedCPF(cpf) {
    const repeatedValues = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    let cpfValid = true;

    repeatedValues.forEach(value => {

        if(value == cpf) {
            cpfValid = false
        }
    })

    return cpfValid;
}