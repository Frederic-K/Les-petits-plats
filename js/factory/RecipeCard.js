
class RecipeCard {
    constructor(data) {
        this.wrapper = document.createElement("article")
        this.name = data.name
        this.time = data.time
        // this.ingredient = recipes[0].ingredients[0].ingredient
        // this.quantity = recipes[0].ingredients[0].quantity
        // this.unit = recipes[0].ingredients[0].unit
        this.description = data.description

        //this._createCard = (e) => this._createCard;
    }


    _createCard() {
        this.recipeCardContent = `
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
                <span class="recipe__card--ingredientX">${this.ingredient} : ${this.quantity} ${this.unit}</span>
            </p>
            <p class="recipe__card--cookingDescription">${this.description}</p>
        </div>
    </div>
        `
        this.wrapper.innerHTML = this.recipeCardContent
        this.wrapper.classList.add("recipe__card")
        this.wrapper.setAttribute("tabindex", "0")
        this.wrapper.setAttribute("aria-label", `${this.name}`)
        return this.wrapper
    }
}

// async function displayRecipeCard() {
//     const cardSection = document.getElementsByClassName("recipes__section")[0];
//     const recipes = await getRecipesData()
//     for (const recipe of recipes) {
//         const newRecipeCard = new RecipeCard(recipe)
//         const recipeCard = newRecipeCard._createCard()
//         cardSection.appendChild(recipeCard)
//     }
// }
// displayRecipeCard()

function displayRecipeCard(data) {
    const cardSection = document.getElementsByClassName("recipes__section")[0];
    //const recipes = await getRecipesData()
    for (const recipe of data) {
        const newRecipeCard = new RecipeCard(recipe)
        const recipeCard = newRecipeCard._createCard()
        cardSection.appendChild(recipeCard)
    }
};

async function displayAllRecipeCard() {
    const recipes = await getRecipesData()
    displayRecipeCard(recipes)
};

displayAllRecipeCard();