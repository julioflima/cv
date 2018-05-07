var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#message");
var submitButton = document.querySelector("#submit");

function onSubmit() {
    if (nameInput.value === "") {
        alert("You have to fill the field name.");
        return false;

    }
    if (emailInput.value === "") {
        alert("You have to fill the field email.");
        return false;

    }
    if (messageInput.value === "") {
        alert("You have to fill the field message.");
        return false;

    }
}