const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;

    if(nameInput.value.trim() === ""){
        nameError.textContent = "Name is required.";
        valid = false;
    } else { nameError.textContent = ""; }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(emailInput.value.trim())){
        emailError.textContent = "Valid email is required.";
        valid = false;
    } else { emailError.textContent = ""; }

    if(messageInput.value.trim() === ""){
        messageError.textContent = "Message cannot be empty.";
        valid = false;
    } else { messageError.textContent = ""; }

    if(valid){
        formSuccess.textContent = "✅ Message sent successfully!";
        contactForm.reset();
    } else { formSuccess.textContent = ""; }
});
