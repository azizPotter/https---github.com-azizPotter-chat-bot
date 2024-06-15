import Message from '../models/message.js';

export default class Bot {
    constructor(nom, id, avatar, listeMessage) {
        this.nom = nom;
        this.id = id;
        this.avatar=avatar;
        this.listeMessage = listeMessage;
        this.messageSubscribers = [];
    }

    ajouterMessage(message) {
        if (!(message instanceof Message)) {
            throw new Error('Le paramètre doit être une instance de la classe Message.');
        }
        this.listeMessage.push(message);
        this.notifySubscribers();
    }

    getMessages() {
        return this.listeMessage.slice().sort((msg1, msg2) => msg1.date - msg2.date);
    }

    subscribeToMessages(callback) {
        this.messageSubscribers.push(callback);
    }

    notifySubscribers() {
        this.messageSubscribers.forEach(callback => callback());
    }
}