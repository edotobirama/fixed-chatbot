let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let butt = document.getElementById("sendMsgBtn");

let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");


butt.onclick = function() {
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgToChatbotContainer);
    let msgToChatbot = document.createElement("p");
    msgToChatbot.textContent = userInput.value;
    msgToChatbotContainer.classList.add("msg-to-chatbot");
    msgToChatbotContainer.appendChild(msgToChatbot);

    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgFromChatbotContainer);
    let msgFromChatbot = document.createElement("p");
    let i = Math.random() * 6;
    i = Math.floor(i);
    msgFromChatbot.textContent = chatbotMsgList[i];
    msgFromChatbotContainer.classList.add("msg-from-chatbot");
    msgFromChatbotContainer.appendChild(msgFromChatbot);
    userInput.value = "";
};
