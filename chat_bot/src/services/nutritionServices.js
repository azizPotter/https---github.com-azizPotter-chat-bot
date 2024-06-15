const subString1 = "recette";
const subString2 ="substitut";
const subString3="découvrir";
export default class NutritionService {

    async getCommandChoice(choice) {
        if (choice.includes(subString1)) {
            var item = choice.split(':')[1].trim();
            try {
                const titles = await this.getRecipeByIngredient(item);
                return "Voici la liste des recettes que j'ai trouvées : <br>" +titles;
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
        }else if (choice.includes(subString2)){
            var item = choice.split(':')[1].trim();
            try {
                const titles = await this.getsubstitutes(item);
                return "Voici la liste des substituts que j'ai trouvés : <br>" +titles;
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
        }else if(choice.includes(subString3)){
            try {
               var result=await this.getRandomRecipe();
               const response = `
               Je vous propose de découvrir cette recette : <br>
               Titre : ${result.title} <br>
               Et voici les ingrédients : <br>
               ${result.ingredients.map(ingredient => `- ${ingredient.amount} ${ingredient.unit} ${ingredient.name}`).join('<br>')}
           `;
                return response;
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
        }else return "Je n'ai pas compris votre commande.";
    }

    async getRandomRecipe() {
        const apiKey = '2e1bfd065cff4c72a7a20105e60245ce';
        const url = `https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&apiKey=${apiKey}`;
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
            const recipe = data.recipes[0];
            const title = recipe.title;    
            const ingredients = recipe.extendedIngredients.map(ingredient => {
                return {
                    name: ingredient.name,
                    amount: ingredient.amount,
                    unit: ingredient.unit
                };
            });
    
            return {
                title: title,
                ingredients: ingredients
            };
        } catch (error) {
            console.error('Error in getRecipeByIngredient:', error);
            throw error; 
        }
    }


    async getRecipeByIngredient(item) {
        const apiKey = '2e1bfd065cff4c72a7a20105e60245ce';
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${item}&apiKey=${apiKey}`;
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
            const titles = data.map(recipe => recipe.title);
            return titles;
        } catch (error) {
            console.error('Error in getRecipeByIngredient:', error);
            throw error; 
        }
    }

    async getsubstitutes(item) {
        const apiKey = '2e1bfd065cff4c72a7a20105e60245ce';
        const url = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${item}&apiKey=${apiKey}`;
        console.log(url);
    
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
            console.log(data);
            
           
            return data.substitutes;
            
        } catch (error) {
            console.error('Error in getsubstitutes:', error);
            throw error; 
        }
    }
}