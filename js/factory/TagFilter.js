export default class TestTagFilter {
    constructor(data) {
        console.log('TestTagFilter', data);
        /// DOM ///
        // this.filterListbox = document.getElementsByClassName("tag__filter--listbox")[0];
        // this.filterListbox = document.querySelectorAll(".tag__filter--listbox");
        // console.log('filterListbox', this.filterListbox);
        // this.filterTitle = document.getElementsByClassName("filter__header--title")[0];
        // this.filterTitle = document.querySelectorAll(".filter__header--title");
        // console.log('this.filterTitle', this.filterTitle);

        /// Data ///

        /// Functions ///
        // this._colorDropdownMenu();
        /// Listener /// 
        // this.bindEvent();
    };

    // bindEvent() {
    //     if (this.filterBtn) {
    //         this.filterBtn.addEventListener("click", _expandDropdowFilter())
    //     }
    // };

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
};

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


function dropdownMenuListener() {
    const displayFilterMenuBtns = document.querySelectorAll(".filter__header--chevronDown");
    const hideFilterMenuBtns = document.querySelectorAll(".filter__header--chevronUp");

    for (const displayFilterMenuBtn of displayFilterMenuBtns) {
        displayFilterMenuBtn.addEventListener("click", (e) => {
            displayDropdownFilterMenu(e)
        })
    }
    for (const hideFilterMenuBtn of hideFilterMenuBtns) {
        hideFilterMenuBtn.addEventListener("click", (e) => {
            hideDropdownFilterMenu(e)
        })
    }
    
};

dropdownMenuListener();


let childrenList = "";

function displayDropdownFilterMenu(e) {
    console.log('e', e.target.parentElement.id);
    console.log('e-test-data-type', e.target.parentElement.dataset.filtertype);

    const displayMenuBtn = e.target.parentElement.id;
    if (displayMenuBtn === "displayIndgredientsBtn") {
        childrenList = document.getElementById("filterIngredients").children;
        document.getElementById("filterIngredients").classList.add("active", "width-large");
        document.getElementById("filterIngredients").classList.remove("width-small");
        document.getElementById("filterAppliances").classList.remove("active");
        document.getElementById("filterAppliances").classList.add("width-small");
        document.getElementById("filterUstencils").classList.remove("active");
        document.getElementById("filterUstencils").classList.add("width-small"); 

    } else if (displayMenuBtn === "displayAppliancesBtn") {
        childrenList = document.getElementById("filterAppliances").children;
        document.getElementById("filterAppliances").classList.add("active", "width-large");
        document.getElementById("filterAppliances").classList.remove("width-small");
        document.getElementById("filterIngredients").classList.remove("active");
        document.getElementById("filterIngredients").classList.add("width-small");
        document.getElementById("filterUstencils").classList.remove("active");
        document.getElementById("filterUstencils").classList.add("width-small"); 
    }
};

function hideDropdownFilterMenu(e) {
    const hideMenuBtn = e.target.parentElement.id;
    if (hideMenuBtn === "hideIngredientsBtn") {
        childrenList = document.getElementById("filterIngredients").children;
        document.getElementById("filterIngredients").classList.remove("active", "width-large");
        document.getElementById("filterIngredients").classList.add("width-small");

    } else if (hideMenuBtn === "hideAppliancesBtn") {
        childrenList = document.getElementById("filterAppliances").children;
        document.getElementById("filterAppliances").classList.remove("active", "width-large");
        document.getElementById("filterAppliances").classList.add("width-small")
    }
};