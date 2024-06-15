import BotService from '../services/botServices.js';

export default function ChatList(selectBot, selectedBot) {
    const botService = new BotService();
    const chatList = document.createElement('div');
    chatList.className = 'w-1/4 bg-gray-100 p-4';
    const bots = botService.getBots();
    
    bots.forEach(bot => {
        const botDiv = document.createElement('div');
        botDiv.className = 'p-2 border-b clickable flex items-center';
        botDiv.innerHTML = `
            <img src="${bot.avatar}" alt="Avatar" class="w-8 h-8 rounded-full mr-2"> <!-- Assuming bot.avatar contains URL or path to avatar image -->
            <div>
                <strong>${bot.nom}</strong><br>  
            </div>
        `;
        
        if ( selectedBot !=null && bot.id === selectedBot.id) {
            botDiv.classList.add('selected');
        }

        botDiv.addEventListener('click', () => {
            selectBot(bot);
        });

        chatList.appendChild(botDiv);
    });
  
    return chatList;
}