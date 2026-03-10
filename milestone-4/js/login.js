document.getElementById('btn-login').addEventListener('click', () => {
    const loginNumber = getValue('login-number');
    if(isNaN(Number(loginNumber)) || loginNumber.length !== 11){
        alert('Please provide a valid mobile number');
        return;
    };

    const loginPin = getValue('login-pin');
    if(loginPin.length !== 4){
        alert('Pin must be 4 character');
        return;
    };

    
    const userInfo = JSON.parse(localStorage.getItem(loginNumber));
    if(!userInfo){
        alert("This number is'nt registered");
        return;
    };
    
    if(loginPin === userInfo.pin){
        alert('Login successful');

        const loginRegisterContainer = document.getElementById(
          "login-register-container",
        );
        loginRegisterContainer.classList.add('hidden');

        const homeContainer = document.getElementById('home-container');
        homeContainer.classList.remove('hidden');

        document.getElementById('balance-container').innerText = userInfo.balance;
    }
    return;
});

document.getElementById('register-link').addEventListener('click', () => {

    const loginForm = document.getElementById('login-form');
    loginForm.classList.add('hidden');

    const registerForm = document.getElementById('register-form');
    registerForm.classList.remove('hidden');
});