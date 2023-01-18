
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
};

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
        displayTagFilter()
    } else {
        ingredientFilterTag.setAttribute("aria-expanded", "false")
        ingredientFilterTag.classList.remove("width-large")
        ingredientFilterTag.classList.add("width-small")
        ingredientfilterList.classList.add("hidden")
        ingredientfilterList.classList.remove("display-flex")
    }
};

/// https://www.delftstack.com/howto/javascript/how-to-capitalize-the-first-letter-of-a-string-in-javascript/ ///

function setUpperCaseFirstChar(string) {
    return string && string[0].toUpperCase() + string.slice(1);
};

function getTagFilterDOM(data) {
    //console.log('data', data);
    const ingredientfilterListItem = document.createElement("li")
    ingredientfilterListItem.classList.add("itemsList")
    ingredientfilterListItem.textContent = setUpperCaseFirstChar(data)
    ingredientfilterList.appendChild(ingredientfilterListItem)
    return (ingredientfilterList)
};

let arrayRecipes = get

function ingredeientTagFilter() {

}


/*function displayIngredientsFilter() {
    recipes.forEach((recipe) => {
        const allIngredients = recipe.ingredients
        //console.log('allIngredients', allIngredients)
        allIngredients.forEach((ingredientType) => { 
            const ingredientX = ingredientType.ingredient
            console.log('ingredientX', ingredientX);
            getTagFilterDOM(ingredientX)
        })
    })
};*/

/*function creatIngredientsTagList(data) {
    console.log('data', data);
    const AllIngredientsArray = [];
    for (let i = 0; i < data.length; i++) {
    let ingredients = data[i].ingredients;
    ingredients.map(({ingredient}) => {
        AllIngredientsArray.push(ingredient);
    });
    };
}

async function initTagFilter() {
    const { recipesData } = await getData()
    //console.log('recipesData', recipesData)
    creatIngredientsTagList(recipesData)
};
initTagFilter()*/

/*const AllIngredientsArray = [];
for (let i = 0; i < recipes.length; i++) {
  let ingredients = recipes[i].ingredients;
  ingredients.map(({ingredient}) => {
    AllIngredientsArray.push(ingredient);
  });
};*/





