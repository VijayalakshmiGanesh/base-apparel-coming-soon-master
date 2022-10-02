var email = document.querySelector("#email");
var email_error_msg = document.querySelector(".error-msg");
var email_error_icon = document.querySelector(".error-icon");
var check = document.querySelector(".click-icon");

check.addEventListener("click", emailValidation);

function emailValidation() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
        email_error_msg.style.display = "block";
        email_error_icon.style.display = "inline";
    }
}
