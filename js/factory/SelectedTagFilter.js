export default class SelectedTagFilter {
    constructor(data) {
        //console.log('data', data.target);
        this.wrapper = document.createElement("div")
        this.originFilter = data.target.parentElement
        //console.log('color', this.originFilter);
        this.filterName = data.target.textContent;
        this.filterType = data.target.dataset.filtertype; 
        //this._createFilter();
    };
    _createFilter() {
        this.filterTagContent = `
            <li class="selectedFilter">${this.filter}</li>
            <span class="fa-regular fa-circle-xmark circleCrossBtn"></span>
        `
        this.wrapper.innerHTML = this.filterTagContent
        this.wrapper.classList.add("tag__parking--items", "display-flex")
        this.wrapper.setAttribute("tabindex", "0")
        this.wrapper.setAttribute("aria-label", `${this.filterName}`)
        if (this.filterType.classList.contains("filter__ustensils--list")) {
            this.wrapper.classList.add("filter__bckground--red")
        }
        else if (this.filterType.classList.contains("filter__appliances--list")) {
            this.wrapper.classList.add("filter__bckground--green")
        }
        else if (this.filterType.classList.contains("filter__ingredients--list")) {
            this.wrapper.classList.add("filter__bckground--blue")
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