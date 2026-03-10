
function getValue(id){
    const value = document.getElementById(id).value;
    return value;
}

function getInnerText(id){
    const text = document.getElementById(id).innerText;
    return text;
}

function User (pin, balance){
    this.pin = pin;
    this.balance = balance;
}