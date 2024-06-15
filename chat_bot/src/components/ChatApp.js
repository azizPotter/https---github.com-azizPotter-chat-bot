import ChatList from './ChatList.js';
import ChatWindow from './ChatWindow.js';
import BotService from '../services/botServices.js';
import MessageInput from './MessageInput.js';
import Home from './Home.js';

function ChatApp() {
    const botService=new BotService();
    botService.getLocalStrorage();
    const chatApp = document.createElement('div');
    chatApp.id = 'chat-app';
    chatApp.className = 'flex flex-col h-screen';

    const chatMain = document.createElement('div');
    chatMain.className = 'flex flex-1 overflow-hidden';

    let selectedBot = null;

    const selectBot = (bot) => {
        selectedBot = bot;
        render();
    };

    const render = () => {
        chatMain.innerHTML = ''; 

        const chatList = ChatList(selectBot,selectedBot); 
        chatMain.appendChild(chatList);

        const chatWindowContainer = document.createElement('div');
        chatWindowContainer.className = 'flex-1 p-4 bg-white overflow-y-auto chat-window2';
        const homeComponent = Home();
        chatWindowContainer.appendChild(homeComponent);
        chatMain.appendChild(chatWindowContainer);

        chatApp.appendChild(chatMain);

        if (selectedBot) {
            const chatWindow = ChatWindow(selectedBot);
            chatWindowContainer.innerHTML = '';
            chatWindowContainer.appendChild(chatWindow);

            let messageInput = chatApp.querySelector('.message-input'); 

            if (!messageInput) {
                messageInput = MessageInput(selectedBot);
                messageInput.classList.add('message-input'); 
                chatApp.appendChild(messageInput);
            } else {
      
                messageInput.updateBot(selectedBot);
            }
        } else {
            
            const existingMessageInput = chatApp.querySelector('.message-input');
            if (existingMessageInput) {
                existingMessageInput.remove();
            }
        }
    };

    render(); 

    return chatApp;
}

export default ChatApp;