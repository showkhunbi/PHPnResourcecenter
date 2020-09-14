if (document.location.search == "?success=loggedout") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "logged out"
    message.style.color = "green"
    messageDiv.appendChild(message)
}

if (document.location.search == "?notloggedin") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "you are not logged in"
    message.style.color = "yellow"
    messageDiv.appendChild(message)
}