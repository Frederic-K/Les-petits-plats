/* eslint-disable require-jsdoc, max-len*/
// / Class ///
export default class RecipeCard {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.time = data.time;
    this.ingredients = data.ingredients;
    this.description = data.description;
    this._createCard();
  };
  _createCard() {
    this.recipeCardContent = `
        <article class="recipe__card" data-index="${this.id}">
            <div class="recipe__card--imgContainer">
            <img src="https://picsum.photos/200/300" alt="${this.name}" class="recipe__card--img">
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
                        ${this._getIngredientRecipeCardDOM(this.ingredients).join('')}  
                    </p>
                    <p class="recipe__card--cookingDescription">${this.description}</p>
                </div>
            </div>
        </article>    
        `;
  };
  _getIngredientRecipeCardDOM(data) {
    // console.log('dataFromGetIngREcipeDArdDom', data);
    const arrayIngredients = [];
    for (let i = 0; i < data.length; i++) {
      // console.log('data.length', data.length);
      const ingredients = data[i];
      // console.log('ingredientData(i)', ingredients);
      const ingredientSection = `
                <span class="bold">${ingredients.ingredient ? ingredients.ingredient : ''} : </span> <span>${ingredients.quantity ? ingredients.quantity : ''}  ${ingredients.unit ? ingredients.unit : ''}</span>
                </br>
            `;
      arrayIngredients.push(ingredientSection);
    }
    // console.log('arrayIngredients', arrayIngredients);
    return (arrayIngredients);

    // let i = 0
    // let arrayIngredients = []
    // data.forEach(ingredients => {
    //     ingredients = data[i]
    //     let ingredientSection = `
    //     <span class="bold">${ingredients.ingredient ? ingredients.ingredient : ""} : </span> <span>${ingredients.quantity ? ingredients.quantity : ""}  ${ingredients.unit ? ingredients.unit : ""}</span>
    //     </br>
    // `
    // arrayIngredients.push(ingredientSection);
    // i++
    // });
    // return (arrayIngredients);
  };
};

