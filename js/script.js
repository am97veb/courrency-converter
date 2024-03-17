let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let EUR = 4.34;
let USD = 4.03;
let CHF = 4.57;


formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    let currency = currencyElement.value;
    let amount = amountElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "CHF":
            result = amount / CHF;
            break;
    }

     resultElement.innerText = `${result.toFixed(2)} ${currency}`    
})
