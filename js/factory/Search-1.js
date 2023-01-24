
export default class Search {
    constructor() {
        console.log('search');
        /// DOM /// 
        /// Ingredients ///
        this.ingredientFilterTag = document.getElementsByClassName("tag__filter--ingredients")[0];
        this.ingredientFilterTitle = document.getElementsByClassName("filter__ingredients")[0];
        this.ingredientFilterInput = document.getElementsByClassName("filter__ingredients--input")[0];
        this.ingredientFilterBtn = document.getElementsByClassName("filter__ingredients--chevron")[0];
        this.ingredientFilterIconChevronDown = document.getElementsByClassName("filter__ingredients--chevronDown")[0];
        this.ingredientFilterIconChevronUp = document.getElementsByClassName("filter__ingredients--chevronUp")[0];
        this.ingredientFilterList = document.getElementsByClassName("filter__ingredients--list")[0];

        /// DOM ///
        /// Appareils ///
        this.applianceFilterTag = document.getElementsByClassName("tag__filter--appliances")[0];
        this.applianceFilterTitle = document.getElementsByClassName("filter__appliances")[0];
        this.applianceFilterInput = document.getElementsByClassName("filter__appliances--input")[0];
        this.applianceFilterBtn = document.getElementsByClassName("filter__appliances--chevron")[0];
        this.applianceFilterIconChevronDown = document.getElementsByClassName("filter__appliances--chevronDown")[0];
        this.applianceFilterIconChevronUp = document.getElementsByClassName("filter__appliances--chevronUp")[0];
        this.applianceFilterList = document.getElementsByClassName("filter__appliances--list")[0];

        /// DOM ///
        /// Ustensiles ///
        this.ustensilFilterTag = document.getElementsByClassName("tag__filter--ustensils")[0];
        this.ustensilFilterTitle = document.getElementsByClassName("filter__ustensils")[0];
        this.ustensilFilterInput = document.getElementsByClassName("filter__ustensils--input")[0];
        this.ustensilFilterBtn = document.getElementsByClassName("filter__ustensils--chevron")[0];
        this.ustensilFilterIconChevronDown = document.getElementsByClassName("filter__ustensils--chevronDown")[0];
        this.ustensilFilterIconChevronUp = document.getElementsByClassName("filter__ustensils--chevronUp")[0];
        this.ustensilFilterList = document.getElementsByClassName("filter__ustensils--list")[0];

        /// Fonctions ///
        //this.creatTest = (e) => this._creatTest(e);
        //this.dropdownIngredients = (e) => this._dropdownIngredients(e);
        this._dropdownIngredients()
        // this._dropdownAppliances();
        // this._dropdownUstensils();
        this.bindEvent();

    };

    bindEvent() {
        //initiliser tous les addEventListener ici
        // if (this.button) {
        //     this.button.addEventListener("click", this.creatTest(e));
        // }
        // // Pour clic ds liste tag filter = 
        // if (this.button2.length > 0) {
        //     for (const bouton2 of this.button2) {
        //         bouton2.addEventListener("click", console.log('Tarlatata'));
        //     }
        // }
        if (this.ingredientFilterBtn) {
            this.ingredientFilterBtn.addEventListener("click", this._dropdownIngredients())
        }
    };

    _dropdownIngredients() {
        this.ingredientFilterTitle.classList.toggle("hidden")
        this.ingredientFilterInput.classList.toggle("hidden")
        this.ingredientFilterIconChevronDown.classList.toggle("hidden")
        this.ingredientFilterIconChevronUp.classList.toggle("hidden")
        const isIngredientFilterInputHidden = this.ingredientFilterInput.classList.contains("hidden")
        if (!isIngredientFilterInputHidden) {
            this.ingredientFilterTag.setAttribute("aria-expanded", "true")
            this.ingredientFilterTag.classList.remove("width-small")
            this.ingredientFilterTag.classList.add("width-large")
            this.ingredientFilterList.textContent = ""
            this.ingredientFilterList.classList.remove("hidden")
            this.ingredientFilterList.classList.add("display-flex")
    
            this.applianceFilterList.classList.add("hidden")
            this.applianceFilterList.classList.remove("display-flex")
            this.applianceFilterTag.classList.remove("width-large")
            this.applianceFilterTag.classList.add("width-small")
            this.applianceFilterInput.classList.add("hidden")
            this.applianceFilterTitle.classList.remove("hidden")
    
            this.ustensilFilterList.classList.add("hidden")
            this.ustensilFilterList.classList.remove("display-flex")
            this.ustensilFilterTag.classList.remove("width-large")
            this.ustensilFilterTag.classList.add("width-small")
            this.ustensilFilterInput.classList.add("hidden")
            this.ustensilFilterTitle.classList.remove("hidden")
            this._initIngredientTagFilter()
        } else {
            this.ingredientFilterTag.setAttribute("aria-expanded", "false")
            this.ingredientFilterTag.classList.remove("width-large")
            this.ingredientFilterTag.classList.add("width-small")
            this.ingredientFilterList.classList.add("hidden")
            this.ingredientFilterList.classList.remove("display-flex")
        }
    };
    _getIngredientTagFilterDOM(data) {
        //console.log('data', data);
        for (const ingredient of data) {
            const ingredientFilterListItem = document.createElement("li")
            this.ingredientFilterListItem.classList.add("itemsList")
            this.ingredientFilterListItem.setAttribute("tabindex", "0")
            this.ingredientFilterListItem.setAttribute("onclick", "displaySelectedFilter(event)")
            this.ingredientFilterListItem.textContent = setUpperCaseFirstChar(ingredient)
            this.ingredientFilterList.appendChild(ingredientFilterListItem)
        }
    };
    
    _displayIngredientTagFilter(data) {
        //console.log('data', data);
        //const arrayAllIngredients = [];
        for (let i=0; i < data.length; i++) {
            let ingredients = data[i].ingredients
            //console.log('ingredients', ingredients);
            ingredients.map(({ingredient}) => {
                arrayAllIngredients.push(ingredient)
                //console.log('arrayIngredients', arrayAllIngredients);
            })
        }
        const arrayIngredients = new Set(arrayAllIngredients.sort());
        //console.log('arrayIngredients', arrayIngredients); 
        this._getIngredientTagFilterDOM(arrayIngredients)
    }
    
    _initIngredientTagFilter() {
        const recipes = getRecipesData()
        //console.log('recipes', recipes);
        this._displayIngredientTagFilter(recipes)
    };
    
};
