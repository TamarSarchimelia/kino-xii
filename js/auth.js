const loginOverlay = document.querySelector(".login-overlay");
const closeButton = document.querySelector(".login-modal header button");

const loginForm = loginModal.querySelector("form");
const emailInput = document.querySelector("#email");

const passwordInput = document.querySelector("#password");
const loginModal = document.querySelector(".login-modal")

closeButton.addEventListener("click", () => {
    loginOverlay.style.display = "none";
});

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.ariaValueMax.trim();
    const password = passwordInput.value;
    try{
        const data = await loginForm(email, password);
        localStorage.setItem("token", data.token);
        window.location.href = "index.html";
    }catch(error){
        console.error("Login failed", error);
        showLoginError(error);
    }
});

function showLoginError(error){
    let message = "Invalid email or password";
    if(error.data && error.data.message){
        message = error.data.message;
    }

    let errorElement = loginForm.querySelector(".login-error");
    if(!errorElement){
        errorElement = document.createElement("p");
        errorElement.className = "login-error";
        loginForm.prepend(errorElement);
    }
    errorElement.textContent = message;
}