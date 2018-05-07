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

    if (validationEmail(emailInput.value)) {
        console.log("email OK");
    } else {
        alert('You have to fill the field email correctly, including and "@" and a"domain.exemple".');
        return false;
    }
}


function validationEmail(str) {
    if (str.search("@") > 0) {
        var res = str.split("@");
        resTwo = res[1].split(".");
        if (res[1] != "" && resTwo[0] != "" && resTwo[1] != "") {
            console.log("email OK");
        } else {
            return false;
        }
    }
}