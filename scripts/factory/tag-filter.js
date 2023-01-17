
/// DOM ///
const ingredientFilterTag = document.getElementsByClassName("tag__filter--ingredients")[0];
const ingredientFilterTitle = document.getElementsByClassName("filter__ingredients")[0];
const ingredientFilterInput = document.getElementsByClassName("filter__ingredients--input")[0];
const ingredientFilterBtn = document.getElementsByClassName("filter__ingredients--chevron")[0];
const ingredientFilterIconChevronDown = document.getElementsByClassName("filter__ingredients--chevronDown")[0];
const ingredientFilterIconChevronUp = document.getElementsByClassName("filter__ingredients--chevronUp")[0];
const ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0];

/// Dropdown ///
ingredientFilterBtn.addEventListener("click", () => dropdownIngredients());
ingredientFilterBtn.addEventListener("keydown", KeyboardDropdowIngredients);

function KeyboardDropdowIngredients(e) {
    if (e.key === "Enter") {
        dropdownIngredients()
    } else if (e.key === "Escape") {
        dropdownIngredients()
        console.log('e.key', e.key)
    }
}

function dropdownIngredients() {
    ingredientFilterTitle.classList.toggle("hidden")
    ingredientFilterInput.classList.toggle("hidden")
    ingredientFilterIconChevronDown.classList.toggle("hidden")
    ingredientFilterIconChevronUp.classList.toggle("hidden")
    const isIngredientFilterInputHidden = ingredientFilterInput.classList.contains("hidden")
    if (!isIngredientFilterInputHidden) {
        ingredientFilterTag.setAttribute("aria-expanded", "true")
        ingredientFilterTag.classList.remove("width-small")
        ingredientFilterTag.classList.add("width-large")
        ingredientfilterList.classList.remove("hidden")
        ingredientfilterList.classList.add("display-flex")
        tagFilter()
    } else {
        ingredientFilterTag.setAttribute("aria-expanded", "false")
        ingredientFilterTag.classList.remove("width-large")
        ingredientFilterTag.classList.add("width-small")
        ingredientfilterList.classList.add("hidden")
        ingredientfilterList.classList.remove("display-flex")
    }
}
///////////////////////////////////////////////////////////////////////////////
/*
function tagFilter() {
    recipes.forEach((recipe) => {
        const allIngredients = recipe.ingredients
        //console.log('allIngredients', allIngredients)
        allIngredients.forEach((ingredientType) => { 
            const ingredientX = ingredientType.ingredient
            //console.log('ingredientX', ingredientX);            
            console.log('this.ingredient', this.ingredient);
            getTagFilterDOM(ingredientX)
        })
    })
}

/// https://www.delftstack.com/howto/javascript/how-to-capitalize-the-first-letter-of-a-string-in-javascript/ ///

function setUpperCaseFirstChar(string) {
    return string && string[0].toUpperCase() + string.slice(1);
}

function getTagFilterDOM(data) {
    //console.log('data', data);
    const ingredientfilterListItem = document.createElement("li")
    ingredientfilterListItem.classList.add("itemsList")
    ingredientfilterListItem.textContent = setUpperCaseFirstChar(data)
    ingredientfilterList.appendChild(ingredientfilterListItem)
    return (ingredientfilterList)
}
*/
///////////////////////////////////////////////////////////////////////////////////////


/*let arrayIngredients = [];
let ingredientX = [];

function displayTagFilter() {
    for (const recipe of recipes) {
        const allIngredients = recipe.ingredients
        console.log('allIngredients', allIngredients)
        for (const ingredients of allIngredients) {
            //console.log('ingredients', ingredients);
            ingredientX = ingredients.ingredient
            //console.log('ingredientX', ingredientX);
            //arrayIngredients.push(ingredientX)
            //console.log('arrayIngredients', arrayIngredients);
            //finalArrayIngredients = [...new Set(arrayIngredients)].sort();
            //console.log('finalArrayIngredients', finalArrayIngredients);
            for (const ingredient of finalArrayIngredients) {
                //console.log('ingredient', ingredient);
                getTagFilterDOM(ingredient)
            }
        }
    }
}*/

let recipe = [];
let ingredientArray = [];

function recipeFilter() {
    for (let i = 0; i < recipes.length; i++) {
        recipe = recipes[i]
        console.log('recipe', recipe);
        for (let i = 0; i < recipe.ingredients; i++ ) {
            const ingredients = recipe.ingredients[i]
            console.log('test', ingredients);
        }
    }
}
recipeFilter()

console.log('accesTestRecipePart', recipe.ingredients[0].ingredient);

class TagFilter {
    constructor(ingredient) {
        this.ingredient = ingredient
        this.ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0]
        this.wrapper = document.createElement("li")
    }

    get filter() {
        return this.creatTagFilter()
    }

    creatTagFilter() {
        const tagFilter = `${this.ingredient}`
        this.wrapper.innerHTML = setUpperCaseFirstChar(tagFilter)
        this.wrapper.classList.add("itemsList")
        return this.wrapper
    }
}

function displayTagFilter() {
    const newTagFilter = new TagFilter(ingredient)
    const newTag = newTagFilter.creatTagFilter()
    ingredientfilterList.appendChild(newTag)
}



