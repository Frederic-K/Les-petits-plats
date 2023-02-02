/// Import ///
import MenuTagFilter from "./Old/MenuTagFilter.js";

/// Class ///
export default class SelectedTagFilter {
    constructor(data) {
        //console.log('data', data.target);
        this.wrapper = document.createElement("div")
        //console.log('color', this.originFilter);
        this.filterName = data.target.textContent;
        this.filterType = data.target.dataset.filtertype;
        this.menuTagFilter = new MenuTagFilter(data);
    };
    _createFilter() {
        this.filterTagContent = `
            <li class="selectedFilter">${this.filterName}</li>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>
        `
        this.wrapper.innerHTML = this.filterTagContent
        this.wrapper.classList.add("tag__parking--items", "display-flex")
        this.wrapper.setAttribute("tabindex", "0")
        this.wrapper.setAttribute("aria-label", `${this.filterName}`)
        this.wrapper.addEventListener("click", (e) => {
            this.deleteSelectedFilter = this.menuTagFilter._deleteSelectedFilter(e)
        })
        if (this.filterType === "filterIngredient") {
            this.wrapper.classList.add("filter__bckground--blue")
        }
        else if (this.filterType === "filterAppliance") {
            this.wrapper.classList.add("filter__bckground--green")
        }
        else if (this.filterType === "filterUstensil") {
            this.wrapper.classList.add("filter__bckground--red")
        }
        return this.wrapper
    };
};

// function displaySelectedFilter(e) {
//     const tagParking = document.getElementsByClassName("tag__parking")[0];
//     tagParking.classList.remove("hidden");
//     const newSelectedFilter = new SelectedTagFilter(e);
//     const selectedFilter = newSelectedFilter._createFilter();
//     tagParking.appendChild(selectedFilter);
//     this.arrayActiveFilters.push(this.filterName.toLowerCase())
//     console.log('arrayActiveFilters', this.arrayActiveFilters);
// };