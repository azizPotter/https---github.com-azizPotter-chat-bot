import Bot from '../models/bot.js';
import Message from '../models/message.js';

const bot1 = new Bot('Madame Miskina', 1, "./assets/Botgray.png" ,[
    new Message("Bonjour, je suis Madame Miskina,<br>Je devais être une miss météo à la base, mais c'est vraiment le bazar avec les API de météo.<br>Alors je te propose plutôt de tirer des conclusions de ton prénom.<br>Voici la liste de mes commandes :<br> -[ gender : Ton_Prénom ] pour que j'essaie de deviner ton genre.<br>-[ nationalize : Ton_Nom ] pour que j'essaie de deviner l'origine de ton nom de famille", 1, false),
    new Message("Je t'écoute !", 2, false)
]);
const bot2 = new Bot('Matthéo le cuistot', 2, "./assets/Botgreen.png",[
    new Message("Bonjour, je suis Mathéo le cuistot. <br> Voici la liste de mes commandes : <br> - [ recette : Nom_ingredients_en_anglais ] pour accéder à une liste de recettes. <br> - [ substitut : Nom_ingredients_en_anglais ] pour avoir une liste de substituts.<br>- [ découvrir ] pour découvrir une recette aléatoire.", 3, false)
]);
const bot3 = new Bot('Emma', 3, "./assets/Botpink.png",[
    new Message("Bonjour, je suis Emma. <br> Voici la liste de mes commandes : <br> - [ age : Ton_Prénom ] et j'essaierai de deviner ton âge.<br>- [ présentation ] pour découvrir qui je suis.<br>- [ imagine ] Et je créerai un personnage fictif.", 3, false)
]);

let bots =[];

export default class MessageService {
getBots(){
    return bots;
}

getLocalStrorage(){
    const listBotLocal=JSON.parse(localStorage.getItem('bots'));
    if(listBotLocal==null){
        bots=[bot1, bot2, bot3];
        const botsJson = JSON.stringify(bots);
        localStorage.setItem("bots", botsJson)
    }else{
        const restoredBots = JSON.parse(localStorage.getItem('bots')).map(botData => {
            return new Bot(botData.nom, botData.id, botData.avatar, botData.listeMessage, botData.messageSubscribers);
        });
        
        bots=restoredBots;
    }
}

addMessageToBot(botId, message){
    const bot = bots.find(b => b.id === botId);
    if (bot) {
        bot.ajouterMessage(message,bot);
        localStorage.setItem("bots", JSON.stringify(bots))
    }
}
};

