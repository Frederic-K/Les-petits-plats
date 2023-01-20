
// class RecipeCard {
//     constructor(data) {
//         //console.log('dataFromRecipeCard', data);
//         this.name = data.name;
//         this.time = data.time;
//         this.ingredients = data.ingredients;
//         //console.log('this.ingredients', this.ingredients);
//         this.description = data.description;

//         //this.createCard = (e) => this._createCard(e)
//         this._createCard();
//     }


//     _createCard() {
//         this.recipeCardContent = `
//         <article class="recipe__card" aria-label="${this.name}">
//             <div class="recipe__card--imgContainer">
//             <img src="https://picsum.photos/200/300" alt="${this.name}" class="recipe__card--img" aria-label="${this.name}">
//             </div>
//             <div class="recipe__card--description">
//                 <div class="recipe__card--header">
//                     <h2 class="recipe__card--title">${this.name}</h2>
//                     <div class="recipe__card--time">
//                         <span class="recipe__card--timeIcon fa-regular fa-clock" aria-label="Icone temps de cuisson"></span>
//                         <span class="recipe__card--cookingTime">${this.time} min</span>
//                     </div>
//                 </div>
//                 <div class="recipe__card--explanation">
//                     <div class"recipe__card--ingredients"> `
//         for (let i=0; i < this.ingredients.length; i++) {;
//             this.eachIngredient = this.ingredients[i]
//                 this.recipeCardContent += `                      
//                         <div class="recipe__card--ingredient">
//                             <div>${this.eachIngredient.ingredient}</div>
//                             <div>${this.eachIngredient.quantity ? this.eachIngredient.quantity : ""}  ${this.eachIngredient.unit ? this.eachIngredient.unit : ""}</div></br>
//                         </div>`    
//         }  
//         this.recipeCardContent += `
//                     </div>               
//                     <p class="recipe__card--cookingDescription">${this.description}</p>
//                 </div>
//             </div>
//         </article>`
//     }
// }

// function displayRecipeCard(data) {
//     let recipeCard = ""
//     const cardSection = document.getElementsByClassName("recipes__section")[0];
//     for (const recipe of data) {        
//         recipeCard += new RecipeCard(recipe).recipeCardContent
//     }
//     cardSection.innerHTML = recipeCard
// };

// async function displayAllRecipeCard() {
//     const recipes = await getRecipesData()
//     displayRecipeCard(recipes)
// };

// displayAllRecipeCard();



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
                        ${getIngredientRecipeCardDOM(this.ingredients).join("")}  
                    </p>
                    <p class="recipe__card--cookingDescription">${this.description}</p>
                </div>
            </div>
        </article>    
        `
    };
};



function getIngredientRecipeCardDOM(data) {
    console.log('dataFromGetIngREcipeDArdDom', data);
    let arrayIngredients = []  
    for (let i = 0; i < data.length; i++) {
        console.log('data.length', data.length);
        let ingredients = data[i];
        console.log('ingredientData(i)', ingredients);
        let ingredientSection = `
            <span class="bold">${ingredients.ingredient ? ingredients.ingredient : ""} : </span> <span>${ingredients.quantity ? ingredients.quantity : ""}  ${ingredients.unit ? ingredients.unit : ""}</span>
            </br>
        `
        arrayIngredients.push(ingredientSection);
    } 
    console.log('arrayIngredients', arrayIngredients);   
    return (arrayIngredients);
};


function displayRecipeCard(data) {
    let recipeCard = ""
    const cardSection = document.getElementsByClassName("recipes__section")[0];
    for (const recipe of data) {        
        recipeCard += new RecipeCard(recipe).recipeCardContent
    }
    cardSection.innerHTML = recipeCard
};

async function displayAllRecipeCard() {
    const recipes = await getRecipesData()
    displayRecipeCard(recipes)
};

displayAllRecipeCard();