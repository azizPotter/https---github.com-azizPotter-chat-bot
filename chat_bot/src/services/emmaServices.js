const subString1 = "age";
const subString2 ="présentation";
const subString3 ="imagine";

export default class EmmaServices {

    async getCommandChoice(choice) {
        if (choice.includes(subString1)) {
            var item = choice.split(':')[1].trim();
            try {
                const age = await this.getAge(item);
                return "Je pense que tu as "+age+" ans.";
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
        } else if (choice.includes(subString2)) {
            return "Je m'appelle Emma et je suis la plus jeune de notre trio, donc je n'ai pas encore de commandes très complexes ou très utiles, mais ça viendra.";
        } else if (choice.includes(subString3)) {
            var person = await this.getRandomPerson();
            if (person) {
                const responseText = `
                    Voici les informations de notre personnage fictif : <br>
                    Prénom : ${person.firstName} <br>
                    Nom : ${person.lastName} <br>
                    Âge : ${person.age} <br>
                    Sexe : ${person.gender === 'male' ? 'Homme' : 'Femme'} <br>
                    Pays : ${person.country} <br>
                    Email : ${person.email}
                `;
                return responseText;
            } else {
                return "Désolé, je n'ai pas pu récupérer les informations du personnage.";
            }
        } else {
            return "Je n'ai pas compris votre commande.";
        }
    }

    async getAge(item) {
        const url = `https://api.agify.io?name=${item}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();  
            return data.age;
        } catch (error) {
            console.error('Error in getAge:', error);
            throw error; 
        }
    }

    async getRandomPerson() {
        const url = `https://randomuser.me/api/`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            const person = data.results && data.results[0];
    
            if (person) {
                const { first, last } = person.name;
                const age = person.dob.age;
                const gender = person.gender;
                const country = person.location.country;
                const email = person.email;
    
                return {
                    firstName: first,
                    lastName: last,
                    age: age,
                    gender: gender,
                    country: country,
                    email: email
                };
            } else {
                throw new Error('No person data found');
            }
        } catch (error) {
            console.error('Error in getRandomPerson:', error);
            throw error; 
        }
    }
}