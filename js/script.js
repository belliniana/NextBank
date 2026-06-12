const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const message =
    document.getElementById("message");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    message.innerHTML = `

<div class="alert alert-success">

Login realizado com sucesso!

</div>

`;

});

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    message.innerHTML = `

<div class="alert alert-primary">

Conta criada com sucesso!

</div>

`;

});