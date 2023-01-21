
export default class Search {
    constructor() {
        console.log('search');
        //this.button = document.getElementsByClassName("toto")[0];
        //this.button2 = document.getElementsByClassName("toto");

        this.ingredientFilterBtn = document.getElementsByClassName("filter__ingredients--chevron")[0];
        this.applianceFilterBtn = document.getElementsByClassName("filter__appliances--chevron")[0];
        this.ustensilFilterBtn = document.getElementsByClassName("filter__ustensils--chevron")[0];
        this.ingredientfilterList = document.getElementsByClassName("filter__ingredients--list")[0];

        //this.creatTest = (e) => this._creatTest(e);

        this.recipesData = getRecipesData();
        console.log('recipesData', getRecipesData());

        this.dropdownIngredients = (e) => this._dropdownIngredients(e);
        this.keyboardDropdowIngredients = (e) => this._keyboardDropdowIngredients(e);

        this.dropdownAppliances = (e) => this._dropdownAppliances(e);
        this.keyboardDropdowAppliances = (e) => this._keyboardDropdowAppliances(e);

        this.dropdownUstensils = (e) => this._dropdownUstensils(e);
        this.keyboardDropdowUstensils = (e) => this._keyboardDropdowUstensils(e);

        this.displayIngredientTagFilter = (e) => this._displayIngredientTagFilter(e);

        this.getIngredientTagFilterDOM = (e) => this._getIngredientTagFilterDOM(e)

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
            this.ingredientFilterBtn.addEventListener("click", this.dropdownIngredients)
        }
    };

    _dropdownIngredients() {
        const ingredientFilterTag = document.getElementsByClassName("tag__filter--ingredients")[0];
        const ingredientFilterTitle = document.getElementsByClassName("filter__ingredients")[0];
        const ingredientFilterInput = document.getElementsByClassName("filter__ingredients--input")[0];
        const ingredientFilterIconChevronDown = document.getElementsByClassName("filter__ingredients--chevronDown")[0];
        const ingredientFilterIconChevronUp = document.getElementsByClassName("filter__ingredients--chevronUp")[0];
        ingredientFilterTitle.classList.toggle("hidden")
        ingredientFilterInput.classList.toggle("hidden")
        ingredientFilterIconChevronDown.classList.toggle("hidden")
        ingredientFilterIconChevronUp.classList.toggle("hidden")
        const isIngredientFilterInputHidden = ingredientFilterInput.classList.contains("hidden")
        if (!isIngredientFilterInputHidden) {
            ingredientFilterTag.setAttribute("aria-expanded", "true")
            ingredientFilterTag.classList.remove("width-small")
            ingredientFilterTag.classList.add("width-large")
            this.ingredientfilterList.classList.remove("hidden")
            this.ingredientfilterList.classList.add("display-flex")
            // initIngredientTagFilter()
            this.displayIngredientTagFilter(this.recipesData)

        } else {
            ingredientFilterTag.setAttribute("aria-expanded", "false")
            ingredientFilterTag.classList.remove("width-large")
            ingredientFilterTag.classList.add("width-small")
            ingredientfilterList.classList.add("hidden")
            ingredientfilterList.classList.remove("display-flex")
        }
    };

        
    _displayIngredientTagFilter(data) {
        console.log('display2data', data); // promise Array(50)
        console.log('display2dataLength', data.length); // >>> length = undefined
        const arrayAllIngredients = [];
        for (let i=0; i < data.length; i++) {
            let ingredients = data[i].ingredients
            console.log('ingredients', ingredients);
            ingredients.map(({ingredient}) => {
                arrayAllIngredients.push(ingredient)
                console.log('arrayAllIngredients', arrayAllIngredients);
            })
        }
        const arrayIngredients = new Set(arrayAllIngredients.sort());
        console.log('arrayIngredients', arrayIngredients); 
        this.getIngredientTagFilterDOM(arrayIngredients)
    };

    _getIngredientTagFilterDOM(data) {
        console.log('get2data', data);
        for(const ingredient of data) {
            const ingredientfilterListItem = document.createElement("li")
            ingredientfilterListItem.classList.add("itemsList")
            ingredientfilterListItem.textContent = setUpperCaseFirstChar(ingredient)
            this.ingredientfilterList.appendChild(ingredientfilterListItem)
        }
    };

    
    // async initIngredientTagFilter() {
    //     const recipes = this.recipesData
    //     console.log('recipes', recipes);
    //     displayIngredientTagFilter(recipes)
    //     //this.displayIngredientTagFilter(this.recipesData)
    // };
};
