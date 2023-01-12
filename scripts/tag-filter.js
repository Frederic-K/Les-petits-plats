
/// DOM ///
const ingredientFilterBtn = document.getElementsByClassName("tag__filter--ingredients")[0];
const ingredientFilterTitle = document.getElementsByClassName("filter__ingredients")[0];
const ingredientFilterInput = document.getElementsByClassName("filter__ingredient--input")[0];
const ingredientFilterIconChevronDown = document.getElementsByClassName("filter__ingredients--chevronDown")[0];
const ingredientFilterIconChevronUp = document.getElementsByClassName("filter__ingredients--chevronUp")[0];
const ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0];

/// Dropdown ///

ingredientFilterBtn.addEventListener("click", () => dropdownIngredients());
ingredientFilterBtn.addEventListener("keydonw", () => KeyboardDropdowIngredients());

