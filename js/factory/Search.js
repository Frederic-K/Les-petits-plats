/// Import ///
import RecipeCard from "./RecipeCard.js";
// import MenuTagFilter from "./MenuTagFilter.js";

/// Class ///
export default class Search {
    constructor(data) {
        // console.log('search', data);

        /// DOM ///
        this.mainSearchBarFilter = document.getElementsByClassName("main__searchbar--input")[0];
        this.mainSearchBarFilterBtn = document.getElementsByClassName("main__searchbar--icon")[0];

        this.filterIngredients = document.getElementById("filterIngredients");
        this.filterAppliances = document.getElementById("filterAppliances");
        this.filterUstensils = document.getElementById("filterUstensils");
        this.displayFilterMenuBtns = document.querySelectorAll(".filter__header--chevronDown");
        this.hideFilterMenuBtns = document.querySelectorAll(".filter__header--chevronUp");

        this.tagFilterParking = document.getElementsByClassName("tag__parking")[0];
        this.ingredientsFilterList = document.getElementsByClassName("tag__filter--list")[0];
        this.appliancesFilterList = document.getElementsByClassName("tag__filter--list")[1];
        this.ustensilsFilterList = document.getElementsByClassName("tag__filter--list")[2];

        this.cardSection = document.getElementsByClassName("recipes__section")[0];

        /// Data ///
        this.arrayAllRecipes = data;
        this.arrayActiveFilters = [];
        this.arrayIngredients = [];
        this.arrayAllIngredients = []; 
        this.arrayAppliances = [];
        this.arrayAllAppliances = [];
        this.arrayUstensils = [];
        this.arrayAllUstensils = [];
        this.arrayFilteredRecipes = [];
        this.historySearch = [];

        /// Mes function ///
        this._setUpperCaseFirstChar();
        this._initIngredientsFilterList(this.arrayAllRecipes);
        this._initAppliancesFilterList(this.arrayAllRecipes);
        this._initUstensilsFilterList(this.arrayAllRecipes);
        this._initDisplayRecipeCard(this.arrayAllRecipes);
        // this._initDisplayTagFilter(this.arrayAllRecipes);
        
        this.processChanges = this._debounce(() => this._saveMainSearchBarrInput());
  
        /// Listener ///
        this.bindEvent();
    };

    bindEvent() {
        this.mainSearchBarFilter.addEventListener("keyup", this.processChanges)

        this.mainSearchBarFilterBtn.addEventListener("click", () => {
            //this._recipesFiltering()
            console.log('test loupe recherche');
        })
        if (this.displayFilterMenuBtns.length > 0) {
            for (this.displayFilterMenuBtn of this.displayFilterMenuBtns) {
                this.displayFilterMenuBtn.addEventListener("click", (e) => {
                    this._displayDropdownFilterMenu(e)
                })
            }
        }
        if (this.hideFilterMenuBtns.length > 0) {
            for (this.hideFilterMenuBtn of this.hideFilterMenuBtns) {
                this.hideFilterMenuBtn.addEventListener("click", (e) => {
                    this._hideDropdownFilterMenu(e)
                })
            }
        }
    };

    _initDisplayRecipeCard(data) {
        this._displayRecipeCard(data)
    };
    
    _displayRecipeCard(data) {
        // console.log('recipeCardData', data);
        let recipeCard = ""
        for (const recipe of data) {
            recipeCard += new RecipeCard(recipe).recipeCardContent
        }
        this.cardSection.innerHTML = recipeCard
    };

    _setUpperCaseFirstChar(string) {
        return string && string[0].toUpperCase() + string.slice(1);
    };

    _initIngredientsFilterList(data) {
        //console.log('displayIngredientsFilterList-data', data);
        for (let i=0; i < data.length; i++) {
            this.ingredients = data[i].ingredients
            this.ingredients.map(({ingredient}) => {
                this.arrayAllIngredients.push(ingredient)
            })
        }
        this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
        //this._getFilterDOM(this.arrayIngredients)
    };

    _initAppliancesFilterList(data) {
        for (let i=0; i < data.length; i++) {
            this.appliance = data[i].appliance
            this.arrayAllAppliances.push(this.appliance)
        }
        this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
        //this._getFilterDOM(this.arrayAppliances)
    };

    _initUstensilsFilterList(data) {
        for (let i=0; i < data.length; i++) {
            for (let x=0; x < data[i].ustensils.length; x++) {
                this.ustensil = data[i].ustensils[x]
                this.arrayAllUstensils.push(this.ustensil)
            }
        }
        this.arrayUstensils = new Set(this.arrayAllUstensils.sort())
        //this._getFilterDOM(this.arrayUstensils)
    };

    /// Menu déroulant des filtres ///
    /// Afficher les menus ///
    _displayDropdownFilterMenu(e) {
        // console.log('e', e.target.parentElement.id);
        // console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);
        this.displayMenuBtn = e.target.parentElement.id;
        if (this.displayMenuBtn === "displayIndgredientsBtn") {
            this.filterIngredients.classList.add("active", "width-large");
            this.filterIngredients.classList.remove("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "true");
            this.filterAppliances.classList.remove("active");
            this.filterAppliances.classList.add("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "false");
            this.filterUstensils.classList.remove("active");
            this.filterUstensils.classList.add("width-small");
            this.filterUstensils.setAttribute("aria-expanded", "false"); 
            this._displayFilterList(this.arrayIngredients);

        } else if (this.displayMenuBtn === "displayAppliancesBtn") {
            this.filterAppliances.classList.add("active", "width-large");
            this.filterAppliances.classList.remove("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "true");
            this.filterIngredients.classList.remove("active");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "false");
            this.filterUstensils.classList.remove("active");
            this.filterUstensils.classList.add("width-small");
            this.filterUstensils.setAttribute("aria-expanded", "false");
            this._displayFilterList(this.arrayAppliances);

        } else if (this.displayMenuBtn === "displayUstensilsBtn") {
            this.filterUstensils.classList.add("active", "width-large");
            this.filterUstensils.classList.remove("width-small");
            this.filterUstensils.setAttribute("aria-expanded", "true");
            this.filterIngredients.classList.remove("active");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "false");
            this.filterAppliances.classList.remove("active");
            this.filterAppliances.classList.add("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "false"); 
            this._displayFilterList(this.arrayUstensils);
        }
    };

    /// Cacher les menus ///
    _hideDropdownFilterMenu(e) {
        this.hideMenuBtn = e.target.parentElement.id;
        if (this.hideMenuBtn === "hideIngredientsBtn") {
            this.filterIngredients.classList.remove("active", "width-large");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expand", "false");

        } else if (this.hideMenuBtn === "hideAppliancesBtn") {
            this.filterAppliances.classList.remove("active", "width-large");
            this.filterAppliances.classList.add("width-small")
            this.filterAppliances.setAttribute("aria-expand", "false");

        } else if (this.hideMenuBtn === "hideUstensilsBtn") {
            this.filterUstensils.classList.remove("active", "width-large");
            this.filterUstensils.classList.add("width-small")
            this.filterUstensils.setAttribute("aria-expand", "false");
        }
    };

    /// Afficher la liste des filtres ///
    _displayFilterList(data) {
        //console.log('getfilterDOM-data', data);
        if (data === this.arrayIngredients) {
            //console.log('toto');
            for (let ingredient of data) {
                this.ingredientFilterListItem = document.createElement("li")
                this.ingredientFilterListItem.classList.add("itemFilter")
                this.ingredientFilterListItem.setAttribute("tabindex", "0")
                this.ingredientFilterListItem.setAttribute("data-filtertype", "filterIngredient")
                this.ingredientFilterListItem.textContent = this._setUpperCaseFirstChar(ingredient)
                this.ingredientsFilterList.appendChild(this.ingredientFilterListItem)
                this.ingredientFilterListItem.addEventListener("click", (e) => {
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayAppliances) {
            //console.log('tata');
            for (let appliance of data) {
                this.applianceFilterListitem = document.createElement("li")
                this.applianceFilterListitem.classList.add("itemFilter")
                this.applianceFilterListitem.setAttribute("tabindex", "0")
                this.applianceFilterListitem.setAttribute("data-filtertype", "filterAppliance")
                this.applianceFilterListitem.textContent = this._setUpperCaseFirstChar(appliance)
                this.appliancesFilterList.appendChild(this.applianceFilterListitem)
                this.applianceFilterListitem.addEventListener("click", (e) => {
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayUstensils) {
            //console.log('this.arrayUstencils', this.arrayUstensils);
            for (let ustensil of data) {
                this.ustensilFilterListItem = document.createElement("li")
                this.ustensilFilterListItem.classList.add("itemFilter")
                this.ustensilFilterListItem.setAttribute("tabindex", "0")
                this.ustensilFilterListItem.setAttribute("data-filtertype", "filterUstensil")
                this.ustensilFilterListItem.textContent = this._setUpperCaseFirstChar(ustensil)
                this.ustensilsFilterList.appendChild(this.ustensilFilterListItem)
                this.ustensilFilterListItem.addEventListener("click", (e) => {
                    this._displaySelectedFilter(e)
                })
            }
        }
    };

    /// Afficher les filtres sélectionnés ///
    _displaySelectedFilter(e) {
        this.filterName = e.target.textContent;
        this.filterType = e.target.dataset.filtertype;
        this.selectedTagContainer = document.createElement("div");
        this.selectedFilterContent = `
            <span class="selectedFilter">${this.filterName}</span>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>   
        `
        this.selectedTagContainer.innerHTML = this.selectedFilterContent
        this.selectedTagContainer.classList.add("tag__parking--items", "display-flex")
        this.selectedTagContainer.setAttribute("aria-label", `${this.filterName}`)
        this.selectedTagContainer.setAttribute("tabindex", "0")
        this.selectedTagContainer.setAttribute("data-filtertype", `${this.filterType}`)

        if (this.filterType === "filterIngredient") {
            this.selectedTagContainer.classList.add("filter__bckground--blue")
        }
        else if (this.filterType === "filterAppliance") {
            this.selectedTagContainer.classList.add("filter__bckground--green")
        }
        else if (this.filterType === "filterUstensil") {
            this.selectedTagContainer.classList.add("filter__bckground--red")
        }
        this.tagFilterParking.appendChild(this.selectedTagContainer)
        this.arrayActiveFilters.push(this.filterName.toLowerCase())
        // console.log('push from tag filter arrayActiveFilters', this.arrayActiveFilters)
        this._filterRecipes(this.arrayActiveFilters)

        this.selectedFilterCloseBtns = document.querySelectorAll(".circleCrossBtn")
        for (this.filterCloseBtn of this.selectedFilterCloseBtns) {
            this.filterCloseBtn.addEventListener("click", (e) => {
                this._deleteSelectedFilter(e)
        })};
    };    
    
    /// Supprimer les filtres sélectionnés ///
    // _deleteSelectedFilter(e) {
    //     //console.log('e.target', e.target);
    //     this.selectedFilter = e.target.parentElement
    //     console.log('this.selectedFilter', this.selectedTFilter);
    //     this.indexSelectedfilter = this.arrayActiveFilters.indexOf(e.target.previousElementSibling.textContent.toLowerCase())
    //     console.log('this.indexSelectedfilter', this.indexSelectedfilter);
    //     this.arrayActiveFilters.splice(this.indexSelectedfilter, 1)
    //     console.log('new arrayActiveFilters', this.arrayActiveFilters);
    //     this.selectedFilter.remove("display-flex")
    // }

    /// Supprimer les filtres sélectionnés ///
    _deleteSelectedFilter(e) {
        // console.log('e.target', e.target);
        this.selectedFilter = e.target.parentElement;
        // console.log('this.selectedFilter', this.selectedFilter);
        this.selectedfilterItem = e.target.previousElementSibling.textContent.toLowerCase();
        this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter !== this.selectedfilterItem);
        console.log('new array active filtre after delete tag', this.arrayActiveFilters);
        this.selectedFilter.remove("display-flex")
        if (this.arrayActiveFilters !== "" || this.arrayActiveFilters !== null) {
            this._filterRecipes(this.arrayActiveFilters)  
        } else {
            this._initDisplayRecipeCard()
        }
    };
   
    // _displaySelectedFilter(e) {
    //     this.filterName = e.target.textContent;
    //     this.tagFilterParking.classList.remove("hidden");
    //     let selectedFilter = new SelectedTagFilter(e)._createFilter(e);
    //     console.log('selectedFilterFromDisplay', this.selectedFilter);
    //     this.tagFilterParking.appendChild(selectedFilter);
    //     this.arrayActiveFilters.push(this.filterName.toLowerCase())
    //     console.log('arrayActiveFilters-afterdisplay', this.arrayActiveFilters);
    // };

    // _deleteSelectedFilter(e) {
    //     //console.log('e.target', e.target);
    //     console.log('arrayActiveFilters-afterremove', this.arrayActiveFilters);
    //     //console.log('Parent.E', e.target.parentElement);
    //     e.preventDefault()
    //     let selectedFilter = e.target.parentElement
    //     console.log('selectedFilterFromDelete', selectedFilter);
    //     this.indexSelectedfilter = this.arrayActiveFilters.indexOf(e.target.textContent.toLowerCase())
    //     //console.log('e.target.textContent.toLowerCase()', e.target.textContent.toLowerCase());
    //     //console.log('indexSelectedfilter', this.indexSelectedfilter);
    //     this.arrayActiveFilters.splice(this.indexSelectedfilter, 1)
    //     //console.log('new arrayActiveFilters', this.arrayActiveFilters);
    //     //this.selectedFilter.remove();
    //     selectedFilter.remove("display-flex")
    //     //this.selectedTagContainer.add("hidden")
    // }; 
    
    /// Recherche ///
    /// Js Debounce ///
    _debounce(func, timeout = 2000){
        let timer;
        return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
        
    _saveMainSearchBarrInput(){
        //console.log('Saving data');
        this.mainSearchBarFilterInput = this.mainSearchBarFilter.value.toLowerCase()
        //console.log('test input', this.mainSearchBarFilterInput);
        // this.arrayActiveFilters.push(this.mainSearchBarFilterInput)
        // console.log('test push array Active Filter', this.arrayActiveFilters);
        if (this.mainSearchBarFilterInput.length > 2 && this.mainSearchBarFilterInput !== this.historySearch[0]) {
            //console.log('reretest');
            this.historySearch.shift()
            this.historySearch.push(this.mainSearchBarFilterInput)
            this.arrayActiveFilters.push(this.mainSearchBarFilterInput)
            this._filterRecipes(this.arrayActiveFilters)
        } else if (this.mainSearchBarFilterInput === null || this.mainSearchBarFilterInput === "") {
            this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter !== this.historySearch[0]);
            this._filterRecipes(this.arrayActiveFilters)
        } else {
            console.log("Simon says : Don't move !");
        }
        //console.log('thisHistorySearch', this.historySearch);
        //console.log('test push array Active Filter', this.arrayActiveFilters);
    }

    _filterRecipes(data) {
        console.log('test lancement fct de filtre des recettes');
        console.log('data', data);
        this.arrayAllRecipes.forEach(recipe => {
            if (recipe.name.toLowerCase().includes(data)) {
                console.log('recipe.name', recipe.name);
                this.arrayFilteredRecipes.push(recipe)
                this._displayRecipeCard(this.arrayFilteredRecipes)
            }
        })
        
        console.log('test filtre recette', this.arrayFilteredRecipes);
    }
};
 /// Js Debounce ///
// const mainSearchBarFilter = document.getElementsByClassName("main__searchbar--input")[0];

// function debounce(func, timeout = 5000){
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
    
//   function saveInput(){
//     console.log('Saving data');
//   }
  
//   const processChanges = debounce(() => saveInput());

//   mainSearchBarFilter.addEventListener("keyup", processChanges)