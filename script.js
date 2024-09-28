// script.js
import { handleDelhiResponse } from './delhi.js'; // Import function for Delhi
import { handleMaharashtraResponse } from './maharashtra.js'; // Import function for Maharashtra

document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById('chat');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const stateSelection = document.getElementById('state-selection');
    const stateDropdown = document.getElementById('stateDropdown');
    const selectStateBtn = document.getElementById('selectStateBtn');

    let conversation = [
        { bot: "Hi! I'm your travel assistant. How can I help you today?" },
        { bot: "Please enter your destination to get started. Here are the states you can choose from:\n" +
                "- Delhi\n" +
                "- Maharashtra" // Add more states here
        }
    ];

    let currentState = null;

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

    renderConversation();

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            conversation.push({ user: userMessage });
            handleBotResponse(userMessage);
            userInput.value = '';
            renderConversation();
        }
    });

    selectStateBtn.addEventListener('click', () => {
        const selectedState = stateDropdown.value.toLowerCase();
        if (selectedState) {
            currentState = selectedState;
            conversation.push({ bot: `You selected ${selectedState}. Let me provide you with information about it.` });
            loadStateInformation(selectedState);
            stateSelection.style.display = 'none';
            renderConversation();
        } else {
            conversation.push({ bot: "Please select a valid state." });
            renderConversation();
        }
    });

    function handleBotResponse(userMessage) {
        if (userMessage.toLowerCase().includes('states of india')) {
            stateSelection.style.display = 'block';
            conversation.push({ bot: "Please select a state from the dropdown." });
        } else if (currentState) {
            if (currentState === 'delhi') {
                const delhiResponse = handleDelhiResponse(userMessage);
                conversation.push({ bot: delhiResponse || "I'm sorry, I didn't understand that." });
            } else if (currentState === 'maharashtra') {
                const maharashtraResponse = handleMaharashtraResponse(userMessage);
                conversation.push({ bot: maharashtraResponse || "I'm sorry, I didn't understand that." });
            }
        } else {
            conversation.push({ bot: "I'm sorry, I didn't understand that. Can you please rephrase?" });
        }
        renderConversation();
    }

    function loadStateInformation(state) {
        switch (state) {
            case 'delhi':
                conversation.push({ bot: "You selected Delhi. What would you like to know?" });
                renderConversation();
                break;

            case 'maharashtra':
                conversation.push({ bot: "You selected Maharashtra. What would you like to know?" });
                renderConversation();
                break;

            default:
                conversation.push({ bot: "Information for this state is not available." });
                renderConversation();
                break;
        }
    }
});

  
