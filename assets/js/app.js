import { validates } from "./validations/inputs.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    if(input.dataset.type === 'price') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener("blur", event => {
        validates(event.target);
    })
})

// const button = document.querySelectorAll("button");

// button.forEach(button => {

//     button.addEventListener("blur", event => {

//         const msgTitle = document.querySelector("#msg-title");
//         const msgText = document.querySelector("#msg-text");

//         if(button.dataset.from == 'client') {
//             msgTitle.innerHTML = "Sua conta já está funcionando!";
//             msgText.innerHTML = "Entrar na sua conta";
//         }
        

//         if(button.dataset.from == 'product') {
//             console.log(msgTitle, msgText);
//             msgTitle.innerHTML.replace = "Cadastro de produto realizado com sucesso!";
//             msgText.innerHTML = "Cadastrar outro produto";
            
//         }
//     })
// })