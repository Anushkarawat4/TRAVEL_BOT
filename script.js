document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById('chat');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
  
    // Array to store conversation flow
    let conversation = [
      { bot: "Hi! I'm your travel assistant. How can I help you today?" },
      { bot: "Please enter your destination to get started." }
    ];
  
    // Function to render conversation
    function renderConversation() {
      chat.innerHTML = '';
      conversation.forEach(msg => {
        const message = document.createElement('div');
        message.classList.add('message');
        if (msg.user) {
          message.classList.add('user-message');
          message.innerText = msg.user;
        } else {
          message.classList.add('bot-message');
          message.innerText = msg.bot;
        }
        chat.appendChild(message);
      });
      chat.scrollTop = chat.scrollHeight;
    }
  
    // Initial conversation
    renderConversation();
  
    // Function to handle user input
    sendBtn.addEventListener('click', () => {
      const userMessage = userInput.value;
      if (userMessage.trim() !== '') {
        conversation.push({ user: userMessage });
        handleBotResponse(userMessage);
        userInput.value = '';
        renderConversation();
      }
    });
  
    // Function for bot's response logic
    function handleBotResponse(userMessage) {
      if (userMessage.toLowerCase().includes('paris')) {
        conversation.push({ bot: "Great! Paris is a wonderful destination. What are your travel dates?" });
      } else if (userMessage.toLowerCase().includes('july')) {
        conversation.push({ bot: "Paris in July is perfect. Would you like recommendations for flights or accommodations?" });
      } else if (userMessage.toLowerCase().includes('flights')) {
        conversation.push({ bot: "Here are some flights: Air France, Delta, and Lufthansa are offering deals. Would you like me to help with booking?" });
      } else {
        conversation.push({ bot: "I'm sorry, I didn't understand that. Can you please rephrase?" });
      }
      renderConversation();
    }
  });
  