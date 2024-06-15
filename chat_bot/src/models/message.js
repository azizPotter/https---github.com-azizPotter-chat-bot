// Définition de la classe User
export default class Message {
    constructor(texte, id, byUser) {
        this.texte = texte;
        this.id = id;
        this.byUser=byUser;
        this.date = new Date();
    }
}
