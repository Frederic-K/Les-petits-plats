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

    // _expandDropdowFilter() {

    // }


};



// function tagFilterListener() {
//     document.getElementById("displayTagFilterListIngredients").addEventListener("click", () => {
//         const newSelectedFilter = new TestTagFilter(["test", "banane"])
//         console.log('newSelectedFilter', newSelectedFilter);
//         const selectedFilter = newSelectedFilter._switchListFilter()
//         console.log('selectedFilter', selectedFilter);
//         return selectedFilter
//     })
// }

function switchListFilter(filter, action) {
    let childrenList = null;
    switch (filter) {
        case "ingredients":
            childrenList = document.getElementById("filterIngredients").children;
            if (action === "display") {
                document.getElementById("filterIngredients").classList.add("active", "width-large");
                document.getElementById("filterIngredients").classList.remove("width-small");
                document.getElementById("filterAppliances").classList.remove("active");
                document.getElementById("filterAppliances").classList.add("width-small");
                document.getElementById("filterUstencils").classList.remove("active");
                document.getElementById("filterUstencils").classList.add("width-small");                 
            }else if (action === "hide"){
                document.getElementById("filterIngredients").classList.remove("active", "width-large");
                document.getElementById("filterIngredients").classList.add("width-small");
            }
            break;
        case "appliances":
            childrenList = document.getElementById("filterAppliances").children;
            if (action === "display") {
                document.getElementById("filterAppliances").classList.add("active", "width-large");
                document.getElementById("filterAppliances").classList.remove("width-small");
                document.getElementById("filterIngredients").classList.remove("active");
                document.getElementById("filterIngredients").classList.add("width-small");
                document.getElementById("filterUstencils").classList.remove("active");
                document.getElementById("filterUstencils").classList.add("width-small");                 
            }else if (action === "hide"){
                document.getElementById("filterAppliances").classList.remove("active", "width-large");
                document.getElementById("filterAppliances").classList.add("width-small");
            }
            break;
        case "ustencils":
            childrenList = document.getElementById("filterUstencils").children;
            if (action === "display") {
                document.getElementById("filterUstencils").classList.add("active", "width-large");
                document.getElementById("filterUstencils").classList.remove("width-small");
                document.getElementById("filterIngredients").classList.remove("active");
                document.getElementById("filterIngredients").classList.add("width-small");
                document.getElementById("filterAppliances").classList.remove("active");
                document.getElementById("filterAppliances").classList.add("width-small");                
            }else if (action === "hide"){
                document.getElementById("filterUstencils").classList.remove("active");
                document.getElementById("filterUstencils").classList.add("width-small");
            }
            break;
    }
};

function dropdowMenuFilterListener() {
    document.getElementById("displayIndgredientsBtn").addEventListener("click", () => {
        switchListFilter("ingredients", "display")
    })
    document.getElementById("hideIngredientsBtn").addEventListener("click", () => {
        switchListFilter("ingredients", "hide")
    })
    document.getElementById("displayAppliancesBtn").addEventListener("click", () => {
        switchListFilter("appliances", "display")
    })
    document.getElementById("hideAppliancesBtn").addEventListener("click", () => {
        switchListFilter("appliances", "hide")
    })
    document.getElementById("displayUstencilsBtn").addEventListener("click", () => {
        switchListFilter("ustencils", "display")
    })
    document.getElementById("hideUstencilsBtn").addEventListener("click", () => {
        switchListFilter("ustencils", "hide")
    })
};

dropdowMenuFilterListener();