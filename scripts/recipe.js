/*class Recipe {
    constructor(recipes) {
        this.id = recipes.id;
        this.name = recipes.name;
        this.ingredients = recipes.ingredients
    }

    get recipeCardDisplay() {
        return this.getRecipeCardDom()
    }

    getRecipeCardDom() {
        const recipeSection = document.getElementsByClassName("recipeDisplay")[0];
        const recipeCard = document.createElement("article");
        recipeCard.innerHTML = `<h1>${this.name}</h1>
                                <div class="toto">${this.ingredients}</div>`
        recipeSection.appendChild(recipeCard)
        return (recipeSection)                        
    }
}

const card = new Recipe(recipes)

console.log(card)*/

class RecipeCard {
    constructor(recipes) {
        this.recipes = recipes
        this.wrapper = document.getElementsByClassName
    }
}