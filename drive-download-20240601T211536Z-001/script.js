document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message !== "") {
            addMessage(message, "sent");
            messageInput.value = "";
            // Here you could add code to send the message to a server if desired.
        }
    });

    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    function addMessage(text, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        if (type) {
            messageElement.classList.add(type);
        }
        messageElement.textContent = text;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
});
