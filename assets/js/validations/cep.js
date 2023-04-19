export function validationCEP(input) {

    const cep = input.value.replace(/\D/g, "");
    const url = `https://viacep.com.br/ws/${cep}/json`;

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset-utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {

        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                console.log(data);

                if(data.erro) {

                    console.log(data.erro)

                    input.setCustomValidity("Não foi possível buscar o CEP.");
                    return;
                }

                input.setCustomValidity("");
                fillFields(data);
                return
            }
        )
    }
}

function fillFields(data) {

    const street = document.querySelector(`[data-type="street"]`);
    const city = document.querySelector(`[data-type="city"]`);
    const state = document.querySelector(`[data-type="state"]`);

    street.value = data.logradouro;
    city.value = data.localidade;
    state.value = data.uf;
}