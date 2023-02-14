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

        this.advanceSearchBarFilters = document.querySelectorAll(".filter__header--input");

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
        this.mainSearchInput = [];
        this.arrayMainSearchInputs = [];
        this.historySearch = [];
        this.isSetFocus = 0;

        /// Mes function ///
        this._initDisplay();
        // this._testFilterRecipe();

        //this._mainSearch();

        this.processChangeMain = this._debounce(() => this._mainSearch());
        this.processChangeAdvance = this._debounce(() => this._advanceSearch());
        
  
        /// Listener ///
        this.bindEvent();
    };

    bindEvent() {
        this.mainSearchBarFilter.addEventListener("keyup", this.processChangeMain)

        // if (this.mainSearchBarFilter.length > 0) {
        //     this.mainSearchBarFilter.addEventListener("keyup", this.processChangeMain)
        // }

        if (this.advanceSearchBarFilters.length > 0) {
            for (this.advanceSearchBarFilter of this.advanceSearchBarFilters) {
                this.advanceSearchBarFilter.addEventListener("keyup", this.processChangeAdvance)
            }
        }

        // if (this.advanceSearchBarFilters.length > 0) {
        //     for (this.advanceSearchBarFilter of this.advanceSearchBarFilters) {
        //         this.advanceSearchBarFilter.addEventListener("focus", this.processChangeAdvance)
        //     }
        // }

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
                this.arrayAllIngredients.push(ingredient.toLowerCase())
            })
        }
        this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
    };

    _setAppliancesFilterList() {
        this.arrayAllAppliances = []
        for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
            this.appliance = this.arrayFilteredRecipes[i].appliance
            this.arrayAllAppliances.push(this.appliance.toLowerCase())
        }
        this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
    };

    _setUstensilsFilterList() {
        this.arrayAllUstensils = []
        for (let i=0; i < this.arrayFilteredRecipes.length; i++) {
            for (let x=0; x < this.arrayFilteredRecipes[i].ustensils.length; x++) {
                this.ustensil = this.arrayFilteredRecipes[i].ustensils[x]
                this.arrayAllUstensils.push(this.ustensil.toLowerCase())
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
                    this.advanceSearchBarFilters[0].value = "";
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
                    this._displayFilterList(this.arrayAppliances)                
                }else if (task === "hide") {
                    this.filterAppliances.classList.remove("active", "width-large");
                    this.filterAppliances.classList.add("width-small")
                    this.filterAppliances.setAttribute("aria-expand", "false");
                    this.advanceSearchBarFilters[1].value = "";
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
                    this.advanceSearchBarFilters[2].value = "";
                }
                break;
        }
    };

    /// Afficher la liste des filtres ///
    _displayFilterList(data) {
        if (data === this.arrayIngredients) {
            // console.log('toto', this.arrayIngredients);
            this.ingredientsFilterList.innerHTML = ""
            for (let ingredient of data) {
                this.ingredientFilterListItem = document.createElement("li")
                this.ingredientFilterListItem.classList.add("itemFilter","ingredientFilter")
                this.ingredientFilterListItem.setAttribute("tabindex", "0")
                this.ingredientFilterListItem.setAttribute("data-filtertype", "filterIngredient")
                this.ingredientFilterListItem.textContent = this._setUpperCaseFirstChar(ingredient)
                this.ingredientsFilterList.appendChild(this.ingredientFilterListItem)
                this._removeDropdownFilter("ingredients")
                this.ingredientFilterListItem.addEventListener("click", (e) => {
                    this._switchListFilter("ingredients", "hide")
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayAppliances) {
            this.appliancesFilterList.innerHTML = ""
            for (let appliance of data) {
                this.applianceFilterListitem = document.createElement("li")
                this.applianceFilterListitem.classList.add("itemFilter", "applianceFilter")
                this.applianceFilterListitem.setAttribute("tabindex", "0")
                this.applianceFilterListitem.setAttribute("data-filtertype", "filterAppliance")
                this.applianceFilterListitem.textContent = this._setUpperCaseFirstChar(appliance)
                this.appliancesFilterList.appendChild(this.applianceFilterListitem)
                this._removeDropdownFilter("appliances")
                this.applianceFilterListitem.addEventListener("click", (e) => {
                    this._switchListFilter("appliances", "hide")
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayUstensils) {
            this.ustensilsFilterList.innerHTML = ""
            for (let ustensil of data) {
                this.ustensilFilterListItem = document.createElement("li")
                this.ustensilFilterListItem.classList.add("itemFilter","ustensilFilter")
                this.ustensilFilterListItem.setAttribute("tabindex", "0")
                this.ustensilFilterListItem.setAttribute("data-filtertype", "filterUstensil")
                this.ustensilFilterListItem.textContent = this._setUpperCaseFirstChar(ustensil)
                this.ustensilsFilterList.appendChild(this.ustensilFilterListItem)
                this._removeDropdownFilter("ustensils")
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
        // console.log('01 - e.target', e.target);
        this.filterName = e.target.textContent
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
                this._switchListFilter("ingredients", "hide")
                this._switchListFilter("appliances", "hide")
                this._switchListFilter("ustensils", "hide")
                this._deleteSelectedFilter(e)
        })}
        this.arrayActiveFilters.push(this.filterName.toLowerCase())
        this.historySearch.push(this.filterName.toLowerCase())
        this._filterRecipes()
    }; 
    
    _removeDropdownFilter(list) {
        // let activFilter = ""
        //     if (list === "ingredients") {
        //         for (activFilter of this.arrayActiveFilters) {
        //             if (activFilter === this.ingredientFilterListItem.textContent.toLowerCase()) {
        //                 console.log('ingredients');
        //                 this.ingredientFilterListItem.remove()
        //             }
        //         }
        //     } else if (list === "appliances") {
        //         for (activFilter of this.arrayActiveFilters) {
        //             if (activFilter === this.applianceFilterListitem.textContent.toLowerCase()) {
        //                 console.log('appliances');
        //                 this.applianceFilterListitem.remove()
        //             }
        //         }
        //     } else if (list === "ustensils") {
        //         for (activFilter of this.arrayActiveFilters) {
        //             if (activFilter === this.ustensilFilterListItem.textContent.toLowerCase()) {
        //                 console.log('ustensils');
        //                 this.ustensilFilterListItem.remove()
        //             }
        //         }
        //     }
        
        for (let activFilter of this.arrayActiveFilters) {
            if (list === "ingredients") {
                if (activFilter === this.ingredientFilterListItem.textContent.toLowerCase()) {
                    console.log('ingredients');
                    this.ingredientFilterListItem.remove()
                }
            } else if (list === "appliances") {
                if (activFilter === this.applianceFilterListitem.textContent.toLowerCase()) {
                    console.log('appliances');
                    this.applianceFilterListitem.remove()
                }
            } else if (list === "ustensils") {
                if (activFilter === this.ustensilFilterListItem.textContent.toLowerCase()) {
                    console.log('ustensils');
                    this.ustensilFilterListItem.remove()
                }
            }
        }
    }     
    
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
        this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter !== this.selectedfilterItem);
        // console.log('00 - array activ filter', this.arrayActiveFilters);
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
    
    _testMainSearch() {
        this.arrayFilteredRecipes = []
        this.mainSearchInput = this.mainSearchBarFilter.value.toLowerCase()


    }

    /// Searchbar ///
    _mainSearch() {
        this.arrayFilteredRecipes = []
        this.mainSearchInput = this.mainSearchBarFilter.value.toLowerCase()
        // console.log('0 - main search input', this.mainSearchInput);

        if (this.mainSearchInput.length >= 3) {
            this.arrayMainSearchInputs.push(this.mainSearchInput)
            // console.log('1 - array main search input', this.arrayMainSearchInputs);
            // console.log('1- launch test main search');
            // console.log('1 - last main search input', this.historySearch);
            // console.log('1 - main search input value', this.mainSearchInput);
            if (this.arrayMainSearchInputs.includes(this.historySearch)) {
                console.log("First Simon says : Don't move !");
           } else {
                if (this.arrayActiveFilters.includes(this.mainSearchInput)) {
                    console.log("Seconde Simon says : Don't move!");
                // if (this.arrayActiveFilters.includes(this.historySearch)) {
                //     console.log("Seconde Simon says : Don't move!");
                } else {
                    this.historySearch.shift()
                    // console.log('2 - shift last main search input', this.historySearch);
                    this.historySearch.push(this.mainSearchInput)
                    console.log('2 - history', this.historySearch);
                    // console.log('2 - array activ filter',this.arrayActiveFilters);
                    this.arrayActiveFilters.push(this.mainSearchInput)
                    // console.log('2 - after push array activ filter', this.arrayActiveFilters);
                    this._filterRecipes()
                }
           }
        } else {
            console.log('3 - launch test main search input = 0');
            console.log('3 - array activ filter', this.arrayActiveFilters);
            console.log('3 - array activ filter length', this.arrayActiveFilters.length);
            console.log('3 - history search', this.historySearch);
            console.log('3 - array main search inputs', this.arrayMainSearchInputs);

            // this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter != this.arrayMainSearchInputs)
            // console.log('4 - array activ filter', this.arrayActiveFilters);
           

        }
            // if (this.arrayActiveFilters.length > 0) {
            //     // console.log('4 - last main saerch input', this.historySearch);
            //     this.arrayActiveFilters = this.arrayActiveFilters.filter(filter => filter != this.historySearch)
            //     console.log('4 - array activ filter exclude last input', this.arrayActiveFilters);
            //     this.historySearch.shift()
            //     console.log('4 - last input after blanck', this.historySearch);
            //     this._filterRecipes()
            // }
         
    };

    _advanceSearch() { 
        for (this.advanceSearchBarFilter of this.advanceSearchBarFilters) {
            if (this.advanceSearchBarFilter.dataset.filtertype === "ingredients") {
                let itemIngredientsFilterNodeList = document.querySelectorAll(".ingredientFilter")
                if (this.advanceSearchBarFilter.value.length > 0) {
                    console.log('Simon says : go go ingredients');
                    for (let ingredientFilter of itemIngredientsFilterNodeList) {
                        
                        if (ingredientFilter.innerHTML.toLowerCase().includes(this.advanceSearchBarFilter.value)) {;
                            ingredientFilter.classList.remove("hidden")
                        } else {
                            ingredientFilter.classList.add("hidden")
                        } 
                    }
                } else {
                    console.log('Simon says : no ingredients bouhou');
                    for (let ingredientFilter of itemIngredientsFilterNodeList) {
                        ingredientFilter.classList.remove("hidden")
                    }
                }
            } else if (this.advanceSearchBarFilter.dataset.filtertype === "appliances") {
                let itemAppliancesFilterNodeList = document.querySelectorAll(".applianceFilter")
                if (this.advanceSearchBarFilter.value.length > 0) {
                    console.log('Simon says : go go appliances');
                    for (let applianceFilter of itemAppliancesFilterNodeList) {
                        if (applianceFilter.innerHTML.toLowerCase().includes(this.advanceSearchBarFilter.value)) {
                            applianceFilter.classList.remove("hidden")
                        } else {
                            applianceFilter.classList.add("hidden")
                        } 
                    }
                } else {
                    console.log('Simon says : no appliances bouhou');
                    for (let applianceFilter of itemAppliancesFilterNodeList) {
                        applianceFilter.classList.remove("hidden")
                    }
                }
            } else if (this.advanceSearchBarFilter.dataset.filtertype === "ustensils") {
                let itemUstensilsFilterNodeList = document.querySelectorAll(".ustensilFilter")
                if (this.advanceSearchBarFilter.value.length > 0) {
                    console.log('Simon says : go go ustensils');
                    for (let ustensilFilter of itemUstensilsFilterNodeList) {
                        if (ustensilFilter.innerHTML.toLowerCase().includes(this.advanceSearchBarFilter.value)) {
                            ustensilFilter.classList.remove("hidden")
                        } else {
                            ustensilFilter.classList.add("hidden")
                        } 
                    }
                } else {
                    console.log('Simon says : no ustensils bouhou');
                    for (let ustensilFilter of itemUstensilsFilterNodeList) {
                        ustensilFilter.classList.remove("hidden")
                    }
                }
            }
        }

    };

    /// Affichage des recettes filtrées ///
    _filterRecipes() {
        // console.log('A1 - launch test filter recipes');
        // console.log('A1 - array recipes', this.arrayRecipes);
        this.arrayRecipes = this.arrayAllRecipes
        if (this.arrayActiveFilters.length > 0) {
            // console.log('A2 - array activ filter', this.arrayActiveFilters);
            // console.log('A2 - array activ filter length', this.arrayActiveFilters.length);
            this.arrayActiveFilters.forEach(filter => {
                // console.log('A3 - launch test for each activ filter');
                // console.log('A3 - display filter', filter);
                this.arrayFilteredRecipes = []
                // console.log('A3 - array recipes', this.arrayRecipes);
                this.arrayRecipes.forEach(recipe => {
                    if (
                        recipe.name.toLowerCase().includes(filter)
                        || recipe.description.toLowerCase().includes(filter)
                        || recipe.ingredients.some((ingredients) => ingredients.ingredient.toLowerCase().includes(filter))) 
                        { 
                        // console.log('A4 - array filtered recipes', this.arrayFilteredRecipes);      
                        this.arrayFilteredRecipes.push(recipe)
                        // console.log('A4 - array filtered recipes', this.arrayFilteredRecipes);
                    }
                })
                // console.log('A5 - array recipes', this.arrayRecipes);
                // console.log('A5 - array filtered recipes', this.arrayFilteredRecipes);
                this.arrayRecipes = []
                this.arrayRecipes = this.arrayFilteredRecipes
                // console.log('A5 - array filtered recipes', this.arrayFilteredRecipes);
                // console.log('A5 - array recipes', this.arrayRecipes);
            })
            this._displayRecipeCard()
            this._setIngredientsFilterList();
            this._setAppliancesFilterList();
            this._setUstensilsFilterList();
            // console.log('A5 - array recipes', this.arrayRecipes);
        } else {
            this._initDisplay()
            // console.log('display all');
        }
    };    
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
  
//   const processChangeMain = debounce(() => saveInput());

//   mainSearchBarFilter.addEventListener("keyup", processChangeMain)