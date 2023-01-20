
class RecipeCard {
    constructor(data) {
        console.log('dataFromRecipeCard', data);
        this.name = data.name;
        this.time = data.time;
        this.ingredients = data.ingredients;
        console.log('this.ingredients', this.ingredients);
        this.description = data.description;

        //this.createCard = (e) => this._createCard(e);

        this._createCard();
    }


    _createCard() {
        this.recipeCardContent = `
        <article class="recipe__card" aria-label="${this.name}">
            <div class="recipe__card--imgContainer">
            <img src="https://picsum.photos/200/300" alt="${this.name}" class="recipe__card--img" aria-label="${this.name}">
            </div>
            <div class="recipe__card--description">
                <div class="recipe__card--header">
                    <h2 class="recipe__card--title">${this.name}</h2>
                    <div class="recipe__card--time">
                        <span class="recipe__card--timeIcon fa-regular fa-clock" aria-label="Icone temps de cuisson"></span>
                        <span class="recipe__card--cookingTime">${this.time} min</span>
                    </div>
                </div>
                <div class="recipe__card--explanation">
                    <p class="recipe__card--ingredients">
                        <div class="recipe__card--ingredientX">
                            ${getIngredientRecipeCardDOM(this.ingredients).join("")}
                        </div>    
                    </p>
                    <p class="recipe__card--cookingDescription">${this.description}</p>
                </div>
            </div>
        </article>    
        `
    }
}

function getIngredientRecipeCardDOM(data) {
    let arrayIngredients = []  
    for (let i = 0; i < data.length; i++) {
        console.log('data.length', data.length);
        let ingredients = data[i];
        console.log('ingredients', ingredients);
        let ingredientSection = `
            <span>${ingredients.ingredient ? ingredients.ingredient : ""}</span>
            <span>${ingredients.quantity ? ingredients.quantity : ""}  ${ingredients.unit ? ingredients.unit : ""}</span>
            </br>
        `
        arrayIngredients.push(ingredientSection);
    }    
    return (arrayIngredients);
};


function displayRecipeCard(data) {
    let recipeCard = ""
    const cardSection = document.getElementsByClassName("recipes__section")[0];
    for (const recipe of data) {        
        getIngredientRecipeCardDOM(recipe)
        recipeCard += new RecipeCard(recipe).recipeCardContent
    }
    cardSection.innerHTML = recipeCard
};

async function displayAllRecipeCard() {
    const recipes = await getRecipesData()
    displayRecipeCard(recipes)
};

displayAllRecipeCard();