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

        this.searchMessage = document.getElementsByClassName("search__message")[0];

        this.cardSection = document.getElementsByClassName("recipes__section")[0];

        /// Data ///
        this.arrayAllRecipes = data;
        this.arrayRecipes = [];
        this.arrayActiveFilters = [];
        this.arrayIngredients = [];
        this.arrayAllIngredients = []; 
        this.arrayAppliances = [];
        this.arrayAllAppliances = [];
        this.arrayUstensils = [];
        this.arrayAllUstensils = [];
        this.arrayFilteredRecipes = [];
        this.historySearch = [];
        this.lastMainSearchInput = [];

        /// Mes function ///
        this._initDisplay()

        //this._mainSearch();

        this.processChanges = this._debounce(() => this._mainSearch());
  
        /// Listener ///
        this.bindEvent();
    };

    bindEvent() {
        this.mainSearchBarFilter.addEventListener("keyup", this.processChanges)

        if (this.displayFilterMenuBtns.length > 0) {
            for (this.displayFilterMenuBtn of this.displayFilterMenuBtns) {
                this.displayFilterMenuBtn.addEventListener("click", (e) => {
                    this.displayMenuBtn = e.target.parentElement.id;
                    if (this.displayMenuBtn === "displayIndgredientsBtn") {
                        this._switchListFilter("ingredients", "display")
                    } else if (this.displayMenuBtn === "displayAppliancesBtn") {
                        this._switchListFilter("appliances", "display")
                    } else if (this.displayMenuBtn === "displayUstensilsBtn") {
                        this._switchListFilter("ustensils", "display")
                    }
                })
            }
        }
        if (this.hideFilterMenuBtns.length > 0) {
            for (this.hideFilterMenuBtn of this.hideFilterMenuBtns) {                
                this.hideFilterMenuBtn.addEventListener("click", (e) => {
                    this.hideFilterMenuBtn = e.target.parentElement.id;
                    if (this.hideFilterMenuBtn === "hideIngredientsBtn") {
                        this._switchListFilter("ingredients", "hide")
                    } else if (this.hideFilterMenuBtn === "hideAppliancesBtn") {
                        this._switchListFilter("appliances", "hide")
                    } else if (this.hideFilterMenuBtn === "hideUstensilsBtn") {
                        this._switchListFilter("ustensils", "hide")
                    }
                })
            }
        } 
        // if (this.displayFilterMenuBtns.length > 0) {
        //     for (this.displayFilterMenuBtn of this.displayFilterMenuBtns) {
        //         this.displayFilterMenuBtn.addEventListener("click", (e) => {
        //             this._displayDropdownFilterMenu(e)
        //         })
        //     }
        // }
        // if (this.hideFilterMenuBtns.length > 0) {
        //     for (this.hideFilterMenuBtn of this.hideFilterMenuBtns) {
        //         this.hideFilterMenuBtn.addEventListener("click", (e) => {
        //             this._hideDropdownFilterMenu(e)
        //         })
        //     }
        // }
    };

    // _initDisplay() {
    //     console.log('titi', this.arrayFilteredRecipes);
    //     if (this.arrayFilteredRecipes.length === 0){
    //         //console.log('toto');
    //         this.arrayFilteredRecipes = this.arrayRecipes
    //         console.log('tutu', this.arrayFilteredRecipes);
    //         this._displayRecipeCard()
    //         this._setIngredientsFilterList();
    //         this._setAppliancesFilterList();
    //         this._setUstensilsFilterList();
    //         // this.arrayFilteredRecipes = [];
    //         // console.log('banana', this.arrayFilteredRecipes);
    //     } else {
    //         this.arrayFilteredRecipes = this.arrayFilteredRecipes
    //     }
    // }   
    
    _initDisplay() {
            this.arrayRecipes = this.arrayAllRecipes
            this.arrayFilteredRecipes = this.arrayAllRecipes
            this._displayRecipeCard()
            this._setIngredientsFilterList();
            this._setAppliancesFilterList();
            this._setUstensilsFilterList();
    }  
   
    _displayRecipeCard() {
        // console.log('recipeCardData', this.arrayFilteredRecipes);
        let recipeCard = ""
        for (const recipe of this.arrayFilteredRecipes) {
            recipeCard += new RecipeCard(recipe).recipeCardContent
        }
        this.cardSection.innerHTML = recipeCard
    };

    _setUpperCaseFirstChar(string) {
        return string && string[0].toUpperCase() + string.slice(1);
    };

    _setIngredientsFilterList() {
        this.arrayAllIngredients = []
        for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
            this.ingredients = this.arrayFilteredRecipes[i].ingredients
            this.ingredients.map(({ingredient}) => {
                this.arrayAllIngredients.push(ingredient)
            })
        }
        this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
    };

    _setAppliancesFilterList() {
        //console.log('arrayFilteredRecipe4SetAppliancesFilterList', this.arrayFilteredRecipes);
        this.arrayAllAppliances = []
        for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
            this.appliance = this.arrayFilteredRecipes[i].appliance
            this.arrayAllAppliances.push(this.appliance)
        }
        this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
        //console.log('this.arrayAppliances4fterSetApplianceFilterList', this.arrayAppliances);
    };

    _setUstensilsFilterList() {
        this.arrayAllUstensils = []
        for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
            for (let x=0; x < this.arrayFilteredRecipes[i].ustensils.length; x++) {
                this.ustensil = this.arrayFilteredRecipes[i].ustensils[x]
                this.arrayAllUstensils.push(this.ustensil)
            }
        }
        this.arrayUstensils = new Set(this.arrayAllUstensils.sort())
    };

    // _initIngredientsFilterList() {
    //     if (this.arrayFilteredRecipes.length === 0) {
    //         this.arrayFilteredRecipes = this.arrayRecipes
    //     }
    //     for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
    //         this.ingredients = this.arrayFilteredRecipes[i].ingredients
    //         this.ingredients.map(({ingredient}) => {
    //             this.arrayAllIngredients.push(ingredient)
    //         })
    //     }
    //     this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
    // };

    // _initAppliancesFilterList(data) {
    //     for (let i=0; i < data.length; i++) {
    //         this.appliance = data[i].appliance
    //         this.arrayAllAppliances.push(this.appliance)
    //     }
    //     this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
    // };

    // _initUstensilsFilterList(data) {
    //     for (let i=0; i < data.length; i++) {
    //         for (let x=0; x < data[i].ustensils.length; x++) {
    //             this.ustensil = data[i].ustensils[x]
    //             this.arrayAllUstensils.push(this.ustensil)
    //         }
    //     }
    //     this.arrayUstensils = new Set(this.arrayAllUstensils.sort())
    // };

    // // Menu déroulant des filtres ///
    // // Afficher les menus ///
    // _displayDropdownFilterMenu(e) {
    //     // console.log('e', e.target.parentElement.id);
    //     // console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);
    //     this.displayMenuBtn = e.target.parentElement.id;
    //     if (this.displayMenuBtn === "displayIndgredientsBtn") {
    //         this.filterIngredients.classList.add("active", "width-large");
    //         this.filterIngredients.classList.remove("width-small");
    //         this.filterIngredients.setAttribute("aria-expanded", "true");
    //         this.filterAppliances.classList.remove("active");
    //         this.filterAppliances.classList.add("width-small");
    //         this.filterAppliances.setAttribute("aria-expanded", "false");
    //         this.filterUstensils.classList.remove("active");
    //         this.filterUstensils.classList.add("width-small");
    //         this.filterUstensils.setAttribute("aria-expanded", "false"); 
    //         this._displayFilterList(this.arrayIngredients);

    //     } else if (this.displayMenuBtn === "displayAppliancesBtn") {
    //         this.filterAppliances.classList.add("active", "width-large");
    //         this.filterAppliances.classList.remove("width-small");
    //         this.filterAppliances.setAttribute("aria-expanded", "true");
    //         this.filterIngredients.classList.remove("active");
    //         this.filterIngredients.classList.add("width-small");
    //         this.filterIngredients.setAttribute("aria-expanded", "false");
    //         this.filterUstensils.classList.remove("active");
    //         this.filterUstensils.classList.add("width-small");
    //         this.filterUstensils.setAttribute("aria-expanded", "false");
    //         this._displayFilterList(this.arrayAppliances);

    //     } else if (this.displayMenuBtn === "displayUstensilsBtn") {
    //         this.filterUstensils.classList.add("active", "width-large");
    //         this.filterUstensils.classList.remove("width-small");
    //         this.filterUstensils.setAttribute("aria-expanded", "true");
    //         this.filterIngredients.classList.remove("active");
    //         this.filterIngredients.classList.add("width-small");
    //         this.filterIngredients.setAttribute("aria-expanded", "false");
    //         this.filterAppliances.classList.remove("active");
    //         this.filterAppliances.classList.add("width-small");
    //         this.filterAppliances.setAttribute("aria-expanded", "false"); 
    //         this._displayFilterList(this.arrayUstensils);
    //     }
    // };

    // /// Cacher les menus ///
    // _hideDropdownFilterMenu(e) {
    //     this.hideMenuBtn = e.target.parentElement.id;
    //     if (this.hideMenuBtn === "hideIngredientsBtn") {
    //         this.filterIngredients.classList.remove("active", "width-large");
    //         this.filterIngredients.classList.add("width-small");
    //         this.filterIngredients.setAttribute("aria-expand", "false");

    //     } else if (this.hideMenuBtn === "hideAppliancesBtn") {
    //         this.filterAppliances.classList.remove("active", "width-large");
    //         this.filterAppliances.classList.add("width-small")
    //         this.filterAppliances.setAttribute("aria-expand", "false");

    //     } else if (this.hideMenuBtn === "hideUstensilsBtn") {
    //         this.filterUstensils.classList.remove("active", "width-large");
    //         this.filterUstensils.classList.add("width-small")
    //         this.filterUstensils.setAttribute("aria-expand", "false");
    //     }
    // };
    _switchListFilter(filter, task) {
        switch (filter) {
            case "ingredients":
                if (task === "display") {
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
                }else if (task === "hide"){
                    this.filterIngredients.classList.remove("active", "width-large");
                    this.filterIngredients.classList.add("width-small");
                    this.filterIngredients.setAttribute("aria-expand", "false");
                }
                break;
            case "appliances":
                if (task === "display") {
                    this.filterAppliances.classList.add("active", "width-large");
                    this.filterAppliances.classList.remove("width-small");
                    this.filterAppliances.setAttribute("aria-expanded", "true");
                    this.filterIngredients.classList.remove("active");
                    this.filterIngredients.classList.add("width-small");
                    this.filterIngredients.setAttribute("aria-expanded", "false");
                    this.filterUstensils.classList.remove("active");
                    this.filterUstensils.classList.add("width-small");
                    this.filterUstensils.setAttribute("aria-expanded", "false");
                    //console.log('arrayAppliance4romSwitchFiltertFct', this.arrayAppliances);
                    this._displayFilterList(this.arrayAppliances)                
                }else if (task === "hide") {
                    this.filterAppliances.classList.remove("active", "width-large");
                    this.filterAppliances.classList.add("width-small")
                    this.filterAppliances.setAttribute("aria-expand", "false");
                }
                break;
            case "ustensils":
                if (task === "display") {
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
                }else if (task === "hide"){
                    this.filterUstensils.classList.remove("active", "width-large");
                    this.filterUstensils.classList.add("width-small")
                    this.filterUstensils.setAttribute("aria-expand", "false");
                }
                break;
        }
    };

    /// Afficher la liste des filtres ///
    _displayFilterList(data) {
        if (data === this.arrayIngredients) {
            //console.log('toto', this.arrayIngredients);
            this.ingredientsFilterList.innerHTML = ""
            for (let ingredient of data) {
                this.ingredientFilterListItem = document.createElement("li")
                this.ingredientFilterListItem.classList.add("itemFilter")
                this.ingredientFilterListItem.setAttribute("tabindex", "0")
                this.ingredientFilterListItem.setAttribute("data-filtertype", "filterIngredient")
                this.ingredientFilterListItem.textContent = this._setUpperCaseFirstChar(ingredient)
                this.ingredientsFilterList.appendChild(this.ingredientFilterListItem)
                this.ingredientFilterListItem.addEventListener("click", (e) => {
                    this._switchListFilter("ingredients", "hide")
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayAppliances) {
            this.appliancesFilterList.innerHTML = ""
            //console.log('tutu', this.arrayAppliances);
            for (let appliance of data) {
                this.applianceFilterListitem = document.createElement("li")
                this.applianceFilterListitem.classList.add("itemFilter")
                this.applianceFilterListitem.setAttribute("tabindex", "0")
                this.applianceFilterListitem.setAttribute("data-filtertype", "filterAppliance")
                this.applianceFilterListitem.textContent = this._setUpperCaseFirstChar(appliance)
                this.appliancesFilterList.appendChild(this.applianceFilterListitem)
                this.applianceFilterListitem.addEventListener("click", (e) => {
                    this._switchListFilter("appliances", "hide")
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayUstensils) {
            this.ustensilsFilterList.innerHTML = ""
            //console.log('tntn', this.arrayUstensils);
            for (let ustensil of data) {
                this.ustensilFilterListItem = document.createElement("li")
                this.ustensilFilterListItem.classList.add("itemFilter")
                this.ustensilFilterListItem.setAttribute("tabindex", "0")
                this.ustensilFilterListItem.setAttribute("data-filtertype", "filterUstensil")
                this.ustensilFilterListItem.textContent = this._setUpperCaseFirstChar(ustensil)
                this.ustensilsFilterList.appendChild(this.ustensilFilterListItem)
                this.ustensilFilterListItem.addEventListener("click", (e) => {
                    this._switchListFilter("ustensils", "hide")
                    this._displaySelectedFilter(e)
                })
            }
        }
    };

    /// Filtre par tag ///
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
        
        this.selectedFilterCloseBtns = document.querySelectorAll(".circleCrossBtn")
        for (this.filterCloseBtn of this.selectedFilterCloseBtns) {
            this.filterCloseBtn.addEventListener("click", (e) => {
                this._deleteSelectedFilter(e)
        })}

        this.arrayActiveFilters.push(this.filterName.toLowerCase())
        this.historySearch.push(this.filterName.toLowerCase())
        this._filterRecipes()

        console.log('array activ filter after selected tag', this.arrayActiveFilters);
        console.log('history search after selected tag filter', this.historySearch);
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
        this.selectedFilter = e.target.parentElement;
        this.selectedFilter.remove("display-flex")
        this.selectedfilterItem = e.target.previousElementSibling.textContent.toLowerCase();
        this.historySearch = this.historySearch.filter(filter => filter !== this.selectedfilterItem)
        console.log('history after delete a selected filter', this.historySearch);
        this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter !== this.selectedfilterItem);
        console.log('activ filter after delete a selected filter', this.arrayActiveFilters);
        this._filterRecipes()
    };
    
    /// Main searchbar management ///
    /// JS Debounce ///
    _debounce(func, timeout = 2000){
        let timer;
        return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    };
    
    /// Searchbar ///
    _mainSearch() {
        this.arrayFilteredRecipes = []
        this.mainSearchBarFilterInput = this.mainSearchBarFilter.value.toLowerCase()

        // if (this.mainSearchBarFilterInput.length <= 0 && this.arrayActiveFilters.length <= 0) {
        //     console.log('test mainsearch barr');
        //     console.log('test array activ filter main search bar', this.arrayActiveFilters);
        //     this._initDisplay()
        // }

        if (this.mainSearchBarFilterInput.length >= 3 && this.mainSearchBarFilterInput !== this.lastMainSearchInput) {
            this.lastMainSearchInput.shift()
            this.lastMainSearchInput.push(this.mainSearchBarFilterInput)
            console.log('1 lastmainsearch input', this.lastMainSearchInput);
            this.historySearch.push(this.mainSearchBarFilterInput)
            this.arrayActiveFilters.push(this.mainSearchBarFilterInput)
            this._filterRecipes()    
        } else if (this.mainSearchBarFilterInput.length === 0 && this.arrayActiveFilters.length > 0) {
            console.log('length de la searchbar filter', this.mainSearchBarFilterInput.length);
            console.log('length array activ filter', this.arrayActiveFilters.length);
            console.log('1 last main input', this.lastMainSearchInput);
            this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter !== this.lastMainSearchInput[0]);
            console.log('test activ filter after blank search', this.arrayActiveFilters);
        }
        
        else {
            console.log("Simon says : Don't move !");
            console.log('test 2 array activ filter main search bar', this.arrayActiveFilters);
        }
        // console.log('2 lastMainSearchInput', this.lastMainSearchInput);
        // console.log('historySearch', this.historySearch);
        // console.log('Main search barr after Active Filter', this.arrayActiveFilters);
    };


    /// Affichage des recettes filtrées ///
    _filterRecipes() {
        if (this.arrayActiveFilters.length > 0) {
            //console.log('test to see activ filter after delte tag filter', this.arrayActiveFilters.length);
            this.arrayActiveFilters.forEach(filter => {
                //console.log('test si for each arrayfilteredRecipe se lance');
                this.arrayFilteredRecipes = []
                this.arrayRecipes.forEach(recipe => {
                    if (recipe.name.toLowerCase().includes(filter)
                        || recipe.description.toLowerCase().includes(filter)
                        || recipe.ingredients.some((ingredients) => ingredients.ingredient.toLowerCase().includes(filter))) {   
                        this.arrayFilteredRecipes.push(recipe)
                        //console.log('test array filtered recipe after delete a tag filter', this.arrayFilteredRecipes);
                    }
                })
                this.arrayRecipes = []
                this.arrayRecipes = this.arrayFilteredRecipes
            })
            this._displayRecipeCard()
            this._setIngredientsFilterList();
            this._setAppliancesFilterList();
            this._setUstensilsFilterList();
        } else {
            this._initDisplay()
            console.log('tom');
        }
    };    

    // _filterRecipes() {
    //     this.arrayFilteredRecipes = []
    //     this.arrayRecipes.forEach(recipe => {
    //         if (recipe.name.toLowerCase().includes(this.arrayActiveFilters)
    //             || recipe.description.toLowerCase().includes(this.arrayActiveFilters)
    //             || recipe.ingredients.some((ingredients) => ingredients.ingredient.toLowerCase().includes(this.arrayActiveFilters))) {   
    //             this.arrayFilteredRecipes.push(recipe)
    //         }
    //     })
    //     this._displayRecipeCard()
    //     this._setIngredientsFilterList(this.arrayFilteredRecipes);
    //     this._setAppliancesFilterList(this.arrayFilteredRecipes);
    //     this._setUstensilsFilterList(this.arrayFilteredRecipes);
    //     //console.log('arrayFilteredRecipes', this.arrayFilteredRecipes);
    // }

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