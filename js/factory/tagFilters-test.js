
/// https://www.delftstack.com/howto/javascript/how-to-capitalize-the-first-letter-of-a-string-in-javascript/ ///
function setUpperCaseFirstChar(string) {
    return string && string[0].toUpperCase() + string.slice(1);
};

/// DOM /// 
const ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0];
const ingredientFilterBtn = document.getElementsByClassName("filter__ingredients--chevron")[0];
const applianceFilterList = document.getElementsByClassName("filter__appliances--list")[0];
const ustensilFilterList = document.getElementsByClassName("filter__ustensils--list")[0];

/// Array ///
let arrayAllIngredients = [];
let arrayAllAppliances = [];
let arrayAllUstensils = [];

let arrayAllRecipes = [];

/// Data ///
async function getallRecipes() {
    arrayAllRecipes = await getRecipesData()
    return arrayAllRecipes
};

/// Listener ///
ingredientFilterBtn.addEventListener("click", () => filterTagDropdownMenu(arrayIngredients, ingredientfilterList));

/// Ingredients ///
for (let i=0; i < arrayAllRecipes.length; i++) {
    let ingredients = arrayAllRecipes[i].ingredients
    //console.log('ingredients', ingredients);
    ingredients.map(({ingredient}) => {
        arrayAllIngredients.push(ingredient)
        //console.log('arrayIngredients', arrayAllIngredients);
    })
};
const arrayIngredients = new Set(arrayAllIngredients.sort());

/// Appareils ///
for (let i=0; i < arrayAllRecipes.length; i++) {
    let appliances = arrayAllRecipes[i].appliance
    //console.log('appliances', appliances);
    arrayAllAppliances.push(appliances)
};
const arrayAppliances = new Set(arrayAllAppliances.sort());

/// Ustenciles ///
for (let i=0; i < arrayAllRecipes.length; i++) {
    for (let x = 0; x < arrayAllRecipes[i].ustensils.length; x++) {
    let ustensils = arrayAllRecipes[i].ustensils[x]
    console.log('ustensils', ustensils);
    arrayAllUstensils.push(ustensils)
    }
};
const arrayUstensils = new Set(arrayAllUstensils.sort());

/// Dropdown Menu ///
function filterTagDropdownMenu(array, container) {
    //let container = ""
    for (items of array) {
        container.innerHTML += `
        <li class"itemsList" tabindex="0" onclick="displaySelectedFilter(event)">${setUpperCaseFirstChar(items)}
        `
    }
};

// filterTagDropdownMenu(arrayIngredients, ingredientfilterList);
// filterTagDropdownMenu(arrayAppliances, applianceFilterList);
// filterTagDropdownMenu(arrayUstensils, ustensilFilterList);