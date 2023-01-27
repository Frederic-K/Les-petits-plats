// import TestSelectTag from "./tagFilter-1.js";

export default class TestTagFilter {
    constructor(data) {
        console.log('TestTagFilter', data);
        /// DOM ///
        // this.filterListbox = document.querySelectorAll(".tag__filter--listbox");
        // console.log('filterListbox', this.filterListbox);
        // this.filterTitle = document.querySelectorAll(".filter__header--title");
        // console.log('this.filterTitle', this.filterTitle);
        this.filterIngredients = document.getElementById("filterIngredients");
        this.filterAppliances = document.getElementById("filterAppliances");
        this.filterUstencils = document.getElementById("filterUstencils");
        this.displayFilterMenuBtns = document.querySelectorAll(".filter__header--chevronDown");
        this.hideFilterMenuBtns = document.querySelectorAll(".filter__header--chevronUp");

        this.tagFilterParking = document.getElementsByClassName("tag__parking")[0];
        this.itemFilters = document.querySelectorAll(".itemFilter");
        // this.selectedFilters = document.querySelectorAll(".tag__parking--items");
        // console.log('tag__parking--items', this.selectedFilters);
        
        /// Data ///
        this.filterList = "";
        this.arraySelectedFilters = [];
        this.arrayIngredients = []; 
        this.arrayAppliances = [];
        this.arrayUstencils = [];

        /// Functions ///
        // this._colorDropdownMenu();


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
        if (this.itemFilters.length > 0) {
            for (this.itemFilter of this.itemFilters) {
                //console.log('itemFilter', itemFilter);
                this.itemFilter.addEventListener("click", (e) => {
                    //console.log('e', e);
                    this._displaySelectedFilter(e)
                })
            }
        }

    //     if (this.filterBtn) {
    //         this.filterBtn.addEventListener("click", _expandDropdowFilter())
    //     };
    };

    // _colorDropdownMenu() {
    //     for (this.title of this.filterTitle) {
    //         if (this.title.textContent === "Ingredients") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--blue")
    //         } else if (this.title.textContent === "Appareils") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--green")
    //         } else if (this.title.textContent === "Ustenciles") {
    //             this.title.parentElement.parentElement.classList.add("filter__bckground--red")
    //         }
    //     }
    // };

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

        if (this.filterType === "filterIngredient") {
            this.selectedTagContainer.classList.add("filter__bckground--blue")
        }
        else if (this.filterType === "filterAppliance") {
            this.selectedTagContainer.classList.add("filter__bckground--green")
        }
        else if (this.filterType === "filterUstencil") {
            this.selectedTagContainer.classList.add("filter__bckground--red")
        }
        this.tagFilterParking.appendChild(this.selectedTagContainer)
        this.arraySelectedFilters.push(this.filterName)
        console.log('arraySelectedFilters', this.arraySelectedFilters);
    };

    _deleteSelectedFilter(e) {
        console.log('delete.E', e.target.textContent);
        this.indexSelectedfilter = this.arraySelectedFilters.indexOf(e.target.textContent)
        console.log('indexSelectedfilter', this.indexSelectedfilter);
        this.arraySelectedFilters.splice(this.indexSelectedfilter, 1)
        console.log('new arraySelectedFilters', this.arraySelectedFilters);
    }

    //let childrenList = "";

    _displayDropdownFilterMenu(e) {
        // console.log('e', e.target.parentElement.id);
        // console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);

        this.displayMenuBtn = e.target.parentElement.id;
        if (this.displayMenuBtn === "displayIndgredientsBtn") {
            this.childrenList = document.getElementById("filterIngredients").children;
            this.filterIngredients.classList.add("active", "width-large");
            this.filterIngredients.classList.remove("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "true");
            this.filterAppliances.classList.remove("active");
            this.filterAppliances.classList.add("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "false");
            this.filterUstencils.classList.remove("active");
            this.filterUstencils.classList.add("width-small");
            this.filterUstencils.setAttribute("aria-expanded", "false"); 

        } else if (this.displayMenuBtn === "displayAppliancesBtn") {
            this.childrenList = document.getElementById("filterAppliances").children;
            this.filterAppliances.classList.add("active", "width-large");
            this.filterAppliances.classList.remove("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "true");
            this.filterIngredients.classList.remove("active");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "false");
            this.filterUstencils.classList.remove("active");
            this.filterUstencils.classList.add("width-small");
            this.filterUstencils.setAttribute("aria-expanded", "false"); 

        } else if (this.displayMenuBtn === "displayUstencilsBtn") {
            this.childrenList = document.getElementById("filterUstencils").children;
            this.filterUstencils.classList.add("active", "width-large");
            this.filterUstencils.classList.remove("width-small");
            this.filterUstencils.setAttribute("aria-expanded", "true");
            this.filterIngredients.classList.remove("active");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expanded", "false");
            this.filterAppliances.classList.remove("active");
            this.filterAppliances.classList.add("width-small");
            this.filterAppliances.setAttribute("aria-expanded", "false"); 
        }
    };

    _hideDropdownFilterMenu(e) {
        this.hideMenuBtn = e.target.parentElement.id;
        if (this.hideMenuBtn === "hideIngredientsBtn") {
            this.childrenList = document.getElementById("filterIngredients").children;
            this.filterIngredients.classList.remove("active", "width-large");
            this.filterIngredients.classList.add("width-small");
            this.filterIngredients.setAttribute("aria-expand", "false");

        } else if (this.hideMenuBtn === "hideAppliancesBtn") {
            this.childrenList = document.getElementById("filterAppliances").children;
            this.filterAppliances.classList.remove("active", "width-large");
            this.filterAppliances.classList.add("width-small")
            this.filterAppliances.setAttribute("aria-expand", "false");

        } else if (this.hideMenuBtn === "hideUstencilsBtn") {
            this.childrenList = document.getElementById("filterUstencils").children;
            this.filterUstencils.classList.remove("active", "width-large");
            this.filterUstencils.classList.add("width-small")
            this.filterUstencils.setAttribute("aria-expand", "false");
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


// let childrenList = "";

// function displayDropdownFilterMenu(e) {
//     console.log('e', e.target.parentElement.id);
//     console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);

//     const displayMenuBtn = e.target.parentElement.id;
//     if (displayMenuBtn === "displayIndgredientsBtn") {
//         childrenList = document.getElementById("filterIngredients").children;
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
//         childrenList = document.getElementById("filterAppliances").children;
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
//         childrenList = document.getElementById("filterUstencils").children;
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
//         childrenList = document.getElementById("filterIngredients").children;
//         document.getElementById("filterIngredients").classList.remove("active", "width-large");
//         document.getElementById("filterIngredients").classList.add("width-small");
//         document.getElementById("filterIngredients").setAttribute("aria-expand", "false");

//     } else if (hideMenuBtn === "hideAppliancesBtn") {
//         childrenList = document.getElementById("filterAppliances").children;
//         document.getElementById("filterAppliances").classList.remove("active", "width-large");
//         document.getElementById("filterAppliances").classList.add("width-small")
//         document.getElementById("filterAppliances").setAttribute("aria-expand", "false");

//     } else if (hideMenuBtn === "hideUstencilsBtn") {
//         childrenList = document.getElementById("filterUstencils").children;
//         document.getElementById("filterUstencils").classList.remove("active", "width-large");
//         document.getElementById("filterUstencils").classList.add("width-small")
//         document.getElementById("filterUstencils").setAttribute("aria-expand", "false");
//     }
// };


// function switchListFilter(filter, action) {
//     let childrenList = null;
//     switch (filter) {
//         case "ingredients":
//             childrenList = document.getElementById("filterIngredients").children;
//             if (action === "display") {
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
//             childrenList = document.getElementById("filterAppliances").children;
//             if (action === "display") {
//                 document.getElementById("filterAppliances").classList.add("active", "width-large");
//                 document.getElementById("filterAppliances").classList.remove("width-small");
//                 document.getElementById("filterIngredients").classList.remove("active");
//                 document.getElementById("filterIngredients").classList.add("width-small");
//                 document.getElementById("filterUstencils").classList.remove("active");
//                 document.getElementById("filterUstencils").classList.add("width-small");                 
//             }else if (action === "hide"){
//                 document.getElementById("filterAppliances").classList.remove("active", "width-large");
//                 document.getElementById("filterAppliances").classList.add("width-small");
//             }
//             break;
//         case "ustencils":
//             childrenList = document.getElementById("filterUstencils").children;
//             if (action === "display") {
//                 document.getElementById("filterUstencils").classList.add("active", "width-large");
//                 document.getElementById("filterUstencils").classList.remove("width-small");
//                 document.getElementById("filterIngredients").classList.remove("active");
//                 document.getElementById("filterIngredients").classList.add("width-small");
//                 document.getElementById("filterAppliances").classList.remove("active");
//                 document.getElementById("filterAppliances").classList.add("width-small");                
//             }else if (action === "hide"){
//                 document.getElementById("filterUstencils").classList.remove("active");
//                 document.getElementById("filterUstencils").classList.add("width-small");
//             }
//             break;
//     }
// };

// function dropdowMenuFilterListener() {
//     document.getElementById("displayIndgredientsBtn").addEventListener("click", () => {
//         switchListFilter("ingredients", "display")
//     })
//     document.getElementById("hideIngredientsBtn").addEventListener("click", () => {
//         switchListFilter("ingredients", "hide")
//     })
//     document.getElementById("displayAppliancesBtn").addEventListener("click", () => {
//         switchListFilter("appliances", "display")
//     })
//     document.getElementById("hideAppliancesBtn").addEventListener("click", () => {
//         switchListFilter("appliances", "hide")
//     })
//     document.getElementById("displayUstencilsBtn").addEventListener("click", () => {
//         switchListFilter("ustencils", "display")
//     })
//     document.getElementById("hideUstencilsBtn").addEventListener("click", () => {
//         switchListFilter("ustencils", "hide")