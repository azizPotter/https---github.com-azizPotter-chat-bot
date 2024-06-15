export default function ChatWindow(selectedBot) {
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window flex-1 p-4 bg-white overflow-y-auto';

    function renderMessages() {
        chatWindow.innerHTML = '';

        const messages = selectedBot.getMessages();
        messages.forEach(msg => {
            console.log(msg);
            const msgDiv = document.createElement('div');
            msgDiv.className = 'message-container flex items-start mb-4' + (msg.byUser ? ' by-user' : '');
            msgDiv.innerHTML = `
                <img src="${selectedBot.avatar}" alt="Avatar" class="avatar w-10 h-10 rounded-full mr-3">
                <div class="message-content p-3 bg-gray-200 rounded-lg">
                    <span>${msg.texte}</span>
                    <div class="message-time text-gray-500 text-xs mt-1">${new Date(msg.date).toLocaleTimeString()}</div>
                </div>`;
            chatWindow.appendChild(msgDiv);
        });

        // Scroll to the bottom to show the latest message
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Initial call to render messages
    renderMessages();

    // Subscribe to new messages
    selectedBot.subscribeToMessages(renderMessages);

    return chatWindow;
}