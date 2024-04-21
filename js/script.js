{
    const conversionResult = (currency, amount) => {

        const EUR = 4.34;
        const USD = 4.03;
        const CHF = 4.57;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "CHF":
                return amount / CHF;
        };
    };

    const updateResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault()

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const currency = currencyElement.value;
        const amount = amountElement.value;

        const result = conversionResult(currency, amount);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

};