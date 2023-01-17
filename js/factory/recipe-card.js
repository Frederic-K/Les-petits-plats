
class testRecipeCard {
    constructor(recipes) {
        this.recipes = recipes
        this.name = recipes[0].name
        this.time = recipes[0].time
        this.ingredient = recipes[0].ingredients[0].ingredient
        this.quantity = recipes[0].ingredients[0].quantity
        this.unit = recipes[0].ingredients[0].unit
        this.description = recipes[0].description
        this.wrapper = document.createElement("article")
    }

    get card() {
        return this.createCard()
    }

    createCard() {
        const recipeCardContent = `
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
        this.wrapper.innerHTML = recipeCardContent
        this.wrapper.classList.add("recipe__card")
        this.wrapper.setAttribute("tabindex", "0")
        this.wrapper.setAttribute("aria-label", `${this.name}`)
        return this.wrapper
    }
}

function displayRecipeCard() {
    const cardSection = document.getElementsByClassName("recipes__section")[0]
    const newRecipeCard = new testRecipeCard(recipes)
    const cardRecipe = newRecipeCard.createCard()
    //console.log('cardReceipe', cardRecipe);
    //console.log('card.createCard', newRecipeCard.createCard());
    cardSection.appendChild(cardRecipe);
}

displayRecipeCard()