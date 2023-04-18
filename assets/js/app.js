import { validates } from "./validations/birth.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("blur", event => {
        validates(event.target);
    })
})