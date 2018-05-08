var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#message");
var submitButton = document.querySelector("#submit");
var emailTo = "julio_flima@hotmail.com";
var subjectTo = "CV Git";
var tokenTo = "ae108ab8-3746-49fb-a1c9-15978486cda4"


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

    Email.send(
        emailInput.value,
        emailTo,
        SubjectTo,
        messageInput.value, {
            token: tokenTo,
            callback: function done(message) {
                alert("send")
            }
        }
    );
}


function validationEmail(str) {
    if (str.search("@") > 0) {
        var res = str.split("@");
        var resTwo = res[1].split(".");
        if (res[1] != "" && resTwo[0] != "" && resTwo[1] != "") {
            console.log("email OK");
            return true;
        } else {
            return false;
        }
    }
}