
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
        ingredientFilterTag.classList.remove("width-350")
        ingredientFilterTag.classList.add("width-650")
        ingredientfilterList.classList.remove("hidden")
        ingredientfilterList.classList.add("display-flex")
        displayTagFilter()
    } else {
        ingredientFilterTag.setAttribute("aria-expanded", "false")
        ingredientFilterTag.classList.remove("width-650")
        ingredientFilterTag.classList.add("width-350")
        ingredientfilterList.classList.add("hidden")
        ingredientfilterList.classList.remove("display-flex")
    }
}

/*function displayTagFilter() {
    recipes.forEach((recipe) => {
        const allIngredients = recipe.ingredients
        console.log('allIngredients', allIngredients)
        allIngredients.forEach((ingredientType) => { 
            const ingredientX = ingredientType.ingredient
            const arrayIngredients  = []
            arrayIngredients.push(ingredientX)
            console.log('arrayIngredients', arrayIngredients);
            const ingredient = [...new Set(arrayIngredients)]
            console.log('ingredientX', ingredientX);
            console.log('ingredient', ingredient);
            getTagFilterDOM(ingredientX)
        })
    })
}*/


function displayTagFilter() {
    for (const recipe of recipes) {
        const allIngredients = recipe.ingredients
        console.log('allIngredients', allIngredients)
        for (const ingredient of allIngredients) {
            const ingredientX = ingredient.ingredient
            getTagFilterDOM(ingredientX)
        }
    }
}

/*function setUpperCaseFirstChar(a) {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}*/

/// https://www.delftstack.com/howto/javascript/how-to-capitalize-the-first-letter-of-a-string-in-javascript/ ///

function setUpperCaseFirstChar(string) {
    return string && string[0].toUpperCase() + string.slice(1);
}

function getTagFilterDOM(data) {
    console.log('data', data);
    const ingredientfilterListItem = document.createElement("li")
    ingredientfilterListItem.classList.add("itemsTest")
    //ingredientfilterListItem.textContent = setUpperCaseFirstChar(data)
    ingredientfilterListItem.textContent = setUpperCaseFirstChar(data)
    ingredientfilterList.appendChild(ingredientfilterListItem)
    return (ingredientfilterList)
}




