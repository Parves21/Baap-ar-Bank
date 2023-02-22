function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
};
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return generatePin();
    }
};

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayField = document.getElementById('display-field');
    displayField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const character = event.target.innerText;
    // console.log(character);
    const typeNumberField = document.getElementById('type-numbers');
    const preTypeNumber = typeNumberField.value;
    if (isNaN(character)) {
        if (character === 'C') {
            typeNumberField.value = '';
        }
        else if (character === '<') {
            const digits = preTypeNumber.split('');
            digits.pop();
            const remDigits = digits.join('');
            typeNumberField.value = remDigits;
        }
    }
    else {
        const newTypeNumber = preTypeNumber + character;
        typeNumberField.value = newTypeNumber;

    }

});

document.getElementById('verify-pin').addEventListener('click', function () {
    const different1 = document.getElementById('display-field');
    const pin1 = different1.value;

    const different2 = document.getElementById('type-numbers');
    const pin2 = different2.value;

    if (pin1 === pin2) {
        alert("✅ Pin Matched... Secret door is opening for you");
        window.location.href = '../bank.html';
    }
    else {
        alert("❌ Pin Didn't Match, Please try again");
    }
    const displayField = document.getElementById('display-field');
    displayField.value = '';

    const typeNumberField = document.getElementById('type-numbers');
    typeNumberField.value = '';
});





