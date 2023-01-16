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

/*class RecipeCard {
    constructor(recipes) {
        this.recipes = recipes
        this.$wrapper = document.createElement("article")
        this.$wrapper.classList.add("recipe__card")
        this.recipesSection = document.getElementsByClassName("recipes__section")[0]
    }

    get Card() {
        return this.createRecipeCard()
    }

    createRecipeCard() {
        const recipeCard = `
            <div class="recipe__card--imgContainer">
            <img src="https://picsum.photos/id/292/200/300" alt="Photo de la rectte" class="recipe__card--img" aria-label="Photo de la rectte">
        </div>
        <div class="recipe__card--description">
            <div class="recipe__card--header">
                <h2 class="recipe__card--title">Poisson Cru à la tahitienne</h2>
                <div class="recipe__card--time">
                    <span class="recipe__card--timeIcon fa-regular fa-clock" aria-label="Icone temps de cuisson"></span>
                    <span class="recipe__card--cookingTime">60 min</span>
                </div>
            </div>
            <div class="recipe__card--explanation">
                <p class="recipe__card--ingredients">
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                    <span class="recipe__card--ingredientX">Thon Rouge (ou blanc) :</span>
                </p>
                <p class="recipe__card--cookingDescription">Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouvez ajouter 1 à 2 cuillères à soupe de Crème de coco</p>
            </div>
        </div>
        `

        this.$wrapper.innerHTML = recipeCard
        this.recipesSection.appendChild.this.$wrapper

        return this.$wrapper
    }
}*/

//const newRecipeCard = new RecipeCard(recipes)
//console.log('newRecipeCard', newRecipeCard);

class testRecipeCard {
    constructor(recipes) {
        this.recipes = recipes
        this.id = recipes[0].id
        this.name = recipes[0].name
        this.ingredient = recipes[0].ingredients[0].ingredient
        this.cardSection = document.getElementsByClassName("recipes__section")[0]
        this.wrapper = document.createElement("article")
    }

    get card() {
        return this.createCard()
    }

    createCard() {
        const recipeCardContent = `
        <h1>${title}</h1>
        <p>${name} - <span>${date}</span></p>
        `
        this.wrapper.innerHTML = recipeCardContent
        return this.wrapper
    }
}

function displayRecipeCard() {
    const card = new testRecipeCard(recipes)
    console.log('card', card);
    console.log('card.createCard', card.createCard);
}

displayRecipeCard()