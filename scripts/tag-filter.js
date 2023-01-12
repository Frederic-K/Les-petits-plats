
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
        ingredientfilterList.classList.remove("hidden")
        ingredientfilterList.classList.add("display-flex")
    } else {
        ingredientFilterTag.setAttribute("aria-expanded", "false")
        ingredientfilterList.classList.add("hidden")
        ingredientfilterList.classList.remove("display-flex")
    }
}
