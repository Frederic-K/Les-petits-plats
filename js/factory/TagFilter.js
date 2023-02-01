// import TestSelectTag from "./tagFilter-1.js";

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
<<<<<<< HEAD

        
        /// Data ///
        //this.filterList = "";
        this.recipes = data;
        this.arraySelectedFilters = [];
        this.arrayAllSelectedFilters = [];
        this.arrayActiveFilters = [];
=======
        //this.ingredientsFilterList = document.getElementById("ingredientFilterList");
        //this.itemFilters = document.querySelectorAll(".itemFilter");
        // this.selectedFilters = document.querySelectorAll(".tag__parking--items");
        // console.log('tag__parking--items', this.selectedFilters);
        
        /// Data ///
        this.recipes = data;
        this.filterList = "";
        this.arraySelectedFilters = [];
>>>>>>> main
        this.arrayIngredients = [];
        this.arrayAllIngredients = []; 
        this.arrayAppliances = [];
        this.arrayAllAppliances = [];
        this.arrayUstensils = [];
        this.arrayAllUstensils = [];


        /// Functions ///
        // this._colorDropdownMenu();
        this._setUpperCaseFirstChar();
<<<<<<< HEAD
        this._initIngredientsFilterList(data);
        this._initAppliancesFilterList(data);
        this._initUstensilsFilterList(data);
=======
>>>>>>> main


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
<<<<<<< HEAD
=======
        // if (this.itemFilters.length > 0) {
        //     for (this.itemFilter of this.itemFilters) {
        //         //console.log('itemFilter', itemFilter);
        //         this.itemFilter.addEventListener("click", (e) => {
        //             //console.log('e', e);
        //             this._displaySelectedFilter(e)
        //         })
        //     }
        // }

    //     if (this.filterBtn) {
    //         this.filterBtn.addEventListener("click", _expandDropdowFilter())
    //     };
>>>>>>> main
    };


    _setUpperCaseFirstChar(string) {
        return string && string[0].toUpperCase() + string.slice(1);
    };
<<<<<<< HEAD
=======

    _displaySelectedFilter(e) {
        this.filterName = e.target.textContent;
        this.filterType = e.target.dataset.filtertype;
        this.selectedTagContainer = document.createElement("div");
        this.selectedFilterContent = `
            <li class="selectedFilter">${this.filterName}</li>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>
        `
        this.selectedTagContainer.innerHTML = this.selectedFilterContent
        this.selectedTagContainer.classList.add("tag__parking--items")
        this.selectedTagContainer.setAttribute("aria-label", `${this.filterName}`)
        this.selectedTagContainer.addEventListener("click", (e) => {
            this._deleteSelectedFilter(e)
        })
>>>>>>> main

    _initIngredientsFilterList(data) {
        //console.log('displayIngredientsFilterList-data', data);
        for (let i=0; i < data.length; i++) {
            this.ingredients = data[i].ingredients
            this.ingredients.map(({ingredient}) => {
                this.arrayAllIngredients.push(ingredient)
            })
        }
<<<<<<< HEAD
        this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
        //this._getFilterDOM(this.arrayIngredients)
    };

    _initAppliancesFilterList(data) {
        for (let i=0; i < data.length; i++) {
            this.appliance = data[i].appliance
            this.arrayAllAppliances.push(this.appliance)
=======
        else if (this.filterType === "filterUstensil") {
            this.selectedTagContainer.classList.add("filter__bckground--red")
>>>>>>> main
        }
        this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
        //this._getFilterDOM(this.arrayAppliances)
    };

<<<<<<< HEAD
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
=======
    _deleteSelectedFilter(e) {
        console.log('e.target', e.target);
        console.log('delete.E', e.target.parentElement);
        e.preventDefault()
        e.stopPropagation()
        this.indexSelectedfilter = this.arraySelectedFilters.indexOf(e.target.textContent)
        console.log('indexSelectedfilter', this.indexSelectedfilter);
        this.arraySelectedFilters.splice(this.indexSelectedfilter, 1)
        console.log('new arraySelectedFilters', this.arraySelectedFilters);
        e.target.parentElement.remove();
    }
>>>>>>> main

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
<<<<<<< HEAD
            this._displayFilterList(this.arrayIngredients);
=======
            this._displayIngredientsFilterList(this.recipes);
>>>>>>> main

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
<<<<<<< HEAD
            this._displayFilterList(this.arrayAppliances);
=======
            this._displayAppliancesFilterList(this.recipes);
>>>>>>> main

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
<<<<<<< HEAD
            this._displayFilterList(this.arrayUstensils);
=======
            this._displayUstensilsFilterList(this.recipes);
>>>>>>> main
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
<<<<<<< HEAD
=======

    _displayIngredientsFilterList(data) {
        //console.log('displayIngredientsFilterList-data', data);
        for (let i=0; i < data.length; i++) {
            this.ingredients = data[i].ingredients
            this.ingredients.map(({ingredient}) => {
                this.arrayAllIngredients.push(ingredient)
            })
        }
        this.arrayIngredients = new Set(this.arrayAllIngredients.sort())
        this._getFilterDOM(this.arrayIngredients)
    };

    _displayAppliancesFilterList(data) {
        for (let i=0; i < data.length; i++) {
            this.appliance = data[i].appliance
            this.arrayAllAppliances.push(this.appliance)
        }
        this.arrayAppliances = new Set(this.arrayAllAppliances.sort())
        this._getFilterDOM(this.arrayAppliances)
    };

    _displayUstensilsFilterList(data) {
        for (let i=0; i < data.length; i++) {
            for (let x=0; x < data[i].ustensils.length; x++) {
                this.ustensil = data[i].ustensils[x]
                this.arrayAllUstensils.push(this.ustensil)
            }
        }
        this.arrayUstensils = new Set(this.arrayAllUstensils.sort())
        this._getFilterDOM(this.arrayUstensils)
    };

    _getFilterDOM(data) {
        console.log('getfilterDOM-data', data);
        if (data === this.arrayIngredients) {
            console.log('toto');
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
            console.log('tata');
            for (let appliance of data) {
                this.applianceFilterListitem = document.createElement("li")
                this.applianceFilterListitem.classList.add("itemFiltet")
                this.applianceFilterListitem.setAttribute("tabindex", "0")
                this.applianceFilterListitem.setAttribute("data-filtertype", "filterAppliance")
                this.applianceFilterListitem.textContent = this._setUpperCaseFirstChar(appliance)
                this.appliancesFilterList.appendChild(this.applianceFilterListitem)
                this.applianceFilterListitem.addEventListener("click", (e) => {
                    this._displaySelectedFilter(e)
                })
            }
        } else if (data === this.arrayUstensils) {
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

};

// function dropdownMenuListener() {
//     const displayFilterMenuBtns = document.querySelectorAll(".filter__header--chevronDown");
//     const hideFilterMenuBtns = document.querySelectorAll(".filter__header--chevronUp");

//     for (const displayFilterMenuBtn of displayFilterMenuBtns) {
//         displayFilterMenuBtn.addEventListener("click", (e) => {
//             displayDropdownFilterMenu(e)
//         })
//     }
//     for (const hideFilterMenuBtn of hideFilterMenuBtns) {
//         hideFilterMenuBtn.addEventListener("click", (e) => {
//             hideDropdownFilterMenu(e)
//         })
//     }
    
// };

// dropdownMenuListener();

>>>>>>> main

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

<<<<<<< HEAD
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
=======
// function displayDropdownFilterMenu(e) {
//     console.log('e', e.target.parentElement.id);
//     console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);

//     const displayMenuBtn = e.target.parentElement.id;
//     if (displayMenuBtn === "displayIndgredientsBtn") {
//         document.getElementById("filterIngredients").classList.add("active", "width-large");
//         document.getElementById("filterIngredients").classList.remove("width-small");
//         document.getElementById("filterIngredients").setAttribute("aria-expanded", "true");
//         document.getElementById("filterAppliances").classList.remove("active");
//         document.getElementById("filterAppliances").classList.add("width-small");
//         document.getElementById("filterAppliances").setAttribute("aria-expanded", "false");
//         document.getElementById("filterUstencils").classList.remove("active");
//         document.getElementById("filterUstencils").classList.add("width-small");
//         document.getElementById("filterUstencils").setAttribute("aria-expanded", "false"); 

//     } else if (displayMenuBtn === "displayAppliancesBtn") {
//         document.getElementById("filterAppliances").classList.add("active", "width-large");
//         document.getElementById("filterAppliances").classList.remove("width-small");
//         document.getElementById("filterAppliances").setAttribute("aria-expanded", "true");
//         document.getElementById("filterIngredients").classList.remove("active");
//         document.getElementById("filterIngredients").classList.add("width-small");
//         document.getElementById("filterIngredients").setAttribute("aria-expanded", "false");
//         document.getElementById("filterUstencils").classList.remove("active");
//         document.getElementById("filterUstencils").classList.add("width-small");
//         document.getElementById("filterUstencils").setAttribute("aria-expanded", "false"); 

//     } else if (displayMenuBtn === "displayUstencilsBtn") {
//         document.getElementById("filterUstencils").classList.add("active", "width-large");
//         document.getElementById("filterUstencils").classList.remove("width-small");
//         document.getElementById("filterUstencils").setAttribute("aria-expanded", "true");
//         document.getElementById("filterIngredients").classList.remove("active");
//         document.getElementById("filterIngredients").classList.add("width-small");
//         document.getElementById("filterIngredients").setAttribute("aria-expanded", "false");
//         document.getElementById("filterAppliances").classList.remove("active");
//         document.getElementById("filterAppliances").classList.add("width-small");
//         document.getElementById("filterAppliances").setAttribute("aria-expanded", "false"); 
//     }
// };

// function hideDropdownFilterMenu(e) {
//     const hideMenuBtn = e.target.parentElement.id;
//     if (hideMenuBtn === "hideIngredientsBtn") {
//         document.getElementById("filterIngredients").classList.remove("active", "width-large");
//         document.getElementById("filterIngredients").classList.add("width-small");
//         document.getElementById("filterIngredients").setAttribute("aria-expand", "false");

//     } else if (hideMenuBtn === "hideAppliancesBtn") {
//         document.getElementById("filterAppliances").classList.remove("active", "width-large");
//         document.getElementById("filterAppliances").classList.add("width-small")
//         document.getElementById("filterAppliances").setAttribute("aria-expand", "false");

//     } else if (hideMenuBtn === "hideUstencilsBtn") {
//         document.getElementById("filterUstencils").classList.remove("active", "width-large");
//         document.getElementById("filterUstencils").classList.add("width-small")
//         document.getElementById("filterUstencils").setAttribute("aria-expand", "false");
//     }
// };
>>>>>>> main

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

<<<<<<< HEAD
    _deleteSelectedFilter(e) {
        console.log('e.target', e.target);
        console.log('Parent.E', e.target.parentElement);
        this.selectedFilter = e.target.parentElement
        console.log('this.selectedFilter', this.selectedFilter);
        this.indexSelectedfilter = this.arrayActiveFilters.indexOf(e.target.textContent)
        //console.log('indexSelectedfilter', this.indexSelectedfilter);
        this.arrayActiveFilters.splice(this.indexSelectedfilter, 1)
        console.log('new arrayActiveFilters', this.arrayActiveFilters);
        //e.target.parentElement.remove();
        this.selectedFilter.remove("display-flex")
        //this.selectedTagContainer.add("hidden")
        e.preventDefault()
        e.stopPropagation()
    }
};
=======
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
>>>>>>> main

