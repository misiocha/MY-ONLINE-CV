// Chatbot Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

let userName = '';

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      if (!userName) {
        userName = userMessage;
        chatbotMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> Nice to meet you, ${userName}! What do you like about me?</p>`;
      } else {
        chatbotMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatbotMessages.innerHTML += `<p><strong>Bot:</strong> Thank you for your feedback, ${userName}! 😊</p>`;
      }
      chatbotInput.value = '';
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  }
});