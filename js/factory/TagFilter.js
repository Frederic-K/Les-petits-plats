//import SelectedTagFilter from "./SelectedTagFilter.js";

export default class TestTagFilter {
    constructor(data) {
        //console.log('TestTagFilter', data);

        /// DOM ///
        this.filterIngredients = document.getElementById("filterIngredients");
        this.filterAppliances = document.getElementById("filterAppliances");
        this.filterUstensils = document.getElementById("filterUstensils");
        this.displayFilterMenuBtns = document.querySelectorAll(".filter__header--chevronDown");
        this.hideFilterMenuBtns = document.querySelectorAll(".filter__header--chevronUp");

        this.tagFilterParking = document.getElementsByClassName("tag__parking")[0];
        this.ingredientsFilterList = document.getElementsByClassName("tag__filter--list")[0];
        this.appliancesFilterList = document.getElementsByClassName("tag__filter--list")[1];
        this.ustensilsFilterList = document.getElementsByClassName("tag__filter--list")[2];
        
        /// Data ///
        this.recipes = data;
        this.filterList = "";
        this.arraySelectedFilters = [];
        this.arrayAllSelecetdFilter = [];
        this.arrayActiveFilters = [];
        this.arrayIngredients = [];
        this.arrayAllIngredients = []; 
        this.arrayAppliances = [];
        this.arrayAllAppliances = [];
        this.arrayUstensils = [];
        this.arrayAllUstensils = [];


        /// Functions ///
        // this._colorDropdownMenu();
        this._setUpperCaseFirstChar();
        this._initIngredientsFilterList(data);
        this._initAppliancesFilterList(data);
        this._initUstensilsFilterList(data);


        /// Listener /// 
        this.bindEvent();
    };

    bindEvent() {
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

    _displaySelectedFilter(e) {
        this.filterName = e.target.textContent;
        this.filterType = e.target.dataset.filtertype;
        this.selectedTagContainer = document.createElement("div");
        this.selectedFilterContent = `
            <li class="selectedFilter">${this.filterName}</li>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>   
        `
        this.selectedTagContainer.innerHTML = this.selectedFilterContent
        this.selectedTagContainer.classList.add("tag__parking--items", "display-flex")
        this.selectedTagContainer.setAttribute("aria-label", `${this.filterName}`)
        this.selectedTagContainer.setAttribute("tabindex", "0")
        this.selectedTagContainer.setAttribute("data-status", "selected")
        this.selectedTagContainer.addEventListener("click", (e) => {
            this._deleteSelectedFilter(e)
        })

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
        console.log('arrayActiveFilters', this.arrayActiveFilters);
    };
    
    _deleteSelectedFilter(e) {
        //console.log('e.target', e.target);
        //console.log('Parent.E', e.target.parentElement);
        this.selectedFilter = e.target.parentElement
        //console.log('this.selectedFilter', this.selectedFilter);
        this.indexSelectedfilter = this.arrayActiveFilters.indexOf(e.target.textContent)
        //console.log('indexSelectedfilter', this.indexSelectedfilter);
        this.arrayActiveFilters.splice(this.indexSelectedfilter, 1)
        console.log('new arrayActiveFilters', this.arrayActiveFilters);
        this.selectedFilter.remove();
        //this.selectedTagContainer.remove("display-flex")
        //this.selectedTagContainer.add("hidden")
        //e.preventDefault()
        //e.stopPropagation()
    }
};

// function switchListFilter(filter, task) {
//     switch (filter) {
//         case "ingredients":
//             if (task === "display") {
//                 document.getElementById("filterIngredients").classList.add("active", "width-large");
//                 document.getElementById("filterIngredients").classList.remove("width-small");
//                 document.getElementById("filterAppliances").classList.remove("active");
//                 document.getElementById("filterAppliances").classList.add("width-small");
//                 document.getElementById("filterUstencils").classList.remove("active");
//                 document.getElementById("filterUstencils").classList.add("width-small");                 
//             }else if (action === "hide"){
//                 document.getElementById("filterIngredients").classList.remove("active", "width-large");
//                 document.getElementById("filterIngredients").classList.add("width-small");
//             }
//             break;
//         case "appliances":
//             if (task === "display") {
//                 document.getElementById("filterAppliances").classList.add("active", "width-large");
//                 document.getElementById("filterAppliances").classList.remove("width-small");
//                 document.getElementById("filterIngredients").classList.remove("active");
//                 document.getElementById("filterIngredients").classList.add("width-small");
//                 document.getElementById("filterUstencils").classList.remove("active");
//                 document.getElementById("filterUstencils").classList.add("width-small");                 
//             }else if (task === "hide"){
//                 document.getElementById("filterAppliances").classList.remove("active", "width-large");
//                 document.getElementById("filterAppliances").classList.add("width-small");
//             }
//             break;
//         case "ustencils":
//             if (task === "display") {
//                 document.getElementById("filterUstencils").classList.add("active", "width-large");
//                 document.getElementById("filterUstencils").classList.remove("width-small");
//                 document.getElementById("filterIngredients").classList.remove("active");
//                 document.getElementById("filterIngredients").classList.add("width-small");
//                 document.getElementById("filterAppliances").classList.remove("active");
//                 document.getElementById("filterAppliances").classList.add("width-small");                
//             }else if (task === "hide"){
//                 document.getElementById("filterUstencils").classList.remove("active");
//                 document.getElementById("filterUstencils").classList.add("width-small");
//             }
//             break;
//     }
// };


