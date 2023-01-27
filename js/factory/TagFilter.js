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
        this.filterList = "";

        /// Data ///

        /// Functions ///
        // this._colorDropdownMenu();
        // this._displayDropdownFilterMenu();
        // this._hideDropdownFilterMenu();

        /// Listener /// 
        this.bindEvent();
    };

    bindEvent() {
    //     if (this.filterBtn) {
    //         this.filterBtn.addEventListener("click", _expandDropdowFilter())
    //     }
        if (this.displayFilterMenuBtns.length > 0) {
            for (const displayFilterMenuBtn of this.displayFilterMenuBtns) {
                displayFilterMenuBtn.addEventListener("click", (e) => {
                    this._displayDropdownFilterMenu(e)
                })
            }
            for (const hideFilterMenuBtn of this.hideFilterMenuBtns) {
                hideFilterMenuBtn.addEventListener("click", (e) => {
                    this._hideDropdownFilterMenu(e)
                })
            }

        }
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

    //let childrenList = "";

    _displayDropdownFilterMenu(e) {
        console.log('e', e.target.parentElement.id);
        console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);

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