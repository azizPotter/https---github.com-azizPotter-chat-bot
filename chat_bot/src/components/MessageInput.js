import BotService from '../services/botServices.js';
import Message from '../models/message.js';
import MessageService from '../services/messageServices.js';
export default function MessageInput(initialBot) {
    const botService = new BotService();
    const inputDiv = document.createElement('div');
    inputDiv.className = 'p-4 border-t bg-gray-100 flex items-center fixed bottom-0 w-full';
    const messageService =new MessageService();
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Envoyer un message';
    input.className = 'w-full p-2 border rounded';

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Envoyer';
    sendButton.className = 'ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer';

    sendButton.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const messageText = input.value.trim();
        if (messageText !== '') {
            if (initialBot) {
                const messageUser = new Message(messageText, initialBot.id, true);
                botService.addMessageToBot(initialBot.id, messageUser);
                input.value = '';
                const messageBot = new Message(await messageService.checkBot(initialBot, messageText), initialBot.id, false);
                botService.addMessageToBot(initialBot.id, messageBot);
            }
        }
    }

    inputDiv.appendChild(input);
    inputDiv.appendChild(sendButton);

    
    inputDiv.updateBot = (newBot) => {
        initialBot = newBot;
    };

    return inputDiv;
}