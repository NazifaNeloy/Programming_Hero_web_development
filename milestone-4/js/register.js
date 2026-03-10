
document.getElementById("btn-register").addEventListener("click", () => {
  const registerNumber = getValue("register-number");
  if (isNaN(Number(registerNumber)) || registerNumber.length !== 11) {
    alert('Please provide a valid mobile number');
    return;
  };

  const registerPin = getValue("register-pin");

  if (registerPin.length !== 4){
    alert('Pin must be 4 character');
    return;
  };

  alert('Registration successful');


  const defaultBalance = 0;

  const newUser = new User(registerPin, defaultBalance);
  localStorage.setItem(registerNumber, JSON.stringify(newUser));
});

document.getElementById("login-link").addEventListener("click", () => {
    const registerForm = document.getElementById('register-form');
    registerForm.classList.add('hidden');

    const loginForm = document.getElementById('login-form');
    loginForm.classList.remove('hidden');
});