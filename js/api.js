const API_URL = "https://api.kinoxii.redberryinternship.ge/api";

async function login(email, password) {
    return await apiRequest("/login", {
        method: "POST",

        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}