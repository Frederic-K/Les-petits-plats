
/// DOM ///
/// Ingredients ///
const ingredientFilterTag = document.getElementsByClassName("tag__filter--ingredients")[0];
const ingredientFilterTitle = document.getElementsByClassName("filter__ingredients")[0];
const ingredientFilterInput = document.getElementsByClassName("filter__ingredients--input")[0];
const ingredientFilterBtn = document.getElementsByClassName("filter__ingredients--chevron")[0];
const ingredientFilterIconChevronDown = document.getElementsByClassName("filter__ingredients--chevronDown")[0];
const ingredientFilterIconChevronUp = document.getElementsByClassName("filter__ingredients--chevronUp")[0];
const ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0];

/// Listener ///
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

/// Ingredients ///
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
        initIngredientTagFilter()
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

function getIngredientTagFilterDOM(data) {
    console.log('data', data);
    for(const ingredient of data) {
        const ingredientfilterListItem = document.createElement("li")
        ingredientfilterListItem.classList.add("itemsList")
        ingredientfilterListItem.textContent = setUpperCaseFirstChar(ingredient)
        ingredientfilterList.appendChild(ingredientfilterListItem)
    }
};

function displayIngredientTagFilter(data) {
    //console.log('data', data);
    const arrayIngredientsX = [];
    for (let i=0; i < data.length; i++) {
        let ingredients = data[i].ingredients
        //console.log('ingredients', ingredients);
        ingredients.map(({ingredient}) => {
            arrayIngredientsX.push(ingredient)
            //console.log('arrayIngredients', arrayIngredientsX);
        })
    }
    const arrayIngredients = new Set(arrayIngredientsX.sort());
    //console.log('arrayIngredients', arrayIngredients); 
    getIngredientTagFilterDOM(arrayIngredients)
}

async function initIngredientTagFilter() {
    const recipes = await getRecipesData()
    //console.log('recipes', recipes);
    displayIngredientTagFilter(recipes)
};

/// DOM ///
/// Appareils ///
const applianceFilterTag = document.getElementsByClassName("tag__filter--appliances")[0];
const applianceFilterTitle = document.getElementsByClassName("filter__appliances")[0];
const applianceFilterInput = document.getElementsByClassName("filter__appliances--input")[0];
const applianceFilterBtn = document.getElementsByClassName("filter__appliances--chevron")[0];
const applianceFilterIconChevronDown = document.getElementsByClassName("filter__appliances--chevronDown")[0];
const applianceFilterIconChevronUp = document.getElementsByClassName("filter__appliances--chevronUp")[0];
const applianceFilterList = document.getElementsByClassName("filter__appliances--list")[0];

/// Listener ///
applianceFilterBtn.addEventListener("click", () => dropdownAppliances());
applianceFilterBtn.addEventListener("keydown", keyboardDropdowAppliances);

function keyboardDropdowAppliances(e) {
    if (e.key === "Enter") {
        dropdownAppliances()
    } else if (e.key === "Escape") {
        dropdownAppliances()
        console.log('e.key', e.key)
    }
};

/// Appareils ///
function dropdownAppliances() {
    applianceFilterTitle.classList.toggle("hidden")
    applianceFilterInput.classList.toggle("hidden")
    applianceFilterIconChevronDown.classList.toggle("hidden")
    applianceFilterIconChevronUp.classList.toggle("hidden")
    const isApplianceFilterInputHidden = applianceFilterInput.classList.contains("hidden")
    if (!isApplianceFilterInputHidden) {
        applianceFilterTag.setAttribute("aria-expanded", "true")
        applianceFilterTag.classList.remove("width-small")
        applianceFilterTag.classList.add("width-large")
        applianceFilterList.classList.remove("hidden")
        applianceFilterList.classList.add("display-flex")
        //initIngredientTagFilter()
    } else {
        applianceFilterTag.setAttribute("aria-expanded", "false")
        applianceFilterTag.classList.remove("width-large")
        applianceFilterTag.classList.add("width-small")
        applianceFilterList.classList.add("hidden")
        applianceFilterList.classList.remove("display-flex")
    }
};

/// DOM ///
/// Ustensiles ///
const ustensilFilterTag = document.getElementsByClassName("tag__filter--ustensils")[0];
const ustensilFilterTitle = document.getElementsByClassName("filter__ustensils")[0];
const ustensilFilterInput = document.getElementsByClassName("filter__ustensils--input")[0];
const ustensilFilterBtn = document.getElementsByClassName("filter__ustensils--chevron")[0];
const ustensilFilterIconChevronDown = document.getElementsByClassName("filter__ustensils--chevronDown")[0];
const ustensilFilterIconChevronUp = document.getElementsByClassName("filter__ustensils--chevronUp")[0];
const ustensilFilterList = document.getElementsByClassName("filter__ustensils--list")[0];

/// Listener ///
ustensilFilterBtn.addEventListener("click", () => dropdownUstensils());
ustensilFilterBtn.addEventListener("keydown", keyboardDropdowUstensils);

function keyboardDropdowUstensils(e) {
    if (e.key === "Enter") {
        dropdownUstensils()
    } else if (e.key === "Escape") {
        dropdownUstensils()
        console.log('e.key', e.key)
    }
};

/// Ustensiles ///
function dropdownUstensils() {
    ustensilFilterTitle.classList.toggle("hidden")
    ustensilFilterInput.classList.toggle("hidden")
    ustensilFilterIconChevronDown.classList.toggle("hidden")
    ustensilFilterIconChevronUp.classList.toggle("hidden")
    const isUstensilFilterInputHidden = ustensilFilterInput.classList.contains("hidden")
    if (!isUstensilFilterInputHidden) {
        ustensilFilterTag.setAttribute("aria-expanded", "true")
        ustensilFilterTag.classList.remove("width-small")
        ustensilFilterTag.classList.add("width-large")
        ustensilFilterList.classList.remove("hidden")
        ustensilFilterList.classList.add("display-flex")
        //initIngredientTagFilter()
    } else {
        ustensilFilterTag.setAttribute("aria-expanded", "false")
        ustensilFilterTag.classList.remove("width-large")
        ustensilFilterTag.classList.add("width-small")
        ustensilFilterList.classList.add("hidden")
        ustensilFilterList.classList.remove("display-flex")
    }
};
